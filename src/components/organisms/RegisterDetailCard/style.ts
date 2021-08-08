import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const CardWrapper = Styled.div`
    display:inline-block;
    padding:60px 0px 0px 20px;
    vertical-align: top;
`;

export const NoticeCardWrapper = Styled.div`
    border-radius: 10px;
    box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
    padding: 30px 30px 30px 28px;
    width: 354px;
    height: 282px;

    h1{
      margin-top:20px;
      text-align: left;
      color: ${palette('grayscale', 3)};
      ${theme('font.subhead3_eng')};
    }
    p{
      text-align: left;
      color: ${palette('grayscale', 4)};
      ${theme('font.body3')};
    }
`;

export const NoticeHeaderWrapper = Styled.div`
    text-align: left;
    color: ${palette('grayscale', 7)};
    ${theme('font.body4')};

    img{
      float:right;
    }
`;
