import {neon} from "@neondatabase/serverless";
import {drizzle} from "drizzle-orm/d1";

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
const db = drizzle(sql);