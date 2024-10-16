import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import { airdrop } from "./airdrop";
import { balance } from "./getBalance";
export const transferSol = async (from, to, amount) => {
    try {
        const conn = new Connection("https://api.devnet.solana.com/", "confirmed");
        const transaction = new Transaction();
        const instruction = SystemProgram.transfer({
            fromPubkey: from.publicKey,
            toPubkey: to,
            lamports: LAMPORTS_PER_SOL * amount
        });
        transaction.add(instruction);
        await sendAndConfirmTransaction(conn, transaction, [from]);
        console.log("Transaction completed");
    }
    catch (error) {
        console.error("Transaction failed", error);
    }
};
const secret = Uint8Array.from([]);
const fromKeypair = Keypair.fromSecretKey(secret);
const toPublickey = new PublicKey("PUBLIC_KEY");
(async () => {
    try {
        await airdrop(5, fromKeypair.publicKey.toString());
        await balance(fromKeypair.publicKey.toString());
    }
    catch (error) {
        console.error("Error during airdrop or balance check", error);
    }
})();
