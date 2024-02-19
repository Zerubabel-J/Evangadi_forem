const express = require("express");
const app = express();
const PORT = 5500;

// db connection
const dbConnection = require("./db/dbConfig");
//Express Middleware
const userRouter = require("./routes/userRoute");
// Json middleware
app.use(express.json());
app.use("/api/users", userRouter);

async function start() {
  try {
    const resulet = await dbConnection.execute("SELECT 'test' ");
    await app.listen(PORT);
    console.log("Connection established");
    console.log("listening on port", PORT);
  } catch (error) {
    console.log(error.message);
  }
}
start();
