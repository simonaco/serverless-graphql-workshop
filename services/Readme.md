# REST API

This is a serverless API with two endpoints:

1. Endpoint that lists teams available: [https://graphqlvoting.azurewebsites.net/api/score](https://graphqlvoting.azurewebsites.net/api/score)

1. Endoint that allows increasing points:[https://graphqlvoting.azurewebsites.net/api/score/{id}](https://graphqlvoting.azurewebsites.net/api/score/2)

## Run locally

1. Fork and clone the repository in your local

1. Open the services folder in VS Code

1. In VS Code, go to the Azure icon on the left hand side panel and in the Functions extension click on *Create new project* icon to initialize a new function app

1. Create a new [Azure Cosmos DB](https://aka.ms/portal-nceu18) account using MongoDB API model. Create a database called *admin* and a collection called *Team*

1. Rename local.settings.example.json to local.settings.json and replace contents with your CosmosDB settings. You can get the connection settings from the Azure portal - Settings -> Connection String

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "CosmosDBURL":
      "mongodb://<your-HOST-goes-here>:<your-PORT-goes-here>/?ssl=true",
    "CosmosDBUser": "<your-USERNAME-goes-here>",
    "CosmosDBPass": "<your-PASSWORD-goes-here>"
  }
}
```

1. Install dependencies

```
npm install
```

1. In VS Code go to the *Debugging* panel and click debug

1. Navigate to [http://localhost:7071/api/score](http://localhost:7071/api/score) and you should see a json similar to:

```json
[
  {
    "id": "1",
    "name": "red",
    "points": 11912,
    "score": 2
  },
  {
    "id": "2",
    "name": "green",
    "points": 19113
  }
]
```

1. Final step, deploy your API to the clouds ☁️☁️! Using VS Code, click on the Azure icon on the left menu and in the Functions extension click the blue arrow button to deploy your function to the cloud. Follow steps displayed in the prompt to eitehr create a new function or deploy to an existing one.

1. Copy the url listed in the logs and open it in the browser to call your newly created function. i.e [https://<your_function_name>.azurewebsites.net/api/score](https://<your_function_name>.azurewebsites.net/api/score)

1. To learn more about Azure Functions checkout this awesome docs [page](https://aka.ms/functions-nceu18)

1. To learn more about Azure Cosmos DB checkout this awesome docs [page](https://aka.ms/cosmos-nceu18)