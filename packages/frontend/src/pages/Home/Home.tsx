import { gql } from '@apollo/client';
import React, { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import PageLayout from '../../components/layout/PageLayout';
import { useHomeQuery } from '../../services/graphql/generated';

gql`
  query Home {
    getToto {
      name
      description
    }
  }
`;

const Home: FC = () => {
  const { t } = useTranslation();
  const { loading, error, data } = useHomeQuery();

  let pageContent: ReactElement | null = null;
  if (loading) {
    pageContent = <p>Loading...</p>;
  } else if (error) {
    pageContent = <p>An error occurred...</p>;
  } else if (data) {
    const toto = data.getToto;
    pageContent = (
      <>
        <br />
        <br />
        <br />
        <h2>{toto.name}</h2>
        <p>{toto.description}</p>
      </>
    );
  }

  return (
    <div>
      <h1>{t('pages.Home.title')}</h1>
      {pageContent}
    </div>
  );
};

const HomeWithHelmet: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('pages.Home.head.title')}</title>
      </Helmet>

      <PageLayout>
        <Home />
      </PageLayout>
    </>
  );
};

export default HomeWithHelmet;
