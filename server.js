import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { v4 as uuidv4 } from 'uuid';
import { data } from './data.js';

const app = express()
const port = 4000

const userData = data.users.sort((a, b) => sortUsers(a, b));

function sortUsers(a, b) {
    return a.points > b.points ? -1 : 1;
}

function getOrderedUsers(alph) {
    if (alph) {
        return [...userData].sort((a, b) => {
            return a.name.localeCompare(b.name);
        })
    } else {
        return [...userData].sort((a, b) => sortUsers(a, b));
    }
}

/* Schema */
const typeDefs = `
input UserInput {
    name: String!
    age: Int!
    address: String!
}

type Address {
    first: String!
}

type User {
    id: String!
    name: String!
    address: Address!
    age: Int!
    points: Int!
}

type Query {
    getUsers(alph: Boolean, searchTerm: String): [User]
    getUser(id: String!): User
}

type Mutation {
    increasePoints(id: String!): User
    decreasePoints(id: String!): User
    deleteUser(id: String!): User
    createUser(input: UserInput): User
}
`

const resolvers = {
  Query: {
    getUsers: (obj, args, context) => {
        if (args.searchTerm && args.searchTerm.length) {
            return getOrderedUsers(args.alph).filter((user) => {
                return user.name.toLowerCase().includes(args.searchTerm.toLowerCase());
            });
        } else {
            return getOrderedUsers(args.alph);  
        }
    },
    getUser: (obj, args, context) => {
        const user = userData.find(user => user.id === args.id);
        if (!user) throw new Error("User not found");
        return user;
    }
  },
  Mutation: {
    increasePoints: (obj, args, context) => {
        const user = userData.find(user => user.id === args.id);
        if (!user) throw new Error("User not found");
        user.points++;
        return user;
    },
    decreasePoints: (obj, args, context) => {
        const user = userData.find(user => user.id === args.id);
        if (!user) throw new Error("User not found");
        user.points--;
        return user;
    },
    deleteUser: (obj, args, context) => {
        const index = userData.findIndex(user => user.id === args.id);
        if (index >= 0) {
            const user = userData[index];
            userData.splice(index, 1);
            return user;
        } else {
            return null;
        }
    },
    createUser: (obj, args, context) => {
        const newUser = {
            id: uuidv4(),
            name: args.input.name,
            age: args.input.age,
            address: {
                first: args.input.address,
            },
            points: 0,
        }
        userData.push(newUser);
        return newUser;
    }
  },
}

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Entrypoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema: executableSchema,
    context: data,
    graphiql: true,
  })
)

app.listen(port, () => {
  console.log(`Running a server at http://localhost:${port}`)
})