import styled from 'styled-components';

interface WrapperProps {
  color: string;
  size: number;
}

export const Wrapper = styled.div<WrapperProps>`
  display: inline-block;
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  & > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: ${({ size }) => size / 12}px solid;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) => color} transparent transparent transparent;
  }

  & > div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & > div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & > div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
