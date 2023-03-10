import { pool } from "../db.js";

export const getEndPoints = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM endpoint");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getEndPoint = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM endpoint WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "endpoint no encontrado" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Error en  getEndPoint" });
  }
};

export const deleteEndPoint = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM endpoint WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "End Point not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Se ha eliminado correctamente" });
  }
};

export const createEndPoint = async (req, res) => {
  try {
    
    const { api, url, verbo, body, request, response_ok, response_nok } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO endpoint (api, url, verbo, body, request, response_ok, response_nok) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [api, url, verbo, body, request, response_ok, response_nok]
    );
    res.status(201).json({ id: rows.insertId, url });
  } catch (error) {
    return res.status(500).json({ error });
  }
  
};

export const updateEndPoint = async (req, res) => {
  try {
    const { id } = req.params;
    const { api, url, verbo, request, response_ok, response_nok } = req.body;

    const [result] = await pool.query(
      "UPDATE endpoint SET api = IFNULL(?, api), url = IFNULL(?, url), verbo = IFNULL(?, verbo), request = IFNULL(?, request), response_ok = IFNULL(?, response_ok), response_nok = IFNULL(?, response_nok) WHERE id = ?",
      [api, url, verbo, request, response_ok, response_nok, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "EndPoint not found" });

    const [rows] = await pool.query("SELECT * FROM endpoint WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
