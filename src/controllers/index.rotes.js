import { pool } from "../db.js";

export const index = (req, res) => res.json({ message: "Api de Pumba para ver End Points, Utilice Postman --> /apis" });

export const ping = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM endpoint');
  res.json(result);
};
