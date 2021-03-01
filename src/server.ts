require("dotenv").config();
import Fastify from "fastify";
import { ApolloServer, gql } from "apollo-server-fastify";

const PORT = process.env.PORT;

const typeDefs = gql`
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
  },
};

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = Fastify({});

app.register(apollo.createHandler());

app.listen(PORT);
