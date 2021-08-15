import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0.0;
    visibility: hidden;
  }
  to {
    opacity: 1.0;
    visibility: visible;
  }
`;
export const fadeOut = keyframes`
  from {
    opacity: 1.0;
    visibility: visible;
  }
  to {
    opacity: 0.0;
    visibility: hidden;
  }
`;
