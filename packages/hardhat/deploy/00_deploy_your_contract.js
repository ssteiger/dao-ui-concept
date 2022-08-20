const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const [signer0, signer1, signer2, signer3] = await ethers.getSigners();
  const chainId = await getChainId();

  console.log({ deployer });

  await deploy("MembershipNFT", {
    from: deployer,
    // args: [],
    log: true,
    waitConfirmations: 1,
  });

  const MembershipNFT = await ethers.getContract("MembershipNFT", deployer);

  await deploy("MyGovernor", {
    from: deployer,
    args: [MembershipNFT.address],
    log: true,
    waitConfirmations: 1,
  });

  const MyGovernor = await ethers.getContract("MyGovernor", deployer);

  await MembershipNFT.setTreasury(MyGovernor.address);
};

module.exports.tags = ["MyGovernor"];
