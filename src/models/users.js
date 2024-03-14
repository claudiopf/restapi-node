const dbPool = require('../config/Database');

const getAllUsers = () => {
  SQLQuery = 'SELECT * FROM users';

  return dbPool.execute(SQLQuery);
};

module.exports = { getAllUsers };
