const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolver.js");
const typeDefs = require("./model/schema.js");
const User = require("./model/user.js");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config.js");


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("connected", () => {
  console.log("connected to mongodb");
});

db.on("error", (err) => {
  console.error(`err connecting ${err}`);
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: (req) => {
  //   const { authorization } = req.headers
  //   if (authorization) {
  //     const { userId } = jwt.verify(authorization, JWT_SECRET)
  //     return userId
  //   }
  // }, 

  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
server.listen().then(({ url }) => {
  console.log(`${url}`);
});
