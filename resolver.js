const mongoose = require("mongoose");

const User = require("./model/user.js");

const { parse } = require("graphql");
const bcryptjs = require("bcryptjs");

const resolvers = {
  Query: {
    user: () => "User",
    
  },

  Mutation: {
    signupUser: async (parent, { userNew }) => {
      const user = await User.findOne({ email: userNew.email });
      if (user) {
        throw new Error("user already exist");
      }
      const hashedPassword = await bcryptjs.hash(userNew.password, 12);

      const newUser = new User({
        ...userNew,
        password: hashedPassword,
      });

      return await newUser.save();
    },
    // createQuote :(parent,{name}, {userId})=>{
    //   if(!userId) throw new Error("you must be logged in")
    // }
  },
};

module.exports = resolvers;
