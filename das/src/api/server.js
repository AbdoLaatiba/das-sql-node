const express = require("express");
const app = express();
const multer = require("multer");
const mysql = require("mysql");
const cors = require("cors");
const port = 5000;

// midlwares
app.use(express.json());
app.use(cors());
// end midlwares

// multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}../../../public/uploads`);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: storage });
// end multer

// start db config

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "da_db",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// end db

// doctor start

app.get("/doctors", function (req, res) {
  const sql = "select * from doctors";

  con.query(sql, function (err, results, fields) {
    res.send(results);
  });
});

app.post("/doctors/register", upload.single("image"), function (req, res) {
  // console.log(req.body, req.file);
  const {
    name,
    email,
    password,
    address,
    cost,
    phone_number,
    city,
    specialty,
    education,
  } = req.body;
  const path = req.file.path;
  // console.log(email, name, password, path);
  con.beginTransaction(function (err) {
    if (err) {
      throw err;
    }
    // INSERT INTO users (name, email, password, role_id) values (${name}, ${email}, ${password}, 2)
    const user = { name, email, password, role_id: 2 };
    con.query(
      `INSERT INTO users set ?`,
      user,

      function (error, results, fields) {
        if (error) {
          return con.rollback(function () {
            throw error;
          });
        }
        // INSERT INTO doctors (user_id, address, phone_number, cost, specialty, city, image) values (${user_id}, ${address}, ${phone_number}, ${cost}, ${specialty}, ${city}, ${path})`
        const user_id = 1;
        const doc = {
          user_id,
          address,
          phone_number,
          cost,
          specialty,
          city,
          path,
        };

        con.query(
          `INSERT INTO doctors set ?)`,
          doc,
          function (error, results, fields) {
            if (error) {
              return con.rollback(function () {
                throw error;
              });
            }
            //  `INSERT INTO education (name, user_id) values (${education}, ${user_id})`,
            const edu = { education, user_id };
            con.query(
              `INSERT INTO education set ?`,
              edu,
              function (error, results, fields) {
                if (error) {
                  return con.rollback(function () {
                    throw error;
                  });
                }
                con.commit(function (err) {
                  if (err) {
                    return con.rollback(function () {
                      throw err;
                    });
                  }
                  console.log("success!");
                });
              }
            );
          }
        );
      }
    );
    res.send("information inserted !");
  });
});
// doctor end

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
