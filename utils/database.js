import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'node-backend',
  'root',
  '',
  {
    dialect: 'mysql',
    host: 'localhost', 
  }
);

export default sequelize;
