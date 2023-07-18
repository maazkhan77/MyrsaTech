import express from "express";
import connectDB from "./config/db.js";
import employeeRoutes from "./routes/employeeRoutes.js"

const port = 5500;
const app = express();
app.use(express.json())

app.use("/api/employee", employeeRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
