import { Button, Tag } from 'components/atoms';
import React from 'react';
import Styled from 'styled-components';
import { palette } from 'styled-tools';
import CommentedBoardRow from '../../molecules/CommentedBoardRow/index';

export interface IProps {
  data?: any; // TODO: API연결 후 인터페이스 정의하기
}

const requestData = [
  {
    _id: '1',
    userID: '작성자 object id',
    text: '댓글 내용',
    child: ['대댓글 object id'],
  },
  {
    _id: '2',
    userID: '작성자 object id',
    text: '댓글 내용',
    child: ['대댓글 object id'],
  },
  {
    _id: '3',
    userID: '작성자 object id',
    text: '댓글 내용',
    child: ['대댓글 object id'],
  },
];

function MyCommentList({ data }: IProps): React.ReactElement {
  return (
    <Wrapper>
      <h2 className="dp2">댓글 단 글</h2>
      <h4 className="body3">{'앵그리엘모'}님이 댓글 단 글이에요</h4>
      <div className="tagContainer">
        <Button>
          <Tag
            className="subhead4_eng"
            name="Share Together"
            paddingX="20px"
            paddingY="10px"
            color="5"
            isSelected={false}
          />
        </Button>
        <Button>
          <Tag
            className="subhead4_eng"
            name="Learn Myself"
            paddingX="20px"
            paddingY="10px"
            color="5"
            isSelected={true}
          />
        </Button>
        <Button>
          <Tag className="subhead4" name="공지사항" paddingX="20px" paddingY="10px" color="5" isSelected={false} />
        </Button>
      </div>
      <div className="buttonContainer">
        <Button className="body4">{'전체선택'}</Button>
        <Button className="subhead4">{'삭제'}</Button>
      </div>
      <div className="commentContainer">
        <ul>
          <li>
            <CommentedBoardRow id={'1'} content={'slkdjf'} date={'2019. 13. 13'} boardId={'123132'} />
          </li>
          <li>
            <CommentedBoardRow />
          </li>
        </ul>
      </div>
      <div className="pageContainer">
        {/* 왼쪽버튼 */}
        <ul>
          <li>{/* 페이지 */}</li>
        </ul>
        {/* 오른쪽 버튼 */}
      </div>
    </Wrapper>
  );
}

const Wrapper = Styled.div`
  width: 1062px;

  .dp2 {
    margin-bottom: 14px;
    color: ${palette('grayscale', -3)};
  }
  
  .body3 {
    margin-bottom: 60px;
    color: ${palette('grayscale', -4)};
  }

  .tagContainer {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
    button {
      margin-right: 10px;
    }
  }

  .buttonContainer {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    button:first-child {
      margin-right: 17px;
    }
  }

  .commentContainer {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-columns: repeat(5, 1fr);
    gap: 40px;
    width: 100%;
  }
`;

export default MyCommentList;
