import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HomePage from "../Pages/HomePage";
import MoodPage from "../Pages/MoodPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/moods",
      element: <HomePage />,
    },
    {
      path: "/get-started",
      element: <HomePage />,
    },
    {
      path: "/mood/:mood",
      element: <MoodPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
