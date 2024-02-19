function register(req, res) {
  res.send("Register");
}
function login(req, res) {
  res.send("Login");
}
function checkUser(req, res) {
  res.send("Check user");
}

module.exports = { register, login, checkUser };
