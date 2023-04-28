import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const componentSequelize = new Sequelize(
    process.env.POST_DB as string, 
    process.env.POST_USER as string, 
    process.env.POST_PASSWORD,{
    dialect: 'postgres',
    host: '127.0.0.1',
    port: Number(process.env.POST_PORT)
});