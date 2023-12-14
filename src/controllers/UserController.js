class UserController {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async getUsers() {
    try {
      console.log('Getting users...');
      const users = await this.usersRepository.getUsers();

      return {
        statusCode: 200,
        body: users
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}

module.exports = UserController;
