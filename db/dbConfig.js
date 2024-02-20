const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: "ForemAdmin",
  database: "EvangadiForem",
  host: "localhost",
  password: "Afford@04",
  connectionLimit: 10,
});

//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });

module.exports = dbConnection.promise();
