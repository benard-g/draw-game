import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import PageLayout from '../../components/layout/PageLayout';

const Rooms: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('pages.Rooms.head.title')}</title>
      </Helmet>
      <PageLayout>
        <h1>{t('pages.Rooms.title')}</h1>
      </PageLayout>
    </>
  );
};

export default Rooms;
