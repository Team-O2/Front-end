import { Img } from 'components/atoms';
import { Notice } from 'components/molecules';
import { SmallLeftArrowIcon, SmallRightArrowIcon } from 'public/assets/images';
import React, { useState } from 'react';
import { INotice } from 'types/notice.type';
import { NavigationContainer, NoticeListWrapper, PageNavi, PageNumber } from './style';

interface IProps {
  noticeList: Array<INotice>;
  totalNoticeNum: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}
function NoticeList({ noticeList, totalNoticeNum, currentPage, setCurrentPage }: IProps): React.ReactElement {
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(8);
  const commentsOfPage = 8;
  const totalPage = Math.ceil(totalNoticeNum / commentsOfPage);
  const pageIndex: number[] = [...Array(totalPage)].map((_, i) => i + 1);
  const target = pageIndex.slice(startPage, endPage);

  const handlePageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(parseInt(e.currentTarget.value));
  };
  const handlePrevPageClick = () => {
    if (startPage !== 0) {
      setStartPage(startPage - 8);
      setEndPage(startPage);
      setCurrentPage(startPage);
    }
  };
  const handleNextPageClick = () => {
    if (endPage !== totalPage) {
      if (startPage + 8 <= totalPage) {
        setStartPage(startPage + 8);
        setCurrentPage(startPage + 9);
        if (endPage + 8 <= totalPage) {
          setEndPage(endPage + 8);
        } else {
          setEndPage(totalPage);
        }
      }
    }
  };

  return (
    <>
      <NoticeListWrapper>
        {noticeList?.map(
          (notice: INotice) =>
            notice && (
              <Notice
                imgThumbnail={notice.imgThumbnail}
                authorNickname={notice.nickname}
                interestList={notice.interest}
                createdAt={notice.createdAt}
                title={notice.title}
                text={notice.text}
                commentNum={notice.commentNum}
                key={notice.id}
                noticeID={notice.id}
              ></Notice>
            ),
        )}
        <NavigationContainer>
          <PageNavi onClick={handlePrevPageClick}>
            <Img src={SmallLeftArrowIcon} />
          </PageNavi>
          <ul>
            {target.map((pageIdx: number) => (
              <li key={pageIdx}>
                <PageNumber value={`${pageIdx}`} onClick={handlePageClick} isSelected={currentPage === pageIdx}>
                  {`${pageIdx}`}
                </PageNumber>
              </li>
            ))}
          </ul>
          <PageNavi onClick={handleNextPageClick}>
            <Img src={SmallRightArrowIcon} />
          </PageNavi>
        </NavigationContainer>
      </NoticeListWrapper>
    </>
  );
}

export default NoticeList;
