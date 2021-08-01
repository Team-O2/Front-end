import { Input } from 'components/atoms';
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

export const ProfileInput = Styled(Input)`
  width: 0;
  height: 0;
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

export const CategoryContainer = Styled.div`
  margin-bottom: 20px;
`;

export const NicknameInputContainer = Styled.div`
  margin-bottom: 50px;
`;

export const ProfileContainer = Styled.div`
  margin-bottom: 90px;
`;

interface IProfileImg {
  url: string;
}
export const ProfileImg = Styled.div<IProfileImg>`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background: url(${(props) => props.url}) center center / cover;
`;

export const EditBtn = Styled.img`
  cursor: pointer;

  position: relative;
  top: -54px;
  left: 105px;

  width: 45px;
  height: 45px;
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

export const Email = Styled.div`
  ${theme('font.subhead3')};
  width: 844px;
  height: 60px;
  margin-bottom: 50px;
  padding: 18px 20px 18px 20px;
  border-radius: 4px;
  background-color: ${palette('grayscale', 1)};
  display: flex;
  align-items: center;
  color: ${palette('grayscale', 4)};
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

export const InterestTagCntnr = Styled.div`
  ${theme('font.subhead3')};
  margin-right: 10px;
  padding: 12px 30px;
  border-radius: 60px;
  border: solid 1px ${palette('primary', 5)};
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${palette('primary', 5)};

  div {
    margin-right: 10px;
  }

  img {
    width: 14px;
  }
`;
