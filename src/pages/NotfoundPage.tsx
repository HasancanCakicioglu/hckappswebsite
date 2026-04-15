import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotfoundPage() {
    const { t } = useTranslation("notfound");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // LinkedIn sometimes appends invisible characters like %E2%81%A0 (Word Joiner)
        // This check handles URLs that start with /audiobook but aren't exactly it
        if (location.pathname.startsWith('/audiobook')) {
            navigate('/audiobook', { replace: true });
        }
    }, [location.pathname, navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen  text-[#00df9a]">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-6">{t('notfound.notfoundpage')}</p>
          <button
            className="px-6 py-3 bg-[#00df9a] text-gray-900 font-semibold rounded-md hover:bg-[#00c387] transition duration-300"
          >
            <Link to="/">{t('notfound.backtohome')}</Link>
          </button>
        </div>
      );
}

