GraphiQL is an in-browser IDE for exploring GraphQL.

Steps:

1. Replace the URL in graphQLFetcher function with your own GraphQL endpoint URL

1. Deploy this a static website hosting 

1. In your function app configure proxies to redirect traffic to your GraphiQL app

```json
{
  "$schema": "http://json.schemastore.org/proxies",
  "proxies": {
    "graphiql": {
      "matchCondition": {
        "methods": ["GET"],
        "route": "/api/graphiql"
      },
      "backendUri": "your_url_here"
    }
  }
}
```

1. To learn more about GraphiQL go to [GraphiQL](https://github.com/graphql/graphiql)
1. To learn more about proxies go to [Azure Proxies](https://docs.microsoft.com/en-us/azure/azure-functions/functions-proxies/?WT.mc_id=workshop-nodeconf-sicotin)

