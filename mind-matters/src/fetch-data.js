const ENDPOINT_URL = "https://intimate-zebra-90.hasura.app/v1/graphql";
const COMMENTS_QUERY = `
query HelperInfo { 
    helper_data {
      id
      nick_name
      gender
      age
      address
      bio
      price
    }
  } 
`;

export const fetchHelperData = async () => {
    const response = await fetch (ENDPOINT_URL, {
        method: "POST",
        body: JSON.stringify ( {
            query: COMMENTS_QUERY
        })
    });
    return await response.json();
  }
