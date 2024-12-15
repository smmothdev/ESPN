import '../src/App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Layout from './components/Shared/Layout/Layout';
import Home from './pages/Home';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = window.location.pathname.split('/')[1];
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route
          path="/:lang"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/:lang/about-us"
          element={
            <Layout>
              {/* <AboutUs /> */}
              about us
            </Layout>
          }
        />
        <Route
          path="/:lang/privacy"
          element={
            <Layout>
              {/* <Privacy /> */}
              privacy
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
