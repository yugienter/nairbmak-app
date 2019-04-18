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
      case '88':
        network = 'Mainnet';
        break;
      case '89':
        network = 'Testnet';
        break;
      default:
        network = 'Testnet';
    }
    return network;
  }

  /**
   * Get link https://scan.testnet.tomochain.com/txs/<txId>
   */
  static linkTxScan(netId, tx) {
    netId = netId.toString();
    var network = '';
    switch (netId) {
      case '88':
        network = '';
        break;
      case '89':
        network = 'testnet.';
        break;
      default:
        network = '';
    }
    return `https://scan.${network}tomochain.com/txs/${tx}`;
  }

  /**
   * Get link https://scan.testnet.tomochain.com/blocks/<blockHeight>
   */
  static linkBlockScan(netId, block) {
    netId = netId.toString();
    var network = '';
    switch (netId) {
      case '88':
        network = '';
        break;
      case '89':
        network = 'testnet.';
        break;
      default:
        network = '';
    }
    return `https://scan.${network}tomochain.com/blocks/${block}`;
  }

  /**
   * Get link https://scan.testnet.tomochain.com/address/<address>
   */
  static linkAddressScan(netId, address) {
    netId = netId.toString();
    var network = '';
    switch (netId) {
      case '88':
        network = '';
        break;
      case '89':
        network = 'testnet.';
        break;
      default:
        network = '';
    }
    return `https://scan.${network}tomochain.com/address/${address}`;
  }
}

export default Util;