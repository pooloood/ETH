const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "f675d7be3d2f4e6394dcec12cf4aafa2";
const fs = require('fs');
const mnemonic = "dune frog album blood elegant memory anxiety service congress mix secret wealth";
module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/f675d7be3d2f4e6394dcec12cf4aafa2`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: false     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers: {
    solc: {
        version: "0.5.2",
    }
  }
}