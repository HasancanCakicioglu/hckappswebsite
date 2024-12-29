import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './pages/HomePage.tsx';
import AboutMe from './pages/AboutmePage.tsx';
import NotfoundPage from './pages/NotfoundPage.tsx';
import Apps from './pages/AppsPage.tsx';
import PrivacyPolicy from './pages/PrivacyPolicyPage.tsx';
import Contact from './pages/ContactPage.tsx';


const router = createBrowserRouter([
  {
    "path": "/",
    "element": <Home />,
    errorElement: <NotfoundPage />
  },
  {
    "path": "/apps",
    "element": <Apps/>
  },
  {
    "path": "/about-me",
    "element": <AboutMe />
  },
  {
    "path": "/contact",
    "element": <Contact />
  },
  {
    "path": "/privacy-policy",
    "element": <PrivacyPolicy />
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


