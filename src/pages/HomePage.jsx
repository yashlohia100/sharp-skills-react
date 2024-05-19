import { useEffect, useState } from "react";
import CourseCarousel from "../components/HomePage/CourseCarousel";
import MainContentContainer from "../components/HomePage/MainContentContainer";
import {
  getBackEndCoursesData,
  getFrontEndCoursesData,
  getWebDevelopmentCourses,
} from "../services/apiCourses.mjs";
import { useLoadingContext } from "../contexts/LoadingContextProvider";

export default function HomePage() {
  // const [coursesData, setCoursesData] = useState([]);
  const [webDevCoursesData, setWebDevCoursesData] = useState([]);
  const [frontEndCoursesData, setFrontEndCoursesData] = useState([]);
  const [backEndCoursesData, setBackEndCoursesData] = useState([]);

  const { setIsLoading, setError } = useLoadingContext();

  useEffect(
    function () {
      setIsLoading(true);
      setError("");

      getWebDevelopmentCourses().then((data) => {
        if (data.status === "success") {
          setWebDevCoursesData(data.data.courses);
        } else {
          setError("Error loading data");
        }

        setIsLoading(false);
      });
    },
    [setIsLoading, setError]
  );

  useEffect(
    function () {
      setIsLoading(true);
      setError("");

      getFrontEndCoursesData().then((data) => {
        if (data.status === "success") {
          setFrontEndCoursesData(data.data.courses);
        } else {
          setError("Error loading data");
        }

        setIsLoading(false);
      });
    },
    [setIsLoading, setError]
  );

  useEffect(
    function () {
      setIsLoading(true);
      setError("");

      getBackEndCoursesData().then((data) => {
        if (data.status === "success") {
          setBackEndCoursesData(data.data.courses);
        } else {
          setError("Error loading data");
        }

        setIsLoading(false);
      });
    },
    [setIsLoading, setError]
  );

  return (
    <div>
      {/* <h2>HomePage content</h2> */}
      <MainContentContainer>
        <CourseCarousel
          heading="Web Development Courses"
          coursesData={webDevCoursesData}
        />
        <CourseCarousel
          heading="Front-end Courses"
          coursesData={frontEndCoursesData}
        />
        <CourseCarousel
          heading="Back-end Courses"
          coursesData={backEndCoursesData}
        />
      </MainContentContainer>
    </div>
  );
}
