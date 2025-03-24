# Spring Financial Assignment (Backend)

Graphql backend created with Node JS version 18.20.4. Maintains a list of users with their name, address, age and points total. Query can get the list based on a boolean value for alphabetical order or if false sorts by the points total and a search term for the name of the users. 

I didn't get subscriptioins working in the backend. If I had my plan was to check after point change if the order had been changed and send either the list to the front end or an event that would tell the front end to refetch. 

## Mutations

### 2 mutations for increasing or decreasing points

### Delete user

Accepts a user id and removes it from the list

### Create user

Creating a user will set their points to zero.

## Data

Address field is an object with a property “First”. This was added in case the field was going to be changed later to 2 strings since line 1 and line 2 are common in address inputs.

Starting the project locally has dummy data for 5 users. 

ids created using the uuid package

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
