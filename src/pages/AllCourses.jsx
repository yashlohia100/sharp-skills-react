import { useEffect, useState } from "react";
import AllCoursesContainer from "../components/AllCourses/AllCoursesContainer";
import { getAllCourses } from "../services/apiCourses.mjs";
import { useLoadingContext } from "../contexts/LoadingContextProvider";

export default function AllCourses() {
  const [coursesData, setCoursesData] = useState([]);

  const { setIsLoading, setError } = useLoadingContext();

  useEffect(
    function () {
      setIsLoading(true);
      setError("");

      getAllCourses().then((data) => {
        if (data.status === "success") {
          setCoursesData(data.data.courses);
        } else {
          setError("Error loading data");
        }

        setIsLoading(false);
      });
    },
    [setIsLoading, setError]
  );

  return <AllCoursesContainer coursesData={coursesData} />;
}
