import { SmallLeftArrowIcon, SmallRightArrowIcon } from 'assets/images';
import { Button, Icon, Tag } from 'components/atoms';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { IMyUserCommentResponse } from 'types/myPage.type';
import { changeDateFormat } from 'utils';
import { userState } from '../../../stores/user';
import { IMyUserComment } from '../../../types/myPage.type';
import CommentedBoardRow from '../../molecules/CommentedBoardRow/index';
import { PageNavi, PageNumber, Wrapper } from './style';

export interface IProps {
  userComment: IMyUserCommentResponse;
  selectedCategory: string;
  currentPage: number;
  setSelectedCategory: (value: string) => void;
  setCurrentPage: (value: number) => void;
  handleModalOpen: () => void;
  checkedCommentList: string[];
  setCheckedCommentList: (value: string[]) => void;
  isSelectAll: boolean;
  setIsSelectAll: (value: boolean) => void;
  handleDetailModal: (id: string) => void;
}

function MyCommentList({
  userComment,
  selectedCategory,
  setSelectedCategory,
  currentPage,
  setCurrentPage,
  handleModalOpen,
  checkedCommentList,
  setCheckedCommentList,
  isSelectAll,
  setIsSelectAll,
  handleDetailModal,
}: IProps): React.ReactElement {
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(5);
  const [allCommentIdList, setAllCommentIdList] = useState<string[]>([]);
  const globalUserInfo = useRecoilValue(userState);

  const commentsOfPage = 5;
  const totalPage = Math.ceil(userComment.commentNum / commentsOfPage);
  const pageIndex: number[] = [...Array(totalPage)].map((_, i) => i + 1);
  const target = pageIndex.slice(startPage, endPage);

  useEffect(() => {
    setCheckedCommentList([]);
    setAllCommentIdList([]);
  }, [selectedCategory, setCheckedCommentList]);

  useEffect(() => {
    setAllCommentIdList(userComment.comments.map((item) => item._id));
  }, [selectedCategory, currentPage, userComment.comments]);

  useEffect(() => {
    setIsSelectAll(allCommentIdList.includes(checkedCommentList[checkedCommentList.length - 1]));
  }, [allCommentIdList, checkedCommentList, setIsSelectAll]);

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
      <h4 className="body3">{globalUserInfo?.nickname}님이 댓글 단 글이에요</h4>
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
        <Button className="subhead4" onClick={handleModalOpen}>
          삭제
        </Button>
      </div>
      <div className="commentContainer">
        {userComment.comments?.map((item: IMyUserComment) => {
          return (
            <CommentedBoardRow
              id={item._id}
              key={item._id}
              content={item.text}
              date={changeDateFormat(item.createdAt)}
              boardId={item.post}
              isChecked={checkedCommentList.includes(item._id)}
              onChange={handleCommentSelect}
              category={selectedCategory}
              handleDetailModal={handleDetailModal}
            />
          );
        })}
      </div>
      <div className="navigationContainer">
        <PageNavi onClick={handlePrevPageClick}>
          <Icon src={SmallLeftArrowIcon} />
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
          <Icon src={SmallRightArrowIcon} />
        </PageNavi>
      </div>
    </Wrapper>
  );
}

export default MyCommentList;
