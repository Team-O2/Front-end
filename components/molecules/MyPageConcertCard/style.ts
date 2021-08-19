import { Link, Tag } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const DateInfo = Styled.div`
  margin-left: 4px;
  color: ${palette('grayscale', 4)};
  ${theme('font.body1_eng')};
`;

export const Content = Styled.div`
  width: 238px;
  height: 2.6em;
  margin: 0 0 24px 1px;
  color: ${palette('grayscale', 4)};
  text-align: left;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ${theme('font.body2')};
`;

export const Title = Styled.div`
  width: 274px;
  margin: 33px 0 10px 2px;
  color: ${palette('grayscale', 7)};
  white-space: nowrap;
  ${theme('font.subhead4')};
`;

export const InfoTag = Styled(Tag)`
  ${theme('font.subhead2')};
`;

export const InfoContainer = Styled.div`
  margin: 20px 0;

  * {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ImageWrapper = Styled.div`
  width: 200px;
  height: 214px;
  margin: 0 20px 0 0;
  object-fit: cover;
  border-radius: 10px 0 0 10px;

  img {
    border-radius: 10px 0 0 10px;
  }
`;

export const CardContainer = Styled.div`
  display: flex;
  border-radius: 10px;
  width: 516px;
  height: 214px;
  padding: 0 20px 0 0;
  box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
`;

export const MyPageConcertCardWrapper = Styled(Link)`
  span {
    display: inline-block;
  }
`;
