import { v4 as uuidv4 } from 'uuid';

export const data = {
    users: [
        {
            id: uuidv4(),
            name: "Emma",
            age: 24,
            address: {
                first: "123 Fake Street",
            },
            points: 3,
        },
        {
            id: uuidv4(),
            name: "Noah",
            age: 24,
            address: {
                first: "298 W 12th Ave",
            },
            points: 7,
        },
        {
            id: uuidv4(),
            name: "James",
            age: 24,
            address: {
                first: "4877 Cedar Street",
            },
            points: 0,
        },
        {
            id: uuidv4(),
            name: "William",
            age: 24,
            address: {
                first: "321 W 65th Ave",
            },
            points: 0,
        },
        {
            id: uuidv4(),
            name: "Olivia",
            age: 24,
            address: {
                first: "#512 982 W 23rd Ave",
            },
            points: 1,
        },
    ]
}