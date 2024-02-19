// db connection
const dbConnection = require("../db/dbConfig");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");
async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;
  if (!email || !username || !firstname || !lastname || !password) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please provide all require informatio!" });
  }

  try {
    const [user] = await dbConnection.query(
      "select username, userid from user where username = ? or email = ?",
      [username, email]
    );
    if (user.length > 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "user already registered" });
    }
    if (password.length < 8) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "password must be at least 8 characters" });
    }
    // hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    await dbConnection.query(
      "INSERT INTO user (username, firstname, lastname, email, password) VALUES (?,?,?,?,?)",
      [username, firstname, lastname, email, hashedpassword]
    );
    return res.status(StatusCodes.CREATED).json({ msg: "user registered" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "somthing went wrong, try again" });
  }
}

async function login(req, res) {
  res.send("Login");
}
async function checkUser(req, res) {
  res.send("Check user");
}

module.exports = { register, login, checkUser };
