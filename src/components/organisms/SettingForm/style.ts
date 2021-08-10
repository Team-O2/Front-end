import Styled, { css } from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Container = Styled.div`
  width: 100%;
  padding: 100px 0 400px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = Styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropdownWrapper = Styled.div`
  margin-bottom: 50px;
`;

export const InterestList = Styled.div`
  width: 844px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

export const CategoryWrapper = Styled.div`
  margin-bottom: 20px;
`;

export const Txt = Styled.div`
  ${theme('font.subhead4')};
  width: 844px;
  margin-bottom: 10px;
  color: ${palette('grayscale', 9)};
`;

export const Text = Styled(Txt)`
  width: auto;
`;

export const TxtSmall = Styled.div`
  ${theme('font.body3')};
  color: ${palette('grayscale', 5)};
`;

export const PolicyCntnr = Styled.div`
  width: 844px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const PwBtn = Styled.div`
  ${theme('font.body3')};
  cursor: pointer;
  width: 844px;
  height: 60px;
  margin-bottom: 50px;
  border-radius: 4px;
  border: 1px solid ${palette('grayscale', 1)};
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${palette('grayscale', 9)};
`;

interface IBtn {
  isActive: boolean;
}
export const Btn = Styled.div<IBtn>`
  ${theme('font.subhead3')};
  cursor: pointer;
  width: 844px;
  height: 60px;
  border-radius: 4px;
  background-color: ${palette('grayscale', 1)};
  ${(props) =>
    props.isActive &&
    css`
      background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
    `}
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${palette('grayscale', 0)};
`;
