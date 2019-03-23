pragma solidity >=0.4.22 <0.6.0;

import "./../helpers/SafeMath.sol";
import "./../STAKE/STAKE.sol";

contract Database is STAKE {
  using SafeMath for uint256;

  struct MedicalReport {
    uint256 blockNumber;
    uint256 timestamp;
    uint256 weight;
    address owner;
    address[] reviewers;
    address[] reviewed;
    bool isClosed;
  }

  mapping (bytes32 => MedicalReport) store; // hashRoot => MedicalReport
  mapping (address => bytes32[]) achievements; // owner => hashRoot
  bytes32[] explorer;
  event SubmitReport(address indexed reporter, bytes32 hashRoot);
  event ScoreReport(address indexed reviewer, bytes32 _hashRoot, uint256 completeness, uint256 importance);
  event CloseReport(address indexed reporter, bytes32 _hashRoot, uint256 reward);

  /**
   * Constructor
   */
  constructor(address _bootstrapNode, uint256 _bootstrapValue) public {
    mint(_bootstrapNode, _bootstrapValue);
  }

  /**
   * Modifiers
   */
  modifier onlyOwner(bytes32 _hashRoot) {
    MedicalReport memory _mr = store[_hashRoot];
    require(_mr.owner == msg.sender, "Invalid authentication");
    _;
  }

  modifier onlyReviewer(bytes32 _hashRoot) {
    MedicalReport memory _mr = store[_hashRoot];
    require(indexOf(msg.sender, _mr.reviewers) != _mr.reviewers.length, "Invalid authentication");
    require(indexOf(msg.sender, _mr.reviewed) == _mr.reviewed.length, "Invalid authentication");
    _;
  }

  modifier validCompleteness(uint256 _completeness) {
    require(_completeness >= 0 && _completeness <= 60, "Invalid completeness score");
    _;
  }

  modifier validImportance(uint256 _importance) {
    require(_importance >= 0 && _importance <= 40, "Invalid importance score");
    _;
  }

  modifier isOpened(bytes32 _hashRoot) {
    MedicalReport memory _mr = store[_hashRoot];
    require(!_mr.isClosed);
    _;
  }

  modifier isClosed(bytes32 _hashRoot) {
    MedicalReport memory _mr = store[_hashRoot];
    require(_mr.isClosed);
    _;
  }

  /**
   * Public functions
   */
  function submitReport(bytes32 _hashRoot, address[] memory _reviewers) public {
    MedicalReport memory _mr = MedicalReport(block.number, block.timestamp, 0, msg.sender, _reviewers, new address[](0), false);
    store[_hashRoot] = _mr;
    achievements[msg.sender].push(_hashRoot);
    explorer.push(_hashRoot);
    emit SubmitReport(msg.sender, _hashRoot);
  }

  /**
   * Weight is calculated by mean
   */
  function scoreReport(
    bytes32 _hashRoot,
    uint256 _completeness,
    uint256 _importance
  )
    public
    validCompleteness(_completeness)
    validImportance(_importance)
    onlyReviewer(_hashRoot)
    isOpened(_hashRoot)
  {
    store[_hashRoot].reviewed.push(msg.sender);
    uint256 weight = store[_hashRoot].weight;
    uint256 harmony = store[_hashRoot].reviewed.length;
    uint256 point = stakeOf(msg.sender).mul(_completeness.add(_importance)).div(100);
    if(harmony > 1) {
      store[_hashRoot].weight = weight.mul(harmony.sub(1)).add(point).div(harmony);
    } else {
      store[_hashRoot].weight = point;
    }
    emit ScoreReport(msg.sender, _hashRoot, _completeness, _importance);
  }

 /**
  * Reward is for reporter
  * Incentive is for reviewers
  * Reward is 10% of Weight
  * Incentive is 25% of Reward
  */
  function closeReport(bytes32 _hashRoot)
    public
    onlyOwner(_hashRoot)
    isOpened(_hashRoot)
  {
    store[_hashRoot].isClosed = true;
    uint256 reward = store[_hashRoot].weight.mul(10).div(100);
    uint256 incentive = reward.div(4).div(store[_hashRoot].reviewed.length);
    mint(msg.sender, reward);
    for(uint256 i = 0; i < store[_hashRoot].reviewed.length; i++) {
      mint(store[_hashRoot].reviewed[i], incentive.div(store[_hashRoot].reviewed.length));
    }
    emit CloseReport(msg.sender, _hashRoot, reward);
  }

  function getExplorer(uint256 _index) public view returns (bytes32) {
    uint256 index = explorer.length - _index;
    return explorer[index];
  }

  function getReport(bytes32 _hashRoot) public view returns (uint256, uint256, uint256, address, bool) {
    return (
      store[_hashRoot].blockNumber,
      store[_hashRoot].timestamp,
      store[_hashRoot].weight,
      store[_hashRoot].owner,
      store[_hashRoot].isClosed
    );
  }

  /**
   * Private functions 
   */
  function indexOf(address item, address[] memory list) private pure returns (uint256) {
    for (uint256 i = 0; i < list.length; i++) {
      if(item == list[i]) return i;
    }
    return list.length;
  }
}