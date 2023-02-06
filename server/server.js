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

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// routes
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "..", "client", "build")));
}

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "client", "build", "index.html"));
});

// start Express/Apollo server
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`
        \n------------------------------------------------------------------------------------
        \n🚀 ~ API server running on port ${PORT}!
        \n🚀 ~ Use GraphQL at http://localhost:${PORT}${server.graphqlPath}
        \n------------------------------------------------------------------------------------\n`);
    });
  });
};

startApolloServer(typeDefs, resolvers);
