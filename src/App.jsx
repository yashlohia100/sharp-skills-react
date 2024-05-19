import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AllCourses from "./pages/AllCourses";
import UserPage from "./pages/UserPage";
import ProfileBox from "./components/UserPage/ProfileBox";
import PurchasesBox from "./components/UserPage/PurchasesBox";
import ReviewsBox from "./components/UserPage/ReviewsBox";
import Footer from "./components/Footer";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Loader from "./components/Loader";
import Error from "./components/Error";
import { useLoadingContext } from "./contexts/LoadingContextProvider";
import Cart from "./pages/Cart";
import Overview from "./components/LearnPage/Overview";
import QnAComponent from "./components/LearnPage/QnAComponent";
import CreateReviewBox from "./components/LearnPage/CreateReviewBox";
import LearnPage from "./pages/LearnPage";

export default function App() {
  const { isLoading, error } = useLoadingContext();

  return (
    <div className="applayout">
      <BrowserRouter>
        <Navbar />

        {isLoading && <Loader />}

        {error && <Error>{error}</Error>}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/courses/:id" element={<ProductPage />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />

          <Route path="/about" element={<About />} />

          <Route path="/user" element={<UserPage />}>
            <Route index element={<Navigate replace to="profile" />} />
            <Route path="profile" element={<ProfileBox />} />
            <Route path="purchases" element={<PurchasesBox />} />
            <Route path="reviews" element={<ReviewsBox />} />
          </Route>

          <Route path="/courses/:id/learn" element={<LearnPage />}>
            <Route index element={<Navigate replace to="overview" />} />
            <Route path="overview" element={<Overview />} />
            <Route path="qna" element={<QnAComponent />} />
            <Route path="review" element={<CreateReviewBox />} />
          </Route>

          <Route path="cart" element={<Cart />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
