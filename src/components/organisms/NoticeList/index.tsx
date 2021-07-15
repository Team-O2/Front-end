import { SmallLeftArrow, SmallRightArrow } from 'assets/images';
import { Button, Icon } from 'components/atoms';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Styled from 'styled-components';
import { ifProp } from 'styled-tools';
import Notice from '../../molecules/Notice';

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
  noticeList: Array<IData>;
  totalNoticeNum: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}
function NoticeList({ noticeList, totalNoticeNum, currentPage, setCurrentPage }: IProps): React.ReactElement {
  console.log(noticeList);
  const history = useHistory();
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
      <SNoticeList>
        {noticeList?.map(
          (notice: IData) =>
            notice && (
              <Notice
                imgThumbnail={notice.imgThumbnail}
                authorNickname={notice.user.nickname}
                interestList={notice.interest}
                createdAt={notice.createdAt}
                title={notice.title}
                text={notice.text}
                commentNum={notice.commentNum}
                likes={notice.likes}
                key={notice._id}
                onClickFunc={() => history.push(`/notice/${notice._id}`)}
              ></Notice>
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
      </SNoticeList>
    </>
  );
}

const SNoticeList = Styled.div`
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
export default NoticeList;
