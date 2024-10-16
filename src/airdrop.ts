import { PublicKey, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export const airdrop = async (amount: number, address: string) => {
  const publicKey = new PublicKey(address);
  const conn = new Connection("https://api.devnet.solana.com/", "confirmed");

  const signature = await conn.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
  console.log("Airdrop Signature: ", signature);

  const result = await conn.confirmTransaction(signature);
  console.log("Transaction Confirmation: ", result);
};

(async()=>{
  await airdrop(1,"PUBLIC_KEY")
})()