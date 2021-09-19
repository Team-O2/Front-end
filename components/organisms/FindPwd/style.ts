import { Button, Label } from 'components/atoms';
import Styled, { css } from 'styled-components';
import { palette, theme } from 'styled-tools';

export const SubmitButton = Styled(Button)<{ isBtnDisabled: boolean }>`
    ${theme('font.subhead3')};
    margin-top : 14px;
    width : 406px;
    height : 60px;
    border-radius : 4px;
    color : ${palette('grayscale', 0)};
    ${(props) =>
      props.isBtnDisabled &&
      css`
        background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
      `};
      background-color : ${(props) => !props.isBtnDisabled && palette('grayscale', 1)};
`;

export const LabelTitle = Styled(Label)`
    ${theme('font.dp1')};
    color : ${palette('grayscale', 9)};
    margin-bottom : 60px;
`;

export const SFindPWDWrap = Styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    margin-top : 230px;
    margin-bottom : 250px;
`;
