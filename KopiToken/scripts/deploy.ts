import { ethers } from 'hardhat';

async function main () {
    const [deployer] = await ethers.getSigners();
    if (!deployer) {
      console.error('No deployer found');
      throw new Error('No deployer found');
      
    }
    const MyToken = await ethers.getContractFactory('KopiToken');
    console.log('Deploying MyToken...');
    
    const token = await MyToken.deploy(deployer.address, deployer.address);
    await token.waitForDeployment();
    console.log('Box deployed to:', await token.getAddress());
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });