const ENDPOINT_URL = "https://intimate-zebra-90.hasura.app/v1/graphql";
const COMMENTS_QUERY = 
query LookHelperData {
    helper_data {
      id,
      first_name,
      last_name,
      nick_name,
      gender,
      age,
      email,
      address,
      bio,
      motivation,
      price,
      image
    }
  }
;

export const fetchComments = async () => {
    const reponse = await fetch (ENDPOINT_URL, {
        METHOD: "POST",
        body: JSON.stringify ( {
            query: COMMENTS_QUERY
        })
    });
    return await Response.json();
  }
