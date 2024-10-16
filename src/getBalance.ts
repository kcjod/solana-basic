import { PublicKey,Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export const balance = async (address: string)=>{
    const conn = new Connection("https://api.devnet.solana.com/","confirmed")
    const publicKey = new PublicKey(address)
    const balance = await conn.getBalance(publicKey)
    const acc_balance = balance/LAMPORTS_PER_SOL
    console.log(acc_balance+"SOL");
}

(async()=>{
    await balance("PUBLIC_KEY");
})()