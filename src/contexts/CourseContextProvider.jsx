import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourse } from "../services/apiCourses.mjs";
import { useLoadingContext } from "./LoadingContextProvider";
import LoginPrompt from "../components/LoginPrompt";
import { useUserContext } from "./UserContextProvider";

const CourseContext = createContext();

function CourseContextProvider({ children }) {
  const { currentlyLoggedInUser } = useUserContext();

  const { id } = useParams();
  // console.log(id);

  const [course, setCourse] = useState({});

  const { setIsLoading, setError } = useLoadingContext();

  useEffect(
    function () {
      setIsLoading(true);
      setError("");

      getCourse(id).then((data) => {
        console.log(data);
        if (data.status === "success") {
          setCourse(data.data.course);
        }
        setIsLoading(false);
      });
    },
    [id, setIsLoading, setError]
  );

  // if (!currentlyLoggedInUser) {
  //   return <LoginPrompt />;
  // }

  if (Object.keys(course).length < 1) {
    return null;
  }

  return (
    <CourseContext.Provider value={course}>{children}</CourseContext.Provider>
  );
}

export { CourseContextProvider, CourseContext };
