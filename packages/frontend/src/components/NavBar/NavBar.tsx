import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <ul>
        <li>
          - <Link to="/">{t('components.NavBar.linkHome')}</Link>
          <br />
        </li>
      </ul>

      <br />
      <br />
      <br />
    </div>
  );
};

export default NavBar;
