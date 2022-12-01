const ENDPOINT_URL = "https://intimate-zebra-90.hasura.app/v1/graphql";
const SIGUP_USER = `
mutation InsertUserData($username: String, $password: bpchar, $email: String, $confirmpwd: bpchar) {
    insert_user_data(objects: {username: $username, password: $password, email: $email, confirmpwd: $confirmpwd}) {
      affected_rows
    }
  }
  
`;

export const addUserData = async (requestData) => {
    const response = await fetch (ENDPOINT_URL, {
        method: "POST",
        body: JSON.stringify ( {
            query: SIGUP_USER,
            variables: requestData
        })
    });
    return await response.json();
  }
