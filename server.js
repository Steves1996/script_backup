
const dotenv = require("dotenv");
var cron = require("node-cron");
const mysqldump = require("mysqldump");

dotenv.config();

const DBPASSWORD = "Allen1205@";
const DBUSERNAME = "postgres";
const DBNAME = "c0fgttest";

function backup() {
  const date = new Date();
  const currentDate = `${date.getFullYear()}.${
    date.getMonth() + 1
  }.${date.getDate()}.${date.getHours()}.${date.getMinutes()}`;

  mysqldump({
    connection: {
      host: "localhost",
      user: "root",
      password: "Allen1205@",
      database: "c0fgttest",
    },
    dumpToFile: `./backup/${currentDate}-c0fgttest.sql`,
  });
}

cron.schedule("* * * * *", () => {
  console.log("running a task every minute");
  backup();
});
