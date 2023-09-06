const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = require("./app");

// database connection

mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log("Database Connected");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
