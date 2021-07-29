import { SmallLeftArrow, SmallRightArrow } from 'assets/images';
import { Button, Icon } from 'components/atoms';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Styled from 'styled-components';
import { ifProp } from 'styled-tools';
import Concert from '../../molecules/Concert';

interface IData {
  videoLink: string;
  imgThumbnail: string;
  likes: number;
  commentNum: number;
  scrapNum: number;
  interest: string[];
  hashtag: string[];
  isDeleted: boolean;
  comments: string[];
  isNotice: boolean;
  _id: string;
  title: string;
  user: { _id: string; nickname: string; img: string };
  createdAt: string;
  text: string;
  authorNickname: string;
  updatedAt: string;
  __v: number;
}
interface IProps {
  concertData: Array<IData> | undefined;
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
      <SConcertList>
        {concertData?.map(
          (card: IData) =>
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
      </SConcertList>
    </>
  );
}

const SConcertList = Styled.div`
  margin-top: 60px;
  .navigationContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 60px auto 76px;
    
    img {
      width: 24px;
      height: 24px;
    }
    ul li {
      float: left;
      margin: 0 15px;
    }
  }
`;

const PageNavi = Styled(Button)`
  margin: 0 25px;
`;
const PageNumber = Styled(Button)<{ isSelected?: boolean }>`
  color: ${ifProp('isSelected', '#03b6ce', '#6f6f6f')};
`;
export default ConcertList;
