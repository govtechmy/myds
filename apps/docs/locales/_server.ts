import rosetta from "rosetta";
import en from "./en";
import ms from "./ms";

const getRosetta = (lang: "en" | "ms") => {
  const i18n = rosetta({ en, ms });
  i18n.locale(lang);

  return i18n;
};
export { getRosetta };
