import { v4 as uuidv4 } from 'uuid';

export const data = {
    users: [
        {
            id: uuidv4(),
            name: "Emma",
            age: 24,
            address: {
                first: "Somewhere",
            },
            points: 3,
        },
        {
            id: uuidv4(),
            name: "Noah",
            age: 24,
            address: {
                first: "Somewhere",
            },
            points: 7,
        },
        {
            id: uuidv4(),
            name: "James",
            age: 24,
            address: {
                first: "Somewhere",
            },
            points: 0,
        },
        {
            id: uuidv4(),
            name: "William",
            age: 24,
            address: {
                first: "Somewhere",
            },
            points: 0,
        },
        {
            id: uuidv4(),
            name: "Olivia",
            age: 24,
            address: {
                first: "Somewhere",
            },
            points: 1,
        },
    ]
}