const { upgrades } = require("hardhat");

async function main(){

    const gnosisSafeAddress = "address";

    console.log("Transferring ownership of ProxyAdmin...");
    await upgrades.admin.transferProxyAdminOwnership(gnosisSafeAddress);
    console.log("Transferred ownership of ProxyAdmin to:", gnosisSafeAddress)

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    });