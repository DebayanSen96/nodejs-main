const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const port = 3000; // Use the provided PORT or default to 3000

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  const data = { message: "Hi Debayan" };
  res.json(data);
});
