import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import PageLayout from '../../components/layout/PageLayout';

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('pages.Home.head.title')}</title>
      </Helmet>
      <PageLayout>
        <h1>{t('pages.Home.title')}</h1>
      </PageLayout>
    </>
  );
};

export default Home;
