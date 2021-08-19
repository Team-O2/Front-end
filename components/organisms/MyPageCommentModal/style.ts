import { Button, Img } from 'components/atoms';
import Styled from 'styled-components';
import { ifProp, palette, theme } from 'styled-tools';

export const ChallengeModalWrapper = Styled.div`
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin:auto;
  border-radius: 18px;
  width: 844px;
  height: 607px;
`;

export const ModalWrapper = Styled.div`
  width: 100%;
  height: 544px;
  border-radius: 18px 18px 0 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const ModalUserInfo = Styled.div`
  display: flex;
  margin: 40px 30px 20px 30px;
  width: calc(100% - 60px);
  height: 80px;
`;

export const ModalUserImg = Styled(Img)`
  margin-right: 15px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;

export const ModalUserInfoWrapper = Styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  div:first-child {
    ${theme('font.subhead5')};
    display: flex;
    align-items: center;
    color: ${palette('grayscale', 7)};

    div:nth-child(2) {
      ${theme('font.body2')};
      margin: auto 10px;
      color: ${palette('grayscale', 4)};
    }
  }

  div:nth-child(2) {
    ${theme('font.subhead2')};
    color: ${palette('grayscale', 5)};
  }
`;

export const CommentWrapper = Styled.div`
  margin: 0 60px;
  width: calc(100% - 120px);
`;

export const CloseButton = Styled(Button)`
  ${theme('font.subhead3')};
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 63px;
  color: #fff;
  background-color: ${palette('grayscale', 7)};
  border-radius: 0 0 18px 18px;
`;

export const MoreButton = Styled(Button)`
  ${theme('font.subhead4')};
  color: ${palette('primary', 5)};
  margin: 50px 0;
`;

export const TextArea = Styled.div<{ isFolded: boolean }>`
  margin: 0 60px;
  width: calc(100% - 120px);
  h3 {
    ${theme('font.subhead3')};
    margin: 30px 0 6px 0;
    color: ${palette('grayscale', 7)};
  }
  p {
    ${theme('font.body3')};
    color: ${palette('grayscale', 6)};
    word-wrap: break-word;
    overflow: ${ifProp('isFolded', 'hidden')};
    text-overflow: ${ifProp('isFolded', 'ellipsis')};
    white-space: ${ifProp('isFolded', 'nowrap')};
  }
`;
