pragma solidity >=0.4.22 <0.6.0;

import "./../helpers/SafeMath.sol";
import "./../STAKE/STAKE.sol";

contract Database is STAKE {
  using SafeMath for uint256;

  struct MedicalReport {
    bytes32 hashRoot;
    uint256 timestamp;
    uint256 weight;
    address owner;
    address[] reviewers;
    address[] reviewed;
    bool isClosed;
  }

  mapping (address => MedicalReport[]) achievements;
  event SubmitReport(address indexed reporter, uint256 index, bytes32 hashRoot);
  event ScoreReport(address indexed reviewer, address reporter, uint256 index, uint256 completeness, uint256 importance);
  event CloseReport(address indexed reporter, uint256 index, uint256 reward);

  /**
   * Constructor
   */
  constructor(address _bootstrapNode, uint256 _bootstrapValue) public {
    mint(_bootstrapNode, _bootstrapValue);
  }

  /**
   * Modifiers
   */
  modifier onlyOwner(MedicalReport memory _mr) {
    require(_mr.owner == msg.sender, "Invalid authentication");
    _;
  }

  modifier onlyReviewer(MedicalReport memory _mr) {
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

  modifier isOpened(MedicalReport memory _mr) {
    require(!_mr.isClosed);
    _;
  }

  modifier isClosed(MedicalReport memory _mr) {
    require(_mr.isClosed);
    _;
  }

  /**
   * Public functions
   */
  function submitReport(bytes32 _hashRoot, address[] memory _reviewers) public {
    MedicalReport memory _mr = MedicalReport(_hashRoot, block.timestamp, 0, msg.sender, _reviewers, new address[](0), false);
    achievements[msg.sender].push(_mr);
    emit SubmitReport(msg.sender, achievements[msg.sender].length.sub(1), _hashRoot);
  }

  /**
   * Weight is calculated by mean
   */
  function scoreReport(
    address _reporter,
    uint256 _index,
    uint256 _completeness,
    uint256 _importance
  )
    public
    validCompleteness(_completeness)
    validImportance(_importance)
    onlyReviewer(achievements[_reporter][_index])
    isOpened(achievements[_reporter][_index])
  {
    achievements[_reporter][_index].reviewed.push(msg.sender);
    uint256 weight = achievements[_reporter][_index].weight;
    uint256 harmony = achievements[_reporter][_index].reviewed.length;
    uint256 point = stakeOf(msg.sender).mul(_completeness.add(_importance)).div(100);
    if(harmony > 1) {
      achievements[_reporter][_index].weight = weight.mul(harmony.sub(1)).add(point).div(harmony);
    } else {
      achievements[_reporter][_index].weight = point;
    }
    emit ScoreReport(msg.sender, _reporter, _index, _completeness, _importance);
  }

  /*
  * Reward is for reporter
  * Incentive is for reviewers
  * Reward is 10% of Weight
  * Incentive is 25% of Reward
  */
  function closeReport(uint256 _index)
    public
    onlyOwner(achievements[msg.sender][_index])
    isOpened(achievements[msg.sender][_index])
  {
    achievements[msg.sender][_index].isClosed = true;
    uint256 reward = achievements[msg.sender][_index].weight.mul(10).div(100);
    uint256 incentive = reward.div(4).div(achievements[msg.sender][_index].reviewed.length);
    mint(msg.sender, reward);
    for(uint256 i = 0; i < achievements[msg.sender][_index].reviewed.length; i++) {
      mint(achievements[msg.sender][_index].reviewed[i], incentive.div(achievements[msg.sender][_index].reviewed.length));
    }
    emit CloseReport(msg.sender, _index, reward);
  }

  function getBasicReportInfo(address _reporter, uint256 _index) public view returns (bytes32, uint256, uint256, address, bool) {
    MedicalReport memory _mr = achievements[_reporter][_index];
    return (_mr.hashRoot, _mr.timestamp, _mr.weight, _mr.owner, _mr.isClosed);
  }

  function getReportReviewer(address _reporter, uint256 _index, uint256 _order) public view returns (address, bool) {
    MedicalReport memory _mr = achievements[_reporter][_index];
    bool isReviewed = indexOf(_mr.reviewers[_order], _mr.reviewed) != _mr.reviewed.length;
    return (_mr.reviewers[_order], isReviewed);
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