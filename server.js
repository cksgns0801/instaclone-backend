require("dotenv").config();
import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schema";
import { getUser, protectResolver } from "./users/users.utils";

const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: async({ req })=> {
        return {
            loggedInUser: await getUser(req.headers.token),
            protectResolver,
        };
    },
});

const PORT = process.env.PORT;
server
    .listen(PORT)
    .then(() => console.log(`Server is running on http://localhost:${PORT}/`));

    const x = (resolver) => (root, args, context, info) => {
        if(!context.loggedInUser) {
            return {
                ok: false,
                error: "log in pls",
            };
        }
        return resolver(root, args,context, info)
    }