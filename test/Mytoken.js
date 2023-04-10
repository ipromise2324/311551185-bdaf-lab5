const { expect } = require("chai");

describe("Mytoken", function () {
  let Mytoken;
  let mytoken;
  let owner;
  let addr1;
  let addr2;

  const initialSupply = ethers.utils.parseUnits("1000", 18);

  beforeEach(async function () {
    Mytoken = await ethers.getContractFactory("Mytoken");
    [owner, addr1, addr2] = await ethers.getSigners();
    mytoken = await Mytoken.deploy(initialSupply);
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await mytoken.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await mytoken.balanceOf(owner.address);
      expect(await mytoken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Minting", function () {
    it("Should mint tokens", async function () {
      await mytoken.connect(owner).mint(addr1.address, 100);
      expect(await mytoken.balanceOf(addr1.address)).to.equal(100);
    });

    it("Should not allow minting from non-owner accounts", async function () {
      await expect(mytoken.connect(addr1).mint(addr2.address, 100)).to.be.revertedWith(
        "Ownable: caller is not the owner"
      );
    });
  });

  describe("Burning", function () {
    it("Should burn tokens", async function () {
      await mytoken.connect(owner).burn(100);
      expect(await mytoken.balanceOf(owner.address)).to.equal(initialSupply.sub(100));
    });

    it("Should not allow burning from non-owner accounts", async function () {
      await expect(mytoken.connect(addr1).burn(100)).to.be.revertedWith(
        "Ownable: caller is not the owner"
      );
    });
  });

  describe("Transfer Ownership", function () {
    it("Should transfer ownership", async function () {
      await mytoken.connect(owner).transferOwnership(addr1.address);
      expect(await mytoken.owner()).to.equal(addr1.address);
    });

    it("Should not allow transfer ownership from non-owner accounts", async function () {
      await expect(mytoken.connect(addr1).transferOwnership(addr2.address)).to.be.revertedWith(
        "Ownable: caller is not the owner"
      );
    });
  });
});
