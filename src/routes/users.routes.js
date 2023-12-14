const { Router } = require("express");

const usersRoutes = Router()

const UserController = require('../controllers/UserController')
const UserRepository = require('../repositories/UserRepository')

const userRepository = new UserRepository()
const userController = new UserController(userRepository)

usersRoutes.get('/', userController.getUsers)

module.exports = usersRoutes