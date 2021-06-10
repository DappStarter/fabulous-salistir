require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind history hockey entire tackle stable'; 
let testAccounts = [
"0x0a7b5e46987b54a3d5ec7626b0e8204589232ac4dcad382bfc4648eab7397b48",
"0x37e860544ef214efcd533a8e7ab784363bb7522bf774029ba2d9b154fcb7d400",
"0x63a35a8bc56c7666fb77fed54e484cc648fce532b9e70bc0dea1a5329a57b1f2",
"0x4f581e712ee29a281b321213666c4d435882d41e9840d63e097df3e78a1d5c43",
"0x39d4a5545a694189aa8995f7fd94aef4d99a983b87065d2b220cdfe669b30259",
"0x60ba1fa1f6a0f6235367a5b4a22867c9c6a99ffd959116a59aa30eecf7c31252",
"0xe9c0afb9a339fee8e2eb3b93fa996e196c95b5a769a4187bb6629a40b92fae71",
"0x52e898cbcb160015f1cd801853c91b4e1de7f4d83fea4dfbeb5ca145afa916c2",
"0x484a4cd9a9e58815b6437eb86bc5b42b4a7ae162627873b27031d0a4d2f8a294",
"0x084445880071ff7b24fa7d846d1e5b6a7b4806a2ed3b223b5b8217bc993cf64f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

