"use client";
import rosetta from "rosetta";
import { createContext, FunctionComponent, ReactNode, useEffect } from "react";
import { useParams } from "next/navigation";

interface RosettaContextProps {
  t<X extends Record<string, any> | any[]>(
    key: string | (string | number)[],
    params?: X,
    lang?: string,
  ): string;
}

const RosettaContext = createContext<RosettaContextProps>({
  t: () => "",
});

interface RosettaProviderProps {
  en: Record<string, any>;
  ms: Record<string, any>;
}

const RosettaProvider: FunctionComponent<{
  locales: RosettaProviderProps;
  children: ReactNode;
}> = ({ locales, children }) => {
  const i18n = rosetta({ en: locales.en, ms: locales.ms });
  const params = useParams();
  i18n.locale(params.lang as string);

  useEffect(() => {
    i18n.locale(params.lang as string);
  }, [params.lang]);

  return (
    <RosettaContext.Provider value={{ t: i18n.t }}>
      {children}
    </RosettaContext.Provider>
  );
};

export { RosettaProvider, RosettaContext };
