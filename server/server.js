require("dotenv").config();

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { join } = require("path");
const { authMiddleware } = require("./utils/auth.js");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "..", "client", "build")));
}

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "client", "build", "index.html"));
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => app.listen(PORT));
};

startApolloServer(typeDefs, resolvers);
