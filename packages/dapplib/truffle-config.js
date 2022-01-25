require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad hope knee surge symbol'; 
let testAccounts = [
"0x4fa174beb6da93806438389f8138df4481e1c8d225117e9745ad87e86fd6f150",
"0x05d391f0d5fef493374ec828c3e4c5701e607515344259f32fa643104871b9c4",
"0x3c2dd6dbd12acfda90da96600dd821a2ae251b464e2a5aafd18589a069182daa",
"0x9ed3a3d6214cf3865eea4f135596ad07df9f2ef916efe858b6bded092ec1779c",
"0x65a96cdd4a26d9a321fd5c660b239f28542bed33de967479918aff61b1832312",
"0x4f2fa6b918b48245a9fd7dad0475f3b7bc67c4624cd8114559f4269ff8774a32",
"0x53aa2f8044f57404364ccf808fd5f0eec605f52f2e7a8eade422a4541543326c",
"0x2f14feb15af6986dc31598aca50c6e25619c8732e2a4f1d25ceb954b663e610d",
"0x11dc42af3f9d1be573a5804a928fd2f5aa86dd4c7394b3179184b73abb3d3180",
"0xe890b05403d4ad3863fe76a3eb501ceba99a3a36fa8c7f12b7de9c29a9f3c33b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


