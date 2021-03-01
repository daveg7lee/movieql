require("dotenv").config();
import Fastify from "fastify";
import { ApolloServer } from "apollo-server-fastify";
import { resolvers, typeDefs } from "./schema";

const PORT = process.env.PORT;

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = Fastify({});

app.register(apollo.createHandler());

app.listen(PORT);
