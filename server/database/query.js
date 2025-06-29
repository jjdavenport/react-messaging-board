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

const deleteMessage = async (text, user) => {
  await pool.query(`DELETE FROM messages (text, "user") VALUES ($1, $2)`, [
    text,
    user,
  ]);
};

const getMessageById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
};

module.exports = {
  getMessage,
  addMessage,
  deleteMessage,
  getMessageById,
};
