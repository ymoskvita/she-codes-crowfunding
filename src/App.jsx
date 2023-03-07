
import React from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import CreateProjectPage from './pages/CreateProjectPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PledgePage from './pages/PledgePage';

const HeaderLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
};

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/create-project",
        element: <CreateProjectPage />,
      },
      {
        path: "/project/:id",
        element: <ProjectPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/pledges/:id",
        element: <PledgePage />,
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
