import { env } from "process";
import addExitHandler from "./tools/addExitHandler";
import { Sequelize } from "sequelize";

const { MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USERNAME } = env;

if (!MYSQL_DATABASE || !MYSQL_HOST || !MYSQL_PASSWORD || !MYSQL_USERNAME) {
  console.log("Please fill the credentials");
  process.exit();
}

const sequelize = new Sequelize(
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  { host: MYSQL_HOST, dialect: "mysql" }
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

addExitHandler(async () => {
  await sequelize.close();
});
