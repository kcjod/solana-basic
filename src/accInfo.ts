import { PublicKey,Connection } from "@solana/web3.js";

export const accInfo = async(address: string)=>{
    const conn = new Connection("https://api.devnet.solana.com/","confirmed")
    const publicKey = new PublicKey(address)
    const accountInfo = await conn.getAccountInfo(publicKey)
    console.log(accountInfo);
}

(async()=>{
    await accInfo("PUBLIC_KEY")
  })()