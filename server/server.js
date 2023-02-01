require("dotenv").config();

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { join } = require("path");
const { authMiddleware } = require("./utils/auth.js");
const axios = require("axios");

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

// let config = {
//   headers: {
//     Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
//   },
//   params: {
//     term: "boba",
//     location: "92683",
//     radius: 10000,
//     sort_by: "best_match",
//     limit: 1,
//   },
// };

// app.get("/api/yelp", async (req, res) => {
//   const response = await axios
//     .get("https://api.yelp.com/v3/businesses/search", config)
//     .then((response) => {
//       console.log(response.data);
//       res.json(response.data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// });

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => app.listen(PORT));
};

startApolloServer(typeDefs, resolvers);
