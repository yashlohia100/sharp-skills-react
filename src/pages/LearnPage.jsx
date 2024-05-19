import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../contexts/UserContextProvider";

import styles from "./LearnPage.module.css";
import { useEffect, useState } from "react";
import { useLoadingContext } from "../contexts/LoadingContextProvider";
import { getCourseMaterial } from "../services/apiCourses.mjs";
import LoginPrompt from "../components/LoginPrompt";
import TitleHeader from "../components/LearnPage/TitleHeader";
import VideoBox from "../components/LearnPage/VideoBox";
import LearnPageNavbar from "../components/LearnPage/LearnPageNavbar";
import CurriculamSidebar from "../components/LearnPage/CurriculamSidebar";

function LearnPage() {
  const { currentlyLoggedInUser } = useUserContext();

  const { id } = useParams();

  const [course, setCourse] = useState({});

  const { setIsLoading, setError } = useLoadingContext();

  const navigate = useNavigate();

  useEffect(
    function () {
      setIsLoading(true);
      setError("");

      getCourseMaterial(id).then((data) => {
        console.log(data);
        if (data.status === "success") {
          setCourse(data.data.course);
        } else {
          setError(data.message);
          setTimeout(() => {
            navigate(`/courses/${id}`);
          }, 1500);
        }
        setIsLoading(false);
      });
    },
    [id, setIsLoading, setError, navigate]
  );

  if (!currentlyLoggedInUser) {
    return <LoginPrompt />;
  }

  if (Object.keys(course).length < 1) {
    return null;
  }

  return (
    <div className={styles.learnPage}>
      <TitleHeader title="webdev" />
      <VideoBox />
      <CurriculamSidebar />
      <LearnPageNavbar />

      <main className={styles.mainContainer}>
        <Outlet />
      </main>
    </div>
  );
}

export default LearnPage;
