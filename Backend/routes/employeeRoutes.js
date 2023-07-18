import express from "express";
import {
  addEmployee,
  deleteAllEmployees,
  deleteEmployeeById,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

router
.route("/")
.get(getAllEmployees)
.post(addEmployee)
.delete(deleteAllEmployees);
router
.route("/:id")
.get(getEmployeeById)
.put(updateEmployee)
.delete(deleteEmployeeById);

export default router;
