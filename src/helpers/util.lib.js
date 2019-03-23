var bs58 = require('bs58');

class Util {

  static isIn(e, a) {
    if (!e) return false;
    if (!a || a.length <= 0) return false;

    for (let i = 0; i < a.length; i++) {
      if (e === a[i]) return true;
    }
    return false;
  }

  static string2Array(s) {
    if (!s) return [];
    return s.split(',').map(function (item) {
      return item.trim();
    });
  }

  static decodeIPFSHash(hash) {
    if (!hash || typeof hash !== 'string') return null;
    if (hash.length === 66) return hash;
    if (hash.length === 64) return '0x' + hash;
    try {
      let bytes = bs58.decode(hash);
      let string = bytes.toString('hex');
      return '0x' + string.replace('1220', '');
    } catch (er) {
      return null;
    }
  }

  static code2Name(code) {
    if (!code) return null;
    code = code.toString();
    var network = '';
    switch (code) {
      case '1':
        network = 'Mainnet';
        break;
      case '3':
        network = 'Ropsten';
        break;
      case '4':
        network = 'Rinkeby';
        break;
      case '42':
        network = 'Kovan';
        break;
      default:
        network = 'Mainnet';
    }
    return network;
  }

  /**
   * Get link https://rinkeby.etherscan.io/tx/<txId>
   */
  static linkTxEtherscan(netId, tx) {
    netId = netId.toString();
    var network = '';
    switch (netId) {
      case '1':
        network = '';
        break;
      case '3':
        network = 'ropsten.';
        break;
      case '4':
        network = 'rinkeby.';
        break;
      case '42':
        network = 'kovan.';
        break;
      default:
        network = '';
    }
    return 'https://' + network + 'etherscan.io/tx/' + tx;
  }

  /**
   * Get link https://rinkeby.etherscan.io/block/<blockHeight>
   */
  static linkBlockEtherscan(netId, block) {
    netId = netId.toString();
    var network = '';
    switch (netId) {
      case '1':
        network = '';
        break;
      case '3':
        network = 'ropsten.';
        break;
      case '4':
        network = 'rinkeby.';
        break;
      case '42':
        network = 'kovan.';
        break;
      default:
        network = '';
    }
    return 'https://' + network + 'etherscan.io/block/' + block;
  }

  /**
   * Get link https://rinkeby.etherscan.io/address/<address>
   */
  static linkAddressEtherscan(netId, address) {
    netId = netId.toString();
    var network = '';
    switch (netId) {
      case '1':
        network = '';
        break;
      case '3':
        network = 'ropsten.';
        break;
      case '4':
        network = 'rinkeby.';
        break;
      case '42':
        network = 'kovan.';
        break;
      default:
        network = '';
    }
    return 'https://' + network + 'etherscan.io/address/' + address;
  }
}

export default Util;