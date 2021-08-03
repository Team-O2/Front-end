import { SmallLeftArrowIcon, SmallRightArrowIcon } from 'assets/images';
import { Icon } from 'components/atoms';
import { Concert } from 'components/molecules';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { IConcert } from 'types/concert.type';
import { ConcertListWrapper, NavigationContainer, PageNavi, PageNumber } from './style';

interface IProps {
  concertData: Array<IConcert> | undefined;
  totalConcertNum: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}
function ConcertList({ concertData, totalConcertNum, currentPage, setCurrentPage }: IProps): React.ReactElement {
  const history = useHistory();
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(11);

  const commentsOfPage = 11;
  const totalPage = Math.ceil(totalConcertNum / commentsOfPage);
  const pageIndex: number[] = [...Array(totalPage)].map((_, i) => i + 1);
  const target = pageIndex.slice(startPage, endPage);

  const handlePageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(parseInt(e.currentTarget.value));
  };
  const handlePrevPageClick = () => {
    if (startPage !== 0) {
      setStartPage(startPage - 11);
      setEndPage(startPage);
      setCurrentPage(startPage);
    }
  };

  const handleNextPageClick = () => {
    if (endPage !== totalPage) {
      if (startPage + 11 <= totalPage) {
        setStartPage(startPage + 11);
        setCurrentPage(startPage + 12);
        if (endPage + 11 <= totalPage) {
          setEndPage(endPage + 11);
        } else {
          setEndPage(totalPage);
        }
      }
    }
  };
  return (
    <>
      <ConcertListWrapper>
        {concertData?.map(
          (card: IConcert) =>
            card && (
              <Concert
                imgThumbnail={card.imgThumbnail}
                authorNickname={card.authorNickname}
                interestList={card.interest}
                createdAt={card.createdAt}
                title={card.title}
                text={card.text}
                commentNum={card.commentNum}
                likes={card.likes}
                key={card._id}
                onClickFunc={() => history.push(`/concert/${card._id}`)}
              ></Concert>
            ),
        )}
        <NavigationContainer>
          <PageNavi onClick={handlePrevPageClick}>
            <Icon src={SmallLeftArrowIcon} />
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
            <Icon src={SmallRightArrowIcon} />
          </PageNavi>
        </NavigationContainer>
      </ConcertListWrapper>
    </>
  );
}

export default ConcertList;
