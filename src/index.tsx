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
import Layout from './components/Layout.jsx';
import './i18n.ts';


const router = createBrowserRouter([
  {
    "path": "/",
    "element": <Layout><Home /></Layout>,
    errorElement: <NotfoundPage />
  },
  {
    "path": "/apps",
    "element": <Layout><Apps /></Layout>
  },
  {
    "path": "/about-me",
    "element": <Layout><AboutMe /></Layout>
  },
  {
    "path": "/contact",
    "element": <Layout><Contact /></Layout>
  },
  {
    "path": "/privacy-policy",
    "element": <Layout><PrivacyPolicy /></Layout>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


