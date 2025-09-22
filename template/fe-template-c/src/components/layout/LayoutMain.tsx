import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import FooterMyds from "./FooterMyds";
import MastheadMyds from "./MastheadMyds";
import NavbarMyds from "./NavbarMyds";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "@govtechmy/myds-react/button";

export default function LayoutMain() {
  const navigate = useNavigate();

  const toggleLangEn = () => {
    localStorage.setItem("lang", "en");
    i18n.changeLanguage("en");
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|ms)/, `/en`);
    navigate(newPath);
  };

  const toggleLangMs = () => {
    localStorage.setItem("lang", "ms");
    i18n.changeLanguage("ms");
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|ms)/, `/ms`);
    navigate(newPath);
  };

  const { t } = useTranslation();

  return (
    <>
      <MastheadMyds></MastheadMyds>
      <NavbarMyds></NavbarMyds>
      <div className="bg-bg-warning-50">
        <Button onClick={toggleLangMs}>Toggle this to ms</Button>
        <Button onClick={toggleLangEn}>Toggle this to en</Button>
        <h1>{t("welcome")} sini</h1>
      </div>

      {/* use outlet instead of children to tell where to render child routes for the current route hierarchy. */}
      <Outlet></Outlet>
      <FooterMyds></FooterMyds>
    </>
  );
}
