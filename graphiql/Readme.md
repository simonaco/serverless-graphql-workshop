# GraphiQL is an in-browser IDE for exploring GraphQL

## Steps:

1. Go to *graphiql* and open *index.html*
1. Replace the URL in graphQLFetcher function with your own GraphQL endpoint URL [https://<your_function_url>/api/graphql](https://<your_function_url>/api/graphql)

1. In the [Azure Portal](https://aka.ms/portal-nceu18) navigate to functions, click on the graphql function. From there, click on the *Platform features* tab -> API -> CORS and add your url as allowed origin

1. Run locally - use a local http server (i.e. http-server)

### Extra steps

1. Deploy this as a static website in the cloud. You can use Azure Blob Storage following [steps here](https://aka.ms/static-nceu18)

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

1. Deploy your GraphQL api function app with the new proxy configured

1. Test GraphiQL by navigating to your function [https://<your_function_url>/api/graphiql](https://<your_function_url>/api/graphiql)

---

⚡ Congrats!! You have now completed all steps!! Go ask your instructor for a badge! ⚡

### More resouces

1. To learn more about GraphiQL go to [GraphiQL](https://github.com/graphql/graphiql)
1. To learn more about proxies go to [Azure Proxies](https://docs.microsoft.com/en-us/azure/azure-functions/functions-proxies/?WT.mc_id=workshop-nodeconf-sicotin)

