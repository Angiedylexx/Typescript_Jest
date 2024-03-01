import dotenv from "dotenv";

dotenv.config()

export const user: string = process.env.DB_USERNAME || 'postgres';
export const database: string = process.env.DB_DATABASE || 'movies';
export const password: string = process.env.PASSWORD || '';
export const port: string = process.env.PORT || '3000';
export const host: string = process.env.DB_HOST || 'localhost'