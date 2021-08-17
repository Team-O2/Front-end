import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';
export const Video = Styled.div`
  margin-top: 60px;
  height: 468px;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Text = Styled.div`
  margin-top: 40px;
  line-height: 1.56;
  color: ${palette('grayscale', 6)};
  ${theme('font.body4')};
  h1 {
    ${theme('font.h2_eng')};
  }
  h2 {
    ${theme('font.h1_eng')};
  }
  blockquote {
    padding-left: 20px;
    border-left: 3px solid ${palette('grayscale', 6)};
  }
  ol {
    list-style-type:decimal;
    list-style-position : inside;
  }
  ul li{
    list-style-type:disc ;
    list-style-position : inside;
  }
`;

export const HashTagList = Styled.div`
  margin-top: 60px;
`;

export const IconList = Styled.div`
  display: flex;
  flex-direction: row;
  margin: 60px 0 18px;
  color: ${palette('grayscale', 7)};
  ${theme('font.body4_eng')};
`;

export const Like = Styled.div`
  display: flex;
  align-items:center;
  margin-right: 20px;
`;

export const Comment = Styled.div`
  display: flex;
  align-items:center;
  margin-right: 20px;
`;

export const Scrap = Styled.div`
  display: flex;
  align-items:center;
`;

export const IconContainer = Styled.div`
    margin-right: 10px;
`;
