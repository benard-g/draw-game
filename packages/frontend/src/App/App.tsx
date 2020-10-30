import React, { FC, useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { initI18n } from './i18next';
import Routes from './Routes';

const AppReady: FC = () => {
  const { i18n, t } = useTranslation();

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{t('App.head.title')}</title>
      </Helmet>

      <Routes />
    </>
  );
};

const AppNotReady: FC = () => {
  return <p>Loading...</p>;
};

const App: FC = () => {
  const [i18nReady, setI18nReady] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await initI18n();
      setI18nReady(true);
    })();
  }, []);

  return (
    <HelmetProvider>
      {i18nReady ? <AppReady /> : <AppNotReady />}
    </HelmetProvider>
  );
};

export default App;
