import { PropsWithChildren } from 'react';
import { IntlProvider } from 'react-intl';

import dutchTranslations from './nl.json';
import englishTranslations from './en.json';
import russianTranslations from './ru.json';

type Messages = {
  en: { [key: string]: string };
  nl: { [key: string]: string };
  ru: { [key: string]: string };
};

const messages: Messages = {
  en: englishTranslations,
  nl: dutchTranslations,
  ru: russianTranslations,
};

export const TranslationsProvider = ({ children }: PropsWithChildren) => {
  const [userLocale] = window.navigator.language.split(/[-_]/) as (keyof Messages)[];

  return (
    <IntlProvider locale={userLocale} messages={messages[userLocale]}>
      {children}
    </IntlProvider>
  );
};
