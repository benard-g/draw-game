import styled from 'styled-components';

export const Wrapper = styled.header`
  padding: 16px;
  margin-bottom: 15px;

  background-color: ${({ theme }) => theme.colors.navBar};

  display: flex;
  flex-direction: row;

  & > *:not(:first-child) {
    margin-left: 10px;
  }
`;

export const NavLinksContainer = styled.nav`
  & > ul {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  & > ul > li:not(:first-child) {
    margin-left: 10px;
  }
`;

export const NavTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[3]};
  font-weight: bold;
`;

export const NavLink = styled.span`
  font-size: ${({ theme }) => theme.fontSize[1]};
`;
