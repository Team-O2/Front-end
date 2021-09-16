import { Button, Icon, Tag } from 'components/atoms';
import { CommentedBoardRow } from 'components/molecules';
import { SmallLeftArrowIcon, SmallRightArrowIcon } from 'public/assets/images';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'stores/user';
import { IMyUserComment, IMyUserCommentResponse } from 'types/myPage.type';
import { changeDateFormat } from 'utils';
import * as S from './style';

export interface IProps {
  userComment: IMyUserCommentResponse;
  selectedCategory: string;
  currentPage: number;
  setSelectedCategory: (value: string) => void;
  setCurrentPage: (value: number) => void;
  handleModalOpen: () => void;
  checkedCommentList: number[];
  setCheckedCommentList: (value: number[]) => void;
  isSelectAll: boolean;
  setIsSelectAll: (value: boolean) => void;
  handleDetailModal: (id: number) => void;
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
  const [allCommentIdList, setAllCommentIdList] = useState<number[]>([]);
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
    setAllCommentIdList(userComment.comments.map((item) => item.id));
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
    const selectedId = parseInt(e.target.id);

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
    <S.Wrapper>
      <S.Title>댓글 단 글</S.Title>
      <S.SubTitle>{globalUserInfo?.nickname}님이 댓글 단 글이에요</S.SubTitle>
      <S.TagContainer>
        <Button value="Concert" onClick={handleClick}>
          <Tag
            name="Share Together"
            paddingX="20px"
            paddingY="10px"
            color="5"
            isSelected={selectedCategory === 'Concert'}
          />
        </Button>
        <Button value="Challenge" onClick={handleClick}>
          <Tag
            name="Learn Myself"
            paddingX="20px"
            paddingY="10px"
            color="5"
            isSelected={selectedCategory === 'Challenge'}
          />
        </Button>
        <Button value="Notice" onClick={handleClick}>
          <Tag name="공지사항" paddingX="20px" paddingY="10px" color="5" isSelected={selectedCategory === 'Notice'} />
        </Button>
      </S.TagContainer>
      <S.ButtonContainer>
        <Button onClick={isSelectAll ? handleAllUnselectClick : handleAllSelectClick}>
          {isSelectAll ? '선택해제' : '전체선택'}
        </Button>
        <Button onClick={handleModalOpen}>삭제</Button>
      </S.ButtonContainer>
      <S.CommentContainer>
        {userComment.comments?.map((item: IMyUserComment) => {
          return (
            <CommentedBoardRow
              id={item.id}
              key={item.id}
              content={item.text}
              date={changeDateFormat(item.createdAt)}
              boardId={item.post}
              isChecked={checkedCommentList.includes(item.id)}
              onChange={handleCommentSelect}
              category={selectedCategory}
              handleDetailModal={handleDetailModal}
            />
          );
        })}
      </S.CommentContainer>
      <S.NavigationContainer>
        <S.PageNavi onClick={handlePrevPageClick}>
          <Icon size={24} src={SmallLeftArrowIcon} />
        </S.PageNavi>
        <ul>
          {target.map((pageIdx: number) => (
            <li key={pageIdx}>
              <S.PageNumber value={`${pageIdx}`} onClick={handlePageClick} isSelected={currentPage === pageIdx}>
                {`${pageIdx}`}
              </S.PageNumber>
            </li>
          ))}
        </ul>
        <S.PageNavi onClick={handleNextPageClick}>
          <Icon size={24} src={SmallRightArrowIcon} />
        </S.PageNavi>
      </S.NavigationContainer>
    </S.Wrapper>
  );
}

export default MyCommentList;
