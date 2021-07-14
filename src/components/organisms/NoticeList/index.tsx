import React from 'react';
import { useHistory } from 'react-router';
import Styled from 'styled-components';
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
  noticeList: Array<IData> | undefined;
}
function NoticeList({ noticeList }: IProps): React.ReactElement {
  const history = useHistory();
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
      </SNoticeList>
    </>
  );
}

const SNoticeList = Styled.div`
  margin-top: 60px;
`;

export default NoticeList;
