import React, { FC, useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import CenterContainer from '../components/layout/CenterContainer';
import LoadingWheel from '../components/loaders/LoadingWheel';
import { ApplicationThemeProvider } from '../hooks/ApplicationTheme';
import { AppWrapper } from './App.styles';
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
  return (
    <CenterContainer>
      <LoadingWheel size={48} />
    </CenterContainer>
  );
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
      <ApplicationThemeProvider defaultTheme="blue">
        <AppWrapper>{i18nReady ? <AppReady /> : <AppNotReady />}</AppWrapper>
      </ApplicationThemeProvider>
    </HelmetProvider>
  );
};

export default App;
