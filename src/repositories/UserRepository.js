const Mongo = require( "../database/Mongo");

class UsersRepository {
   async getUsers(){
    const users = await Mongo.db.collection('mongo-users').find({}).toArray();

    return users
   }
}

module.exports = UsersRepository