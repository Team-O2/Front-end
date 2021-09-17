import Styled, { css } from 'styled-components';
import { palette } from 'styled-tools';

export const StatusBtn = Styled.div<{ status: number }>`
border-radius: 10px;
padding : 5px;
font-family: AppleSDGothicNeo;
font-size: 7px;
font-weight: bold;
${(props) =>
  props.status === 1
    ? css`
        border: solid 0.5px ${palette('grayscale', 4)};
        color: ${palette('grayscale', 4)};
      `
    : css`
        border: solid 0.5px ${palette('primary', 5)};
        color: ${palette('primary', 5)};
      `}
:hover {
    cursor : pointer;
}
`;

export const Label = Styled.div<{ isOpened?: boolean; isEnglish: boolean }>`
font-size: 16px;
line-height: 1.25;
letter-spacing: normal;
text-align: left;
font-family : ${(props) => (props.isEnglish ? 'HomepageBaukasten' : 'AppleSDGothicNeo')};
fontWeight : ${(props) => (props.isOpened ? 'bold' : 'normal')};
:hover{
  font-weight: bold;
}
`;
