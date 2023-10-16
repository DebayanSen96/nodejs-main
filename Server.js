const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000

app.get("/", (req, res) => {
  const data = { message: "Hello, World!" };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
