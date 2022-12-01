
	


//how to fetch
async function fetchData(operationsDoc, operationName, variables) {
  const data = await fetch(
    'https://humble-labrador-74.hasura.app/v1/graphql/',
    {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    }
  );

  return await data.json();
}

const operationsDoc = `
  query MyQuery {
    Helper {
      Id
      address
      age
      description
      email
      first_name
      last_name
      password
      price
      quote
    }
  }
`;

function fetchMyQuery() {
  return fetchData(
    operationsDoc,
    "MyQuery",
    {}
  );
}

async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

startFetchMyQuery();