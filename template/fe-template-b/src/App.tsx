import { Button } from "@govtechmy/myds-react/button";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import LayoutMain from "./components/layout/LayoutMain";

function App() {
  // When first initialize get the language from local storage.
  let initData = localStorage.getItem("lang");

  // If not available then set en as reference
  if (initData !== "en" && initData !== "ms") {
    initData = "en";
    localStorage.setItem("lang", initData);
  }

  // if the language is available, apply language immediately
  if (i18n.language !== initData) {
    i18n.changeLanguage(initData);
  }

  const toggleLangEn = () => {
    localStorage.setItem("lang", "en");
    i18n.changeLanguage("en");
  };

  const toggleLangMs = () => {
    localStorage.setItem("lang", "ms");
    i18n.changeLanguage("ms");
  };

  const { t } = useTranslation();

  return (
    <LayoutMain>
      <div className="bg-bg-warning-50">
        <Button onClick={toggleLangMs}>Toggle this to ms</Button>
        <Button onClick={toggleLangEn}>Toggle this to en</Button>
        <h1>{t("welcome")} sini</h1>
      </div>
    </LayoutMain>
  );
}

export default App;
