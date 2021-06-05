# serverless-graphql-workshop

In this workshop we'll build a Serverless GraphQL endpoint for an existing voting API.

## slides

[Build Scalable APIs Using GraphQL and Serverless](https://www.slideshare.net/SimonaCotin/build-scalable-apis-using-graphql-and-serverless-172329195)

## Prerequisites

1. A recent version of [Node](https://nodejs.org/en/download) (8+)

1. [VS Code](https://code.visualstudio.com/download/?WT.mc_id=startup-0000-sicotin)  

1. [Azure Functions CLI](https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=startup-0000-sicotin)

1. [Azure Functions Extension for VS Code](https://marketplace.visualstudio.com/items/?WT.mc_id=startup-0000-sicotin&itemName=ms-azuretools.vscode-azurefunctions)  

1. [Free Azure Account](https://azure.microsoft.com/free/?WT.mc_id=startup-0000-sicotin)

## Steps

1. Create your own services following steps on [services readme](https://github.com/simonaco/serverless-graphql-workshop/blob/master/services/Readme.md)

1. Create GraphQL endpoint following steps on [api readme](https://github.com/simonaco/serverless-graphql-workshop/blob/master/graphql-api/Readme.md)

1. Add GraphiQL UI using steps in [readme](https://github.com/simonaco/serverless-graphql-workshop/blob/master/graphiql/Readme.md)

## Demo app

GraphQL endpoint: [https://graphqlplayground.azurewebsites.net/api/graphql](https://graphqlplayground.azurewebsites.net/api/graphql)

GraphiQL endpoint:
[https://graphqlplayground.azurewebsites.net/api/graphiql](https://graphqlplayground.azurewebsites.net/api/graphiql)

Sample query:

```
query {
  teams {
    id
    name
    points
  }
}
```

Sample mutation:

```
mutation {
  incrementPoints(id:2) {
    id
    name
    points
  }
}
```
---

🎉 Congrats!! You made it - built your very first GraphQL endpoint on Serverless! 🎉
