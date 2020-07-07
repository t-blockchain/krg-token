const { projectId, mnemonic } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    networks: {
        development: {
            protocol: 'http',
            host: 'localhost',
            port: 8545,
            gas: 5000000,
            gasPrice: 5e9,
            networkId: '*',
        },
        mainnet: {
            provider: () => new HDWalletProvider(
                mnemonic, `https://mainnet.infura.io/v3/${projectId}`
            ),
            networkId: 1,
            gas: 5000000,
            gasPrice: 60000000000
        }
    },
};
