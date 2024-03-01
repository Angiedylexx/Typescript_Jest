import { Sequelize } from "sequelize";
import {user, password, host, database} from "../config/index"

const sequelize = new Sequelize(`postgres://${user}:${password}@${host}:5432/${database}`);
  
async function connectToDatabase() {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
}

//sequelize.close()
connectToDatabase();

export default sequelize;