import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const SwitchRadio = Styled.input`
  display: none;

  + label {
    cursor: pointer;
    color: ${palette('grayscale', 3)};
  }
  :checked + label {
    color: ${palette('grayscale', 6)};
    padding-bottom: 2px;
    background: 
      linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)})
      left 
      bottom
      #fff
      no-repeat; 
    background-size: 100% 2px;
}
`;

export const Switch = Styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  li {
    margin: 0 20px;
  }

  label {
    ${theme('font.subhead5')};
  }
`;

export const Wrapper = Styled.div`
`;

export const Header = Styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 581px;
  background-color: ${palette('grayscale', -2)};
`;

export const Body = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Top = Styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin: 120px 0 150px 0;
`;

export const Bottom = Styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 150px 0;
  background-color: #f7f7f7;
`;
