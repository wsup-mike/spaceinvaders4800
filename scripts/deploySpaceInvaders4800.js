
const hre = require("hardhat");

async function main() {

  const SpaceInvaders4800 = await hre.ethers.getContractFactory("SpaceInvaders4800");
  const spaceInvaders4800 = await SpaceInvaders4800.deploy();

  await spaceInvaders4800.deployed();

  console.log("SpaceInvaders4800 deployed to:", spaceInvaders4800.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
