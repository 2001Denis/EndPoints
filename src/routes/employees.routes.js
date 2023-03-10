import { Router } from "express";
import {
  createEndPoint,
  deleteEndPoint,
  getEndPoints,
  getEndPoint,
  updateEndPoint,
} from "../controllers/employees.controller.js";

const router = Router();

// GET all Employees
router.get("/app", getEndPoints);

// GET An Employee
router.get("/app/:id", getEndPoint);

// DELETE An Employee
router.delete("/app/:id", deleteEndPoint);

// INSERT An Employee
router.post("/app", createEndPoint);

router.patch("/app/:id", updateEndPoint);

export default router;
