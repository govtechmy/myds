import { Routes, Route, Navigate, useParams } from "react-router-dom";
import LangWrapper from "./LangWrapper";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import LayoutMain from "./components/layout/LayoutMain";

export default function AppRoutes() {
  let lang = localStorage.getItem("lang");

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${lang}`} replace />} />
      <Route path=":lang" element={<LangWrapper />}>
        <Route element={<LayoutMain />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route
            path="testingpage"
            element={<div> this is testing page</div>}
          />
          <Route path="404" element={<ErrorPage />} />
          <Route path="*" element={<Redirect404Page />} />
        </Route>
      </Route>
    </Routes>
  );
}

function Redirect404Page() {
  const { lang } = useParams<{ lang: string | any }>();
  const allowedLangs = ["en", "ms"];
  let langStorage = localStorage.getItem("lang");
  const targetLang = allowedLangs.includes(lang) ? lang : langStorage;
  return <Navigate to={`/${targetLang}/404`} replace />;
}
