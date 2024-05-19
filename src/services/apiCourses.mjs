// const API_URL = "http://localhost:8000/api";
const API_URL = import.meta.env.VITE_API_URL;

export async function getAllCourses() {
  const res = await fetch(`${API_URL}/courses`);
  const data = await res.json();
  return data;
}

export async function getWebDevelopmentCourses() {
  const res = await fetch(`${API_URL}/courses?tags=web-development`);
  const data = await res.json();
  return data;
}

export async function getFrontEndCoursesData() {
  const res = await fetch(`${API_URL}/courses?tags=front-end`);
  const data = await res.json();
  return data;
}

export async function getBackEndCoursesData() {
  const res = await fetch(`${API_URL}/courses?tags=back-end`);
  const data = await res.json();
  return data;
}

export async function getCourse(id) {
  const res = await fetch(`${API_URL}/courses/${id}`, {
    credentials: "include",
  });

  const data = await res.json();
  return data;
}

export async function getCourseMaterial(id) {
  const res = await fetch(`${API_URL}/courses/${id}/learn`, {
    credentials: "include",
  });

  const data = await res.json();
  return data;
}

export async function signup(name, email, password, passwordConfirm) {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      passwordConfirm,
    }),
    credentials: "include",
  });

  const data = await res.json();
  return data;
}

export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
    credentials: "include",
  });

  const data = await res.json();
  return data;
}

export async function forgotPassword(email) {
  const res = await fetch(`${API_URL}/auth/forgotPassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();
  return data;
}

export async function resetPassword(token, newPassword, passwordConfirm) {
  const res = await fetch(`${API_URL}/auth/resetPassword/${token}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newPassword,
      passwordConfirm,
    }),
    credentials: "include",
  });

  const data = await res.json();
  return data;
}

export async function getCurrentUserPurchases(userId) {
  // userId could also have been taken from credientials
  // Would need seperate route in backend like /api/purchases/user
  const res = await fetch(`${API_URL}/users/${userId}/purchases`, {
    credentials: "include",
  });

  const data = await res.json();
  return data;
}

export async function getCurrentUserReviews(userId) {
  // userId could also have been taken from credientials
  // Would need seperate route in backend like /api/reviews/user
  const res = await fetch(`${API_URL}/users/${userId}/reviews`, {
    credentials: "include",
  });

  const data = await res.json();
  return data;
}

export async function getReviewByCourseIdAndUserId(courseId) {
  const res = await fetch(`${API_URL}/reviews/${courseId}/user`, {
    credentials: "include",
  });

  const data = await res.json();
  return data;
}

export async function createReview(courseId, reviewText, rating) {
  const res = await fetch(`${API_URL}/courses/${courseId}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      reviewText,
      rating,
    }),
    credentials: "include",
  });

  const data = await res.json();
  return data;
}
