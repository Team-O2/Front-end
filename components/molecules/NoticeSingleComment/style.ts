import { CommentWrite } from 'components/molecules';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const CommentContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  img {
    width: 28px;
    height: 28px;
  }
`;

export const CommentWriter = Styled.div`
  ${theme('font.subhead3')};
`;

export const CommentText = Styled.div`
  width: 647px;
  color: ${palette('grayscale', 5)};
  ${theme('font.body3')};
`;

export const CommentToggle = Styled.div`
  width: 50px;
  text-align: right;
  color: ${palette('primary', 3)};
  ${theme('font.subhead2')};
`;

export const ReplyContainer = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 50px auto;
  background-color: rgba(223,223,223,0.22);
  width :725px;
`;

export const ReplyCommentWrite = Styled(CommentWrite)`
  display: flex;
  justify-content: flex-end;
`;

export const ReplyContent = Styled.div`
  width: 712px;
`;

export const NoticeSingleCommentWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  border-bottom : 1px solid  rgba(223,223,223,0.22);
  margin-top: 50px;
`;
