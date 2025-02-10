const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const FILE_PATH = "./employeesData.json";

// Load employees
app.get("/employees", (req, res) => {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read data" });
    res.json(JSON.parse(data));
  });
});

// Save employees
app.post("/employees", (req, res) => {
  const updatedEmployees = req.body;
  fs.writeFile(FILE_PATH, JSON.stringify(updatedEmployees, null, 2), (err) => {
    if (err) return res.status(500).json({ error: "Failed to save data" });
    res.json({ message: "Employees updated successfully!" });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
