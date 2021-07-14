import { SmallLeftArrow, SmallRightArrow } from 'assets/images';
import { Button, Icon, Tag } from 'components/atoms';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Styled from 'styled-components';
import { ifProp, palette } from 'styled-tools';
import { IMyUserCommentResponse } from 'types/myPage';
import { changeDateFormat } from 'utils';
import { deleteUserCommentList } from '../../../apis/myPage';
import { userState } from '../../../stores/user';
import { IMyUserComment } from '../../../types/myPage';
import CommentedBoardRow from '../../molecules/CommentedBoardRow/index';

export interface IProps {
  userCommentData: IMyUserCommentResponse;
  selectedCategory: string;
  currentPage: number;
  reRenderFlag: boolean;
  setReRenderFlag: (value: boolean) => void;
  setSelectedCategory: (value: string) => void;
  setCurrentPage: (value: number) => void;
}

function MyCommentList({
  userCommentData,
  selectedCategory,
  setSelectedCategory,
  currentPage,
  setCurrentPage,
  reRenderFlag,
  setReRenderFlag,
}: IProps): React.ReactElement {
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(5);
  const [checkedCommentList, setCheckedCommentList] = useState<string[]>([]);
  const [allCommentIdList, setAllCommentIdList] = useState<string[]>([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const globalUserInfo = useRecoilValue(userState);

  const commentsOfPage = 5;
  const totalPage = Math.ceil(userCommentData.commentNum / commentsOfPage);
  const pageIndex: number[] = [...Array(totalPage)].map((_, i) => i + 1);
  const target = pageIndex.slice(startPage, endPage);

  useEffect(() => {
    setCheckedCommentList([]);
    setAllCommentIdList([]);
  }, [selectedCategory]);

  useEffect(() => {
    setAllCommentIdList(userCommentData.comments.map((item) => item._id));
  }, [selectedCategory, currentPage, userCommentData.comments]);

  useEffect(() => {
    setIsSelectAll(allCommentIdList.includes(checkedCommentList[checkedCommentList.length - 1]));
  }, [allCommentIdList, checkedCommentList]);

  const deleteSelectedCommentList = async () => {
    await deleteUserCommentList({ token: TOKEN, commentIdList: checkedCommentList });
    setIsSelectAll(false);
    setReRenderFlag(!reRenderFlag);
  };

  const handleAllSelectClick = () => {
    setCheckedCommentList([...checkedCommentList, ...allCommentIdList]);
  };

  const handleAllUnselectClick = () => {
    setCheckedCommentList(checkedCommentList.filter((commentId) => !allCommentIdList.includes(commentId)));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(e.currentTarget.value);
    setCurrentPage(1);
  };

  const handlePageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(parseInt(e.currentTarget.value));
  };

  const handleCommentSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = e.target.id;

    if (checkedCommentList.includes(selectedId)) {
      setCheckedCommentList(checkedCommentList.filter((commentId) => commentId !== selectedId));
    } else {
      setCheckedCommentList([...checkedCommentList, selectedId]);
    }
  };

  const handlePrevPageClick = () => {
    if (startPage !== 0) {
      setStartPage(startPage - 5);
      setEndPage(startPage);
      setCurrentPage(startPage);
    }
  };

  const handleNextPageClick = () => {
    if (endPage !== totalPage) {
      if (startPage + 5 <= totalPage) {
        setStartPage(startPage + 5);
        setCurrentPage(startPage + 6);
        if (endPage + 5 <= totalPage) {
          setEndPage(endPage + 5);
        } else {
          setEndPage(totalPage);
        }
      }
    }
  };

  return (
    <Wrapper>
      <h2 className="dp2">댓글 단 글</h2>
      <h4 className="body3">{globalUserInfo.nickname}님이 댓글 단 글이에요</h4>
      <div className="tagContainer">
        <Button value="Concert" onClick={handleClick}>
          <Tag
            className="subhead4_eng"
            name="Share Together"
            paddingX="20px"
            paddingY="10px"
            color="5"
            isSelected={selectedCategory === 'Concert'}
          />
        </Button>
        <Button value="Challenge" onClick={handleClick}>
          <Tag
            className="subhead4_eng"
            name="Learn Myself"
            paddingX="20px"
            paddingY="10px"
            color="5"
            isSelected={selectedCategory === 'Challenge'}
          />
        </Button>
        <Button value="Notice" onClick={handleClick}>
          <Tag
            className="subhead4"
            name="공지사항"
            paddingX="20px"
            paddingY="10px"
            color="5"
            isSelected={selectedCategory === 'Notice'}
          />
        </Button>
      </div>
      <div className="buttonContainer">
        <Button className="body4" onClick={isSelectAll ? handleAllUnselectClick : handleAllSelectClick}>
          {isSelectAll ? '선택해제' : '전체선택'}
        </Button>
        <Button className="subhead4" onClick={deleteSelectedCommentList}>
          삭제
        </Button>
      </div>
      <div className="commentContainer">
        {userCommentData.comments?.map((item: IMyUserComment) => {
          return (
            <CommentedBoardRow
              id={item._id}
              key={item._id}
              content={item.text}
              date={changeDateFormat(item.createdAt)}
              boardId={item.post}
              isChecked={checkedCommentList.includes(item._id)}
              onChange={handleCommentSelect}
            />
          );
        })}
      </div>
      <div className="navigationContainer">
        <PageNavi onClick={handlePrevPageClick}>
          <Icon src={SmallLeftArrow} />
        </PageNavi>
        <ul>
          {target.map((pageIdx: number) => (
            <li key={pageIdx}>
              <PageNumber
                className="subhead4_eng"
                value={`${pageIdx}`}
                onClick={handlePageClick}
                isSelected={currentPage === pageIdx}
              >
                {`${pageIdx}`}
              </PageNumber>
            </li>
          ))}
        </ul>
        <PageNavi onClick={handleNextPageClick}>
          <Icon src={SmallRightArrow} />
        </PageNavi>
      </div>
    </Wrapper>
  );
}

const PageNumber = Styled(Button)<{ isSelected?: boolean }>`
  color: ${ifProp('isSelected', '#03b6ce', '#6f6f6f')};
`;

const PageNavi = Styled(Button)`
  margin: 0 25px;
`;

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
      color: ${palette('grayscale', 4)};
    }
    button:nth-child(2) {
      margin-right: 17px;
      color: ${palette('grayscale', 5)};
    }
  }

  .commentContainer {
    width: 100%;
  }

  .navigationContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      width: 24px;
      height: 24px;
    }

    ul li {
      margin: 0 15px;
      float: left;
    }
  }
`;

export default MyCommentList;
