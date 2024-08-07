import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE, 
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD, 
    {
       host: process.env.MYSQL_HOST,
      //  port: process.env.MYSQL_PORT,
       logging: false,
       dialect: 'mysql'
    }
);
  sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error: ' + err));

export default sequelize;