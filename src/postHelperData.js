const ENDPOINT_URL = "https://intimate-zebra-90.hasura.app/v1/graphql";
const SIGUP_HELPER = `
mutation InsertHelperData($firstName: String, $lastName: String, $address: String, $age: String, $bio: String, $motivation: String, $gender: String, $phone: String, $price: String, $userName: String, $city: String, $postalCode: Int, $policy: Boolean, $email: String, $image: bytea, $password1: String, $password2: String) {
  insert_helper_data(objects: {firstName: $firstName, lastName: $lastName, address: $address, age: $age, bio: $bio, motivation: $motivation, gender: $gender, phone: $phone, price: $price, userName: $userName, city: $city, postalCode: $postalCode, policy: $policy, email: $email, image: $image, password1: $password1, password2: $password2}) {
    affected_rows
    }
  }
  
`;

export const addHelperData = async (requestData) => {
    const response = await fetch (ENDPOINT_URL, {
        method: "POST",
        body: JSON.stringify ( {
            query: SIGUP_HELPER,
            variables: requestData
        })
    });
    return await response.json();
  }


/*const ENDPOINT_URL = "https://intimate-zebra-90.hasura.app/v1/graphql";
const SIGUP_HELPER = `
mutation InsertHelperData($age: Int, $address: String, $bio: String, $first_name: String, $gender: String, $last_name: String, $motivation: String, $nick_name: String, $phone: String, $email: String = "", $image: bytea = "", $price: Float, $password: String = "") {
    insert_helper_data(objects: {age: $age, address: $address, bio: $bio, first_name: $first_name, gender: $gender, last_name: $last_name, motivation: $motivation, nick_name: $nick_name, phone: $phone, email: $email, image: $image, price: $price, password: $password}) {
      affected_rows
      returning {
        id
      }
    }
  }
variable: {"age":0,"address":"","bio":"","first_name":"","gender":"","last_name":"","motivation":"","nick_name":"","phone":"","price": 10, "password": "", "email": "", "image": ""}  
`;

export const addHelperData = async () => {
    const response = await fetch (ENDPOINT_URL, {
        method: "POST",
        body: JSON.stringify ( {
            query: SIGUP_HELPER
        })
    });
    return await response.json();
  }
*/