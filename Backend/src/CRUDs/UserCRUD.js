const userModel = require("../database/models/userModel.js");

async function createUser(user) {
  try {
    const newUser = await userModel.create(user);
    return newUser;
  } catch (error) {
    return error;
  }
}

const findUsers = async () => {
  try {
    const userList = userModel.find();
    return userList;
  } catch (error) {
    return error;
  }
};

const findUserByEmail = async (email) => {
  try {
    const result = userModel.findOne({ email: email });
    return result;
  } catch (error) {
    return error;
  }
};

const findUserById = async (id) => {
  try {
    const result = await userModel.findById(id);
    return result;
  } catch (error) {
    return error;
  }
};

// // define a schema
// const animalSchema = new Schema({ name: String, type: String },
//     {
//     // Assign a function to the "methods" object of our animalSchema through schema options.
//     // By following this approach, there is no need to create a separate TS type to define the type of the instance functions.
//       methods: {
//         findSimilarTypes(cb) {
//           return mongoose.model('Animal').find({ type: this.type }, cb);
//         }
//       }
//     });
//   // Or, assign a function to the "methods" object of our animalSchema
//   animalSchema.methods.findSimilarTypes = function(cb) {
//     return mongoose.model('Animal').find({ type: this.type }, cb);
//   };

const deleteUserById = async (id) => {
  try {
    const result = await userModel.deleteOne({ _id: id });
    return result;
  } catch (error) {
    return error;
  }
};

const updateUser = async (id, data) => {
  try {
    const result = await userModel.updateOne(
      { _id: id },
      { $set: { ...data } }
    );
    return result;
  } catch (error) {
    return error;
  }
};

const UserCRUD = {
  createUser,
  findUsers,
  findUserById,
  deleteUserById,
  updateUser,
  findUserByEmail,
};

module.exports = UserCRUD;
