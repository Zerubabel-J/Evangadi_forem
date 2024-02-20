const express = require("express");
const app = express();
const PORT = 5500;

// db connection
const dbConnection = require("./db/dbConfig");
//Express routing
const userRouter = require("./routes/userRoute");
const questionRoute = require("./routes/questionRoute");

// Json middleware
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/questions", questionRoute);

async function start() {
  try {
    const result = await dbConnection.execute("SELECT 'test' ");
    await app.listen(PORT);
    console.log("Db connection established");
    console.log("listening on port", PORT);
  } catch (error) {
    console.log(error.message);
  }
}
start();
