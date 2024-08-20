import hre from "hardhat";

async function main() {
  const contract = await hre.viem.getContractAt(
    "SpeckERC1155",
    "0xE0716b2D6e64e450107a7057459DEE3a4992f802"
  );

  const address = '0x758Dc39D053c771cd81b7E40ba986432f5696BF8'
  const id = '1'
  const amount = 1 * 10 ** 18
  const data = '0x0'

  const args = [
    address,
    id,
    amount,
    data
  ]

  console.log(`Minting ${amount} tokens to ${address} ...`);
  const simulateResult = await contract.simulate.mint(args)
  // console.log('simulateResult', simulateResult)
  const txHash = await contract.write.mint(args)

  console.log('Waiting tx...', txHash);

  const publicClient = await hre.viem.getPublicClient();
  const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash });

  console.log('Transaction confirmed!');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
