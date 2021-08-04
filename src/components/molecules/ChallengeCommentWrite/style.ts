import { Button } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const CommentSubmitButton = Styled(Button)`
    color: #555555;
    border:none;
    background-color: ${palette('grayscale', 0)};
    ${theme('font.subhead3')};
`;

export const CommentWriteWrapper = Styled.div<{ isCommentt: boolean }>`
    form{
      display: flex;
      flex-direction: column;
      align-items : flex-end;
    }

    textarea {
      width: ${({ isCommentt }) => (isCommentt ? '724px' : '591px')};
      height: ${({ isCommentt }) => (isCommentt ? '110px' : '54px')};
      margin: 0 0 8px;
      padding: 15px 15px;
      opacity: 0.5;
      align-items:center;
      resize : none;
      ${theme('font.body3')};
    } 
`;
