import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MoodPage from "../Pages/MoodPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/mood/:mood",
      element: <MoodPage />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
