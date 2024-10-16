import { Keypair } from "@solana/web3.js";
export const arrayToKeypair = (keys) => {
    const secret = Uint8Array.from(keys);
    const keypair = Keypair.fromSecretKey(secret);
    return keypair;
};
