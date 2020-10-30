import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { initI18n } from './i18next';
import Routes from './Routes';

const AppReady: React.FC = () => {
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

const AppNotReady: React.FC = () => {
  return <p>Loading...</p>;
};

const App: React.FC = () => {
  const [i18nReady, setI18nReady] = React.useState<boolean>(false);

  React.useEffect(() => {
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
