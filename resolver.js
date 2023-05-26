const mongoose = require("mongoose");

const User = require("./model/user.js");
const JWT_SECRET = "sdlknknni2io328923u4bjh2312bjhb12"
const jwt = require("jsonwebtoken")
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
    signInUser: async (parent, { userSingIn }) => {
      const checkUser = await User.findOne({ email: userSingIn.email })
      if (!checkUser) {
        throw new Error("user does not exist ! please sign up first")
      }
      const comparePassword = bcryptjs.compare(userSingIn.password, checkUser.password)
      if (!comparePassword) {
        throw new Error("email or password is invalid")
      } 
      const token = jwt.sign({ userId: checkUser._id }, JWT_SECRET)
      return { token: token }
    }
    // createQuote :(parent,{name}, {userId})=>{
    //   if(!userId) throw new Error("you must be logged in")
    // }
  },
};

module.exports = resolvers;
