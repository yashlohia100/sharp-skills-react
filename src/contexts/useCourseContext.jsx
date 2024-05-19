import { useContext } from "react";
import { CourseContext } from "./CourseContextProvider";

export default function useCourseContext() {
  return useContext(CourseContext);
}
