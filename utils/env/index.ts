import * as dotenv from "dotenv";

dotenv.config({path: ".env.local"});

const LINEA_SEPOLIA_API_URL = process.env.NEXT_PUBLIC_LINEA_SEPOLIA_API_URL!;
const DATABASE_URL = process.env.NEXT_PUBLIC_DATABASE_URL!;
const WALLETCONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

const DEFAULT_AVATAR = 'https://beige-tremendous-leopon-72.mypinata.cloud/ipfs/QmRdZtcKiGJ5fKhcYQ6czCWbbeve1VwprmjrP8AiZZNdGi';
const DEFAULT_PROFILE = 'https://beige-tremendous-leopon-72.mypinata.cloud/ipfs/QmRdZtcKiGJ5fKhcYQ6czCWbbeve1VwprmjrP8AiZZNdGi';
const DEFAULT_INDEX = 'https://beige-tremendous-leopon-72.mypinata.cloud/ipfs/QmRdZtcKiGJ5fKhcYQ6czCWbbeve1VwprmjrP8AiZZNdGi';


export {
    LINEA_SEPOLIA_API_URL,
    DATABASE_URL,
    WALLETCONNECT_PROJECT_ID,
    DEFAULT_AVATAR,
    DEFAULT_PROFILE,
    DEFAULT_INDEX,
}