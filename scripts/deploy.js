const { ethers } = require("hardhat");

async function main() {
  const initialSupply = ethers.utils.parseUnits("1000", 18); 
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Mytoken = await ethers.getContractFactory("Mytoken");
  const mytoken = await Mytoken.deploy(initialSupply);

  console.log("Mytoken address:", mytoken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
