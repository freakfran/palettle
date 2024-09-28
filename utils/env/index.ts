import * as dotenv from "dotenv";

dotenv.config({path: ".env.local"});

const LINEA_SEPOLIA_API_URL = process.env.NEXT_PUBLIC_LINEA_SEPOLIA_API_URL!;
const DATABASE_URL = process.env.NEXT_PUBLIC_DATABASE_URL!;
const WALLETCONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

console.log(LINEA_SEPOLIA_API_URL)

export {
    LINEA_SEPOLIA_API_URL,
    DATABASE_URL,
    WALLETCONNECT_PROJECT_ID
}