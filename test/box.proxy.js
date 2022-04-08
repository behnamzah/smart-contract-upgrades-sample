const { inputToConfig } = require("@ethereum-waffle/compiler");
const { expect } = require("chai");

let Box, box;

describe("Deploying Proxy Box", function(){

    beforeEach( async function(){
        Box = await ethers.getContractFactory("Box");
        box = await upgrades.deployProxy(Box, [42], { initializer: 'store' });
    });

    it('retrieve returns previously value', async function () {
        expect((await box.retrieve()).toString()).to.equal('42')
        expect(() => { box.increment() }).to.throw(TypeError)
      })
      it('upgrades', async function () {
        const BoxV2 = await ethers.getContractFactory("BoxV2")
        box = await upgrades.upgradeProxy(box.address, BoxV2)
        await box.increment()
        let result = await box.retrieve()
        expect(result).to.equal(43)
      })

})