const { ethers, upgrades } = require("hardhat")

async function main(){

    const proxyAddress = ""
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Preparing upgrade...");
    const boxV2 = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
    console.log("BoxV2 at:", boxV2Address)

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })