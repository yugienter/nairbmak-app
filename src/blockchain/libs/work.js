var EventEmitter = require('events');
var TOKEN_ABI = require('../api/contracts/WORK.json').abi;

// Errors
const ADDRESS_ERROR = 'Invalid address';

class Work {
  constructor(TOKEN_ADDRESS, web3Instance) {
    class Emitter extends EventEmitter { }
    this.emitter = new Emitter();

    this.USER = {
      ACCOUNT: null,
      BALANCE: null
    }

    if (!web3Instance) return false;
    this.web3 = web3Instance;

    if (!TOKEN_ABI) return false;
    if (!TOKEN_ADDRESS || !this.web3.isAddress(TOKEN_ADDRESS)) return false;
    var CONTRACT = this.web3.eth.contract(TOKEN_ABI).at(TOKEN_ADDRESS);

    this.TOKEN = {
      ABI: TOKEN_ABI,
      ADDRESS: TOKEN_ADDRESS,
      INSTANCE: CONTRACT
    }
  }

  /**
   * Statics
   */
  static get ABI() { return TOKEN_ABI }

  /**
   * Get token balance
   * @param {*} address 
   */
  balanceOf(address) {
    var self = this;
    return new Promise((resolve, reject) => {
      if (!self.web3.isAddress(address)) return reject(ADDRESS_ERROR);
      self.TOKEN.INSTANCE.balanceOf(address, (er, balance) => {
        if (er) return reject(er);
        return resolve(Number(balance));
      });
    });
  }

  /**
   * Get allowance
   * @param {*} allower 
   * @param {*} allowee 
   */
  allowance(allower, allowee) {
    var self = this;
    return new Promise((resolve, reject) => {
      if (!self.web3.isAddress(allower)) return reject(ADDRESS_ERROR);
      if (!self.web3.isAddress(allowee)) return reject(ADDRESS_ERROR);
      self.TOKEN.INSTANCE.allowance(allower, allowee, (er, balance) => {
        if (er) return reject(er);
        return resolve(Number(balance));
      });
    });
  }

  /**
   * Transfer token
   * @param {*} to 
   * @param {*} amount 
   */
  transfer(to, amount) {
    var self = this;
    return new Promise((resolve, reject) => {
      if (!self.web3.isAddress(to)) return reject(ADDRESS_ERROR);
      self.TOKEN.INSTANCE.transfer(
        to,
        amount,
        { from: self.web3.eth.coinbase },
        (er, txId) => {
          if (er) return reject(er);
          return resolve(txId);
        });
    });
  }

  /**
   * Approve token
   * @param {*} to 
   * @param {*} amount 
   */
  approve(to, amount) {
    var self = this;
    return new Promise((resolve, reject) => {
      if (!self.web3.isAddress(to)) return reject(ADDRESS_ERROR);
      self.TOKEN.INSTANCE.approve(
        to,
        amount,
        { from: self.web3.eth.coinbase },
        (er, txId) => {
          if (er) return reject(er);
          return resolve(txId);
        });
    });
  }

  /**
   * Transfer token from allower
   * @param {*} to 
   * @param {*} amount 
   */
  transferFrom(from, to, amount) {
    var self = this;
    return new Promise((resolve, reject) => {
      if (!self.web3.isAddress(from)) return reject(ADDRESS_ERROR);
      if (!self.web3.isAddress(to)) return reject(ADDRESS_ERROR);
      self.TOKEN.INSTANCE.transferFrom(
        from,
        to,
        amount,
        { from: self.web3.eth.coinbase },
        (er, txId) => {
          if (er) return reject(er);
          return resolve(txId);
        });
    });
  }
}

export default Work;