const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let usersData = {}; // временно в памяти. Позже можно подключить базу данных.

// Получить данные
app.get("/tracker/:userId", (req, res) => {
  const id = req.params.userId;
  res.json(usersData[id] || null);
});

// Сохранить данные
app.post("/tracker/:userId", (req, res) => {
  const id = req.params.userId;
  usersData[id] = req.body;
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("✅ USDT Growth Tracker API is working.");
});