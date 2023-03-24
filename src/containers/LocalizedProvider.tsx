import { useRouter } from "next/router";
import React, { FC, PropsWithChildren } from "react";

import { IntlProvider } from "react-intl";

import locales from "~/i18n/locales";

const LocalizedProvider: FC<PropsWithChildren> = ({ children }) => {
  const { locale = "en", defaultLocale = "en" } = useRouter();

  console.log(defaultLocale);

  // eslint-disable-next-line import/namespace
  const messages = locales[locale];

  return (
    <IntlProvider
      locale={locale}
      messages={messages}
      defaultLocale={defaultLocale}
    >
      {children}
    </IntlProvider>
  );
};

export default LocalizedProvider;
