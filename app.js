const express = require("express");
const app = express();
const PORT = 5500;

//Express Middleware
const userRouter = require("./routes/userRoute");

app.use("/api/users", userRouter);
app.listen(PORT, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Running at port ${PORT}`);
  }
});
