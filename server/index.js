import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import { typeDefs, resolvers } from "./schema.js";
import morgan from "morgan"
import './config/dbconn.js'
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start();
    app.use(morgan('dev'))
  app.use("/", cors(), express.json(), expressMiddleware(server));

  app.listen(4000, () => console.log("server listening on 4000"));
}

startServer();
