import React, { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useI18nLanguages } from '../../../hooks/useI18nLanguages';
import { NavLink, NavLinksContainer, NavTitle, Wrapper } from './NavBar.styles';

const NavBar: FC = () => {
  const { t, i18n } = useTranslation();
  const languages = useI18nLanguages(i18n);

  const onLangChanged = (event: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Wrapper>
      <NavLinksContainer>
        <ul>
          <li>
            <Link to="/">
              <NavTitle>{t('components.NavBar.title')}</NavTitle>
            </Link>
          </li>
          <li>
            <Link to="/rooms">
              <NavLink>{t('components.NavBar.linkRooms')}</NavLink>
            </Link>
          </li>
        </ul>
      </NavLinksContainer>

      <select onChange={onLangChanged} defaultValue={i18n.language}>
        {languages.map((lang) => (
          <option value={lang} key={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

export default NavBar;
