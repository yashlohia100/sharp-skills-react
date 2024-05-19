/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

function LoadingContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const value = { isLoading, setIsLoading, error, setError };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}

export function useLoadingContext() {
  return useContext(LoadingContext);
}

export default LoadingContextProvider;
