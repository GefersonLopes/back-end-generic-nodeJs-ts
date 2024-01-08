import { DataSource } from "typeorm";
import "dotenv/config";

export const AppDataSource = new DataSource({
    type: "postgres",
    // url: process.env.DATABASE_URL,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PWD,

    ssl:
        process.env.NODE_ENV === "production"
            ? { rejectUnauthorized: false }
            : false,

    logging: true,
    synchronize: true,

    entities:
        process.env.NODE_ENV === "production"
            ? ["dist/entities/*.js"]
            : ["src/entities/*.ts"],
    migrations:
        process.env.NODE_ENV === "production"
            ? ["dist/migrations/*.js"]
            : ["src/migrations/*.ts"],
});
