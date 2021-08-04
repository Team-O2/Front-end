import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const CommentWrapper = Styled.div`
    display: flex;
    align-items:flex-start;
    justify-content: space-between;
    margin: 0 auto ;
    width: 724px;  

    img{
      border-radius : 100%;
      width: 28px;
      height: 28px;
    }
    h1{
      margin: 0 13px;
      width : 86px;
      ${theme('font.subhead3')};
      ${palette('grayscale', 9)};
    }
    h2{
      margin-right : 8px;
      width : 585px;
      white-space : normal;
      word-break:break-all;
      color: ${palette('grayscale', 5)};
      ${theme('font.body3')};
    }
`;

export const CommentFold = Styled.div`
    cursor : pointer;
    width: 50px;
    text-align : right;
    white-space : nowrap;
    color: ${palette('primary', 3)};
    ${theme('font.subhead2')};
`;

export const RecommentWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    align-items : flex-end;
    margin: 8px 0 31px;
`;

export const SingleCommentWrapper = Styled.div`
  display: flex;
    flex-direction: column;

    .reply {
      &__write {
        margin-bottom:20px;
      }
    }
`;
