import Styled from 'styled-components';

export const SModal = Styled.div<{ isBlur?: boolean }>`
  .modal {
    position: absolute;
    z-index : 100;
    &__background {
      position : fixed;
      top : 0;
      left : 0;
      width : 100vw;
      height : 100vh;
      opacity : ${(props) => (props.isBlur ? 0.3 : undefined)};
      background-color : ${(props) => (props.isBlur ? 'rgba(0,0,0,0.5)' : undefined)};
    }
  }
`;
