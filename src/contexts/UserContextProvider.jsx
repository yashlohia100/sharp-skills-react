/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
  // const [currentlyLoggedInUser, setCurrentlyLoggedInUser] = useState(null);
  // const [currentlyLoggedInUser, setCurrentlyLoggedInUser] = useState({
  //   _id: "6552e1e3da26fb19ac11b006",
  //   name: "Dr. Frank Mitropoulos",
  //   email: "frank@gmail.com",
  //   role: "instructor",
  //   photo: "6552e1e3da26fb19ac11b006-photo.jpg",
  //   about: "Dummy text",
  //   __v: 0,
  // });

  const [currentlyLoggedInUser, setCurrentlyLoggedInUser] = useState(
    function () {
      const value = window.localStorage.getItem("currentlyLoggedInUser");
      return JSON.parse(value);
    }
  );

  useEffect(
    function () {
      window.localStorage.setItem(
        "currentlyLoggedInUser",
        JSON.stringify(currentlyLoggedInUser)
      );
    },
    [currentlyLoggedInUser]
  );

  const value = {
    currentlyLoggedInUser,
    setCurrentlyLoggedInUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}

export default UserContextProvider;
