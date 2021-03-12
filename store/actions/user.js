import Address from "../../models/Address";
import Company from "../../models/Company";
import User from "../../models/User";

export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => {
  try {
    return async (dispatch) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Something went wrong !!!");
      }

      const result = await response.json();
      let loadedUsers = [];
      for (const key in result) {
        loadedUsers.push(
          new User(
            key,
            result[key].name,
            result[key].username,
            result[key].email,
            new Address(
              result[key].address.street,
              result[key].address.suite,
              result[key].address.city,
              result[key].address.zipcode,
              result[key].address.geo
            ),
            result[key].phone,
            result[key].website,
            new Company(
              result[key].company.name,
              result[key].company.catchPhrase,
              result[key].company.bs
            )
          )
        );
      }

      dispatch({
        type: FETCH_USERS,
        users: loadedUsers,
      });
    };
  } catch (err) {
    throw new Error(err);
  }
};
