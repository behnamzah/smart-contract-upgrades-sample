const { ethers, upgrades } = require("hardhat");

async function main(){

    const proxyAddress = "0x0C4c89ea15a930B50ceBea715f92A3F99aF94b7E";

    const BoxV2 = await ethers.getContractFactory("BoxV2");
    let box = await upgrades.upgradeProxy(proxyAddress, BoxV2);
    const newValue = box.increment();

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
