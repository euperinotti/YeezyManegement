import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const componentSequelize = new Sequelize(
    process.env.MYSQL_DB as string, 
    process.env.MYSQL_USER as string, 
    process.env.MYSQL_PASSWORD,{
    dialect: 'mysql',
    host: '127.0.0.1',
    port: Number(process.env.MYSQL_PORT)
});