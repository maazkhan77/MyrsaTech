import connectDB from "../config/db.js";

const getAllEmployees = (req, res) => {
  const name = req.query.name;
  let query = name
    ? `SELECT * FROM employee WHERE name LIKE '%${name}%'`
    : "SELECT * FROM employee";
  connectDB.query(query, (err, data) => {
    if (err) {
      console.error("Error retreiving data", err);
      res.status(500).send("Error retreiving data");
      return;
    }

    res.send(data);
  });
};

const getEmployeeById = (req, res) => {
  const id = req.params.id;
  connectDB.query("SELECT * FROM employee WHERE id = ?", id, (err, data) => {
    if (err) {
      console.error("Error retreiving data", err);
      res.status(500).send("Error retreiving data");
      return;
    }

    res.send(data);
  });
};

const addEmployee = (req, res) => {
  console.log('here')
  const { name, empcode, grade, email } = req.body;
  connectDB.query(
    "INSERT INTO employee SET ?",
    { name, empcode, grade, email },
    (err, data) => {
      if (err) {
        console.error("Error creating employee", err);
        res.status(500).send("Error creating employee");
        return;
      }
      res.status(200).send("Employee created successfully");
    }
  );
};

const updateEmployee = (req, res) => {
  const id = req.params.id;
  const { name, empcode, grade, email } = req.body;
  connectDB.query(
    "UPDATE employee SET name = ?, empcode = ?,grade = ?,email = ? WHERE id = ?",
    [name, empcode, grade, email, id],
    (err, data) => {
      if (err) {
        console.error("Error updating employee", err);
        res.status(500).send("Error updating employee");
        return;
      }
      res.status(200).send("Employee updated successfully");
    }
  );
};

const deleteEmployeeById = (req, res) => {
  const id = req.params.id;
  console.log(id);
  connectDB.query("DELETE FROM employee WHERE id = ?", id, (err, data) => {
    if (err) {
      console.error("Error deleting employee", err);
      res.status(500).send("Error deleting employee");
      return;
    }
    res.status(200).send("Employee deleted successfully");
  });
};

const deleteAllEmployees = (req, res) => {
  connectDB.query("DELETE FROM employee", (err, data) => {
    if (err) {
      console.error("Error deleting all employees", err);
      res.status(500).send("Error deleting all employees");
      return;
    }
    res.status(200).send("All employees deleted successfully");
  });
};

export {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployeeById,
  deleteAllEmployees,
};
