import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Writer = Styled.div`
  margin-right: 10px;
  width : 90px;
  color: ${palette('grayscale', 9)};
  ${theme('font.subhead3')};
`;

export const Text = Styled.div`
  width: 100%;
  white-space: normal;
  word-break: break-all;
  color: ${palette('grayscale', 5)};
  ${theme('font.body3')};
`;

export const ReplyCommentWrapper = Styled.div`
  display: flex;
  justify-content: flex-end;
  margin:13px 0;
  margin-left: 133px;
  width : 585px;
  img {
    margin-right: 10px;
    border-radius: 100%;
    width: 26px !important;
    height: 26px !important;  
  }
`;
