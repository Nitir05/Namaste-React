//React context is an central data store in an react application from which data can be accessed in any react component in an application
//Which helps us to resolve the props drilling problem

import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
