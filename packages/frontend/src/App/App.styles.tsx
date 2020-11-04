import styled from 'styled-components';

export const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &,
  & * {
    font-size: ${({ theme }) => theme.fontSize[1]};
  }

  background-color: ${({ theme }) => theme.colors.background};
`;
