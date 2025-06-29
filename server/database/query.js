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

const editMessageById = async (id, text, user) => {
  const { rows } = await pool.query(
    `UPDATE messages SET text = $1, "user" = $2 WHERE id = $3 RETURNING *`,
    [text, user, id]
  );
  return rows[0];
};

module.exports = {
  getMessage,
  addMessage,
  deleteMessage,
  getMessageById,
  editMessageById,
};
