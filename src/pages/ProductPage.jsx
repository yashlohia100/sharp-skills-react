import CourseBody from "../components/ProductPage/Body/CourseBody";
import CourseHeader from "../components/ProductPage/Header/CourseHeader";
import { CourseContextProvider } from "../contexts/CourseContextProvider";

export default function ProductPage() {
  return (
    <CourseContextProvider>
      <CourseHeader />
      <CourseBody />
    </CourseContextProvider>
  );
}
