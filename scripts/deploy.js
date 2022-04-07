const { ethers, upgrades } = require("hardhat");

async function main() {

  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying Box, ProxyAdmin, and then Proxy...")

  const proxy = await upgrades.deployProxy(Box, [42], { initializer: "store"});
  const initialValue = await proxy.retrieve()
  console.log("Initial Value: ", initialValue.toString());
  console.log("Proxy of Box deployed to:", proxy.address)

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
