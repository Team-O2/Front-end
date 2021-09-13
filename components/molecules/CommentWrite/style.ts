import { Button, TextArea } from 'components/atoms';
import Styled from 'styled-components';
import { ifProp, palette } from 'styled-tools';

export const CommentForm = Styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

export const CommentTextArea = Styled(TextArea)<{ isCommentCheck?: boolean }>`
  border: 1px solid #dfdfdf;
  padding: 10px;
  width: ${ifProp('isCommentCheck', '100%', '685px')};
  height: ${ifProp('isCommentCheck', '110px', '90px')};
  :focus {
    outline:none;
  }
  margin-top:21px;
  margin-right:${ifProp('isCommentCheck', '0', '21px')};
  margin-left:${ifProp('isCommentCheck', '0', '21px')};
`;

export const CommentButton = Styled(Button)<{ isCommentCheck?: boolean }>`
  display: flex;
  margin-top: 8px;
  margin-left: auto;
  margin-right:${ifProp('isCommentCheck', '0', '21px')};
  color: ${palette('grayscale', 6)};
  font-family: 'AppleSDGothicNeo';
  font-size: ${ifProp('isCommentCheck', '16px', '14px')};
  font-weight: bold;
  &:hover{
    opacity: 70%;
    cursor: pointer;
  }
`;
