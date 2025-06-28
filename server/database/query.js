const pool = require("./pool");

const getMessage = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

const addMessage = async (text, user) => {
  await pool.query(`INSERT INTO messages (text, "user") VALUES ($1, $2)`, [
    text,
    user,
  ]);
};

module.exports = {
  getMessage,
  addMessage,
};
