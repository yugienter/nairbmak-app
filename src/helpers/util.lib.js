class Util {

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
  static etherScan(netId, tx) {
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
   * Get link https://etherscan.io/token/generic-tokenholders2?a=<contract_address>&s=<total_supply>&p=<page>
   */
  static holderAPI(netId, address, totalSupply, page) {
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
    return 'https://' + network + 'etherscan.io/token/generic-tokenholders2?a=' + address + '&s=' + totalSupply + '&p=' + page;
  }
}

export default Util;