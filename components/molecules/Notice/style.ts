import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Info = Styled.div`
  display: flex;
  flex-direction: column;
  width: 111px;
  height: 84px;
  color: #404040;
  ${theme('font.body1')};
  & p:nth-of-type(1) {
    margin: 0 38px 12px 0;
    width: 100px;
    ${theme('font.subhead3')};
  }
  :hover{
    cursor:pointer;
  }
`;

export const Content = Styled.div`
  display: flex;
  flex-direction: column;
  width: 524px;
  height: 84px;
  color: ${palette('grayscale', 9)};
  ${theme('font.subhead3')};
  & p:nth-of-type(2) {
    display: -webkit-box;
    margin-top: 12px;
    width: 524px;
    height: 2.79em;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: normal; 
    word-wrap: break-word;
    color: ${palette('grayscale', 7)};
    ${theme('font.body2')};
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
  }
  :hover{
    cursor:pointer;
  }
`;

export const ThumbnailContainer = Styled.div`
  position: relative;
  img {
    width: 170px;
    height: 84px;
    object-fit: cover;
  }
  :hover{
    cursor:pointer;
  }
`;

export const ThumbnailOverlay = Styled.div`
  position: absolute;
  bottom: 0;
  transition: .5s ease;
  opacity:0;
  background: rgb(0, 0, 0);
  width: 100%;
  height: 100%;
  :hover {
    opacity:0.6;
  }
`;

export const ThumbnailInfo = Styled.div`
  display: flex;
  position:absolute;
  top: 50%;
  left: 50%;
  align-items:center;
  transform: translate(-50%, -50%);
  color: ${palette('grayscale', 0)};
  ${theme('font.body2_eng')};
  img {
    margin-right:5px;
    width: 20px;
    height: 20px;
  }
  p {
    margin-right:10px;
  }
`;

export const ConcertWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #DFDFDF;
  height: 144px;
`;
