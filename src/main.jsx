import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LoadingContextProvider from "./contexts/LoadingContextProvider.jsx";
import UserContextProvider from "./contexts/UserContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <LoadingContextProvider>
        <App />
      </LoadingContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
