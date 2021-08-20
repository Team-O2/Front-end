import { Button, Label } from 'components/atoms';
import Styled, { css } from 'styled-components';
import { palette, theme } from 'styled-tools';

export const SubTitle = Styled(Label)`
    ${theme('font.subhead4')};
    color : ${palette('grayscale', 9)};
    margin-bottom : 8px;
`;

export const InputForm = Styled.div`
    display : flex;
    justify-content : space-between;
    margin-bottom : 40px;
`;

export const NumberSendButton = Styled(Button)<{ isConditionMet: { email: boolean; certifiNum: boolean } }>`
    ${theme('font.subhead3')};
    ${(props) =>
      props.isConditionMet.email &&
      css`
        background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
      `};
    background-color : ${(props) => !props.isConditionMet.email && palette('grayscale', 1)};
    width : 134px;
    height 60px;
    border-radius : 4px;
    color : ${palette('grayscale', 0)};
`;

export const Wrapper = Styled.div`
    width : 406px;
    display :flex;
    flex-direction : column;
    span{
      font-weight : bold;
    }
`;
