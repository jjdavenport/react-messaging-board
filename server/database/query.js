const pool = require("./pool");

const getMessage = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

module.exports = {
  getMessage,
};
