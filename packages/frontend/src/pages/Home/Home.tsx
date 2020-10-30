import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import NavBar from '../../components/NavBar';

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <NavBar />
      <h2>{t('pages.Home.title')}</h2>
    </div>
  );
};

export default Home;
