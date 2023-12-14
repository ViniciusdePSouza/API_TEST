const express = require("express");
const dotenv = require("dotenv");
const Mongo = require("./database/Mongo");
const routes = require("./routes");

const main = async () => {
  dotenv.config();
  const app = express();
  app.use(express.json());

  const PORT = process.env.PORT || 8000;

  app.use(routes)
//   app.get("/users", async (req, res) => {
//     const UserController = require("./controllers/UserController");
//     const UserRepository = require("./repositories/UserRepository");

//     const userRepository = new UserRepository();
//     const userController = new UserController(userRepository);

//     const {body, statusCode} = await userController.getUsers()

//     res.status(statusCode).send(body)
//   });

  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  await Mongo.connect();
};

main();
