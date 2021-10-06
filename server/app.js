const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const mongo = async () => {
  try {
    mongoose
      .connect(process.env.Mongo_Uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(console.log("Connected to Mongo"));
  } catch (rr) {
    console.log(rr);
  }
};
mongo();

const app = express();
app.use(cors());
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));
app.listen(4000, () => console.log("listening on port 4000"));
