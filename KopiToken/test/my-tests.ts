import { expect } from "chai";
import hre, { ethers } from "hardhat";

describe("KopiToken", function () {

    let owner: any, addr1: any, addr2: any, Token: any, token: any;
    
    before(async function () {
        [owner, addr1, addr2] = await hre.ethers.getSigners();
        Token = await hre.ethers.getContractFactory("KopiToken");
        token = await Token.deploy(owner.address, addr1.address);
        await token.waitForDeployment();
    });

    describe("Deployment", function () {
        it("The contract is deployed and the owner is established", async function () {
            expect(await token.owner()).to.equal(owner.address);
        });

        it("Initial balance in addr1", async function () {
           expect(await token.balanceOf(addr1.address)).to.equal(1000000n * 10n ** 18n);
        });
    });

    describe("Minting", function () {
        it("Owner can mint", async function () {
            await token.connect(owner).mint(addr2.address, 500);
            expect(await token.balanceOf(addr2.address)).to.equal(500);
        });

        it("Non-owner cannot mint", async function () {
            await expect(token.connect(addr1).mint(addr2.address, 500)).to.be.revertedWithCustomError(token, "OwnableUnauthorizedAccount");
        });
    });

    describe("Pause and Unpause", function () {
        it("Owner can pause", async function () {
            await token.connect(owner).pause();
            expect(await token.paused()).to.equal(true);
        });

        it("Non-owner cannot pause", async function () {
            await expect(token.connect(addr1).pause())
                .to.be.revertedWithCustomError(token, "OwnableUnauthorizedAccount");
        });    

        it("Transfer should be blocked when paused", async function () {
            if (!(await token.paused())) {
                await token.connect(owner).pause();
            }
            await expect(token.connect(addr1).transfer(addr2.address, 500))
                .to.be.revertedWithCustomError(token, "EnforcedPause");
        });
    
    });

    describe("Transfer", function () {
        it("Checking transfer when mint", async function () {
            await token.connect(owner).unpause();
            const tx = await token.connect(owner).mint(addr1.address, 500);
            const receipt = await tx.wait();
            console.log("Gas used for mint:", receipt.gasUsed.toString());
            expect(receipt.status).to.equal(1);
        });

        it("Checking the event Transfer when mint", async function () {
            await expect(token.connect(owner).mint(addr1.address, 500))
                .to.emit(token, "Transfer")
                .withArgs(ethers.ZeroAddress, addr1.address, 500);
        }); 
    });
});