const Hasai = artifacts.require("Hasai");
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

module.exports = async function (deployer) {
    try {
        await deployProxy(Hasai, [
            '[weth address]',
            '[nft price oracle address]'
        ],
        {
            deployer,
            initializer: 'initialize'
        });

        console.table({ address: Hasai.address });
    } catch {}
};
