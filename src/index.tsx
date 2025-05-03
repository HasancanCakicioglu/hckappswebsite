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
import PrivacyPolicyCryptobex from './pages/PrivacyPolicyCryptobex.tsx';
import PrivacyPolicyPhotoTranslator from './pages/PrivacyPolicyPhotoTranslator.tsx';
import PrivacyPolicyStopwatchSkull from './pages/PrivacyPolicyStopwatch.tsx';
import PrivacyPolicyTapTapUp from './pages/PrivacyPolicyTapTapUp.tsx';
import YoutubeSpeedControllerPrivacyPolicy from './pages/privacy-policy/YoutubeSpeedController.tsx';
import YoutubeBookmarkerPrivacyPolicy from './pages/privacy-policy/YoutubeBookMaker.tsx';


const router = createBrowserRouter([
  {
    "path": "/",
    "element": <Layout><Home /></Layout>,
    errorElement: <NotfoundPage />
  },
  {
    path: "/apps/:appId?",
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
  {
    "path": "/privacy-policy-cryptobex",
    "element": <Layout><PrivacyPolicyCryptobex /></Layout>
  },
  {
    "path": "/privacy-policy-phototranslator",
    "element": <Layout><PrivacyPolicyPhotoTranslator /></Layout>
  },
  {
    "path": "/privacy-policy-stopwatchskull",
    "element": <Layout><PrivacyPolicyStopwatchSkull /></Layout>
  },
  {
    "path": "/privacy-policy-taptapup",
    "element": <Layout><PrivacyPolicyTapTapUp /></Layout>
  },
  {
    "path": "/privacy-policy-youtubespeedcontroller",
    "element": <Layout><YoutubeSpeedControllerPrivacyPolicy /></Layout>
  },
  {
    "path": "/privacy-policy-youtubebookmarker",
    "element": <Layout><YoutubeBookmarkerPrivacyPolicy /></Layout>
  },
  {
    "path": "*",
    "element": <NotfoundPage />
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


