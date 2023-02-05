require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const routes = require("./routes");
const { join } = require("path");
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
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

app.use(routes);

// start Express/Apollo server
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`
        \n------------------------------------------
        \nAPI server running on port ${PORT}!
        \nUse GraphQL at http://localhost:${PORT}${server.graphqlPath}
        \n------------------------------------------`);
    });
  });
};

startApolloServer(typeDefs, resolvers);
