# GraphQL API

This is a GraphQL endpoint calling two existing REST api endpoints

You can explore the endpoint we'll build at [https://graphqlplayground.azurewebsites.net/api/graphiql](https://graphqlplayground.azurewebsites.net/api/graphiql)

## Steps

If you haven't already, make sure to clone this repository.

1. ⚠️ Navigate to the *graphql-api* folder and open it in a *new instance* of VS Code

### Install dependencies

```
npm install
```

### Run project
There are two ways to run your project
- Debug, we can through the Debug panel choose to run our project and that will enable us to set breakpoints for example
- `npm start` this will behind the scenes run `fun host start`, which means we will start our backend as an Azure functions project, which this is is

#### Run

To just run the project without debugging type: 

```
npm start
```

This will start our Azure functions server in the terminal and it will tell us at the end of that run what URL our service is found at.

#### Debug

1. Go to *Debug* panel in VS Code and click run

#### Query

1. Using [Postman](https://www.getpostman.com/) (or any Rest client) make a POST request to your GraphQL endpoint running in your local [http://localhost:7071/api/graphql](http://localhost:7071/api/graphql) with this body of type *application/json*:

```json
{ "query": "{teams{id name points}}"}
```

You should get an output looking like this:

```
{
  "data": {
    "teams": [
      {
        "id": "1",
        "name": "red",
        "points": 19293
      },
      {
        "id": "2",
        "name": "green",
        "points": 10516
      }
    ]
  }
}
```

1. If you have deployed your previous services to Azure, replace the URLs in index.js with your own

1. Run the function again and make sure you get the correct data back (coming from your own DB instance)

1. To deploy your function using VS Code go to the Azure Functions extension. Click the blue arrow button and follow prompt instructions to either create a new function or deploy to an existing one