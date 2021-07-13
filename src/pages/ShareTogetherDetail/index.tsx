import DetailTitle from 'components/molecules/DetailTitle';
import CommentList from 'components/organisms/CommentList';
import DetailContent from 'components/organisms/DetailContent';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import { getConcertData } from 'libs/axios';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Styled from 'styled-components';
import test from '../../assets/images/test.svg';

interface MatchParams {
  id: string;
}
interface IConcertData {
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

function ShareTogetherDetail({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { id } = match.params;
  const [concert, setConcert] = useState<IConcertData | null>(null);
  const [commentList, setCommentList] = useState([]);
  const [Likes, setLikes] = useState(0);
  const [likeClick, setLikeClick] = useState(false);
  useEffect(() => {
    getConcertList(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlNmIyYzRhZjM0ZDUxYmEwNmQzZGJiIn0sImlhdCI6MTYyNjEwNTQzMCwiZXhwIjoxNjI3MzE1MDMwfQ.JoWA_yA5o9v7LRMObG2RC-PTlfEhBS6v2eoYumcWSa4',
      id,
    );
  }, []);
  const getConcertList = async (token: string, condertID: string): Promise<void> => {
    const data = await getConcertData(token, condertID);
    //console.log(data);
    data && setConcert(data);
    data && setCommentList(data.comments);
    data && setLikes(data.likes);
  };
  console.log(commentList);
  const reLoadComment = (newComment: any) => {
    setCommentList(commentList?.concat(newComment));
  };
  const onLike = () => {
    setLikeClick(!likeClick);
    if (likeClick == true) {
      setLikes(Likes - 1);
    } else {
      setLikes(Likes + 1);
    }
  };
  return (
    <>
      <Header />
      <SShareTogetherDetail>
        <DetailTitle
          title={concert?.title}
          speaker={concert?.authorNickname}
          createdAt={concert?.createdAt}
          interest={concert?.interest}
        ></DetailTitle>
        <DetailContent
          image={concert?.imgThumbnail}
          desc={concert?.text}
          hashtag={concert?.hashtag}
          like={Likes}
          comments={concert?.commentNum}
          scrap={concert?.scrapNum}
          onLike={onLike}
          likeClick={likeClick}
        ></DetailContent>
        <CommentList commentList={commentList} reLoadComment={reLoadComment}></CommentList>
      </SShareTogetherDetail>
      <Footer />
    </>
  );
}

const SShareTogetherDetail = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 845px;
`;
export default ShareTogetherDetail;

const mockData = [
  {
    concertId: '1',
    image: test,
    speaker: '앵그리엘모',
    interest: ['IT', '요식업'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '좋아요 7등 평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 2,
    comments: [
      {
        childrenComment: [],
        _id: '1',
        userID: {
          _id: '1',
          nickname: '작성자 닉넴',
        },
        text: '댓글 테스트 4',
      },
      {
        childrenComment: [
          {
            _id: '11',
            userID: {
              _id: '1',
              nickname: '작성자 닉넴',
            },
            text: '들어가라 답글 얍!',
          },
        ],
        _id: '2',
        userID: {
          _id: '1',
          nickname: '작성자 닉넴',
        },
        text: '들어가라 댓글 얍!',
      },
    ],
    hashtag: ['#해시태그', '#오투 사랑해'],
    scrap: 5,
  },
  {
    concertId: '2',
    image: test,
    speaker: '앵그리엘모',
    interest: ['IT', '요식업'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '좋아요 6등평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 3,
    comments: [
      {
        childrenComment: [],
        _id: '1',
        userID: {
          _id: '1',
          nickname: '작성자 닉넴',
        },
        text: '댓글 테스트 4',
      },
      {
        childrenComment: [
          {
            _id: '11',
            userID: {
              _id: '1',
              nickname: '작성자 닉넴',
            },
            text: '들어가라 답글 얍!',
          },
        ],
        _id: '2',
        userID: {
          _id: '1',
          nickname: '작성자 닉넴',
        },
        text: '들어가라 댓글 얍!',
      },
    ],
    hashtag: ['#해시태그', '#오투 사랑해'],
    scrap: 5,
  },
  {
    concertId: '3',
    image: test,
    speaker: '앵그리엘모',
    interest: ['IT', '요식업'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '좋아요 8등평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 1,
    comments: [
      {
        childrenComment: [],
        _id: '1',
        userID: {
          _id: '1',
          nickname: '작성자 닉넴',
        },
        text: '댓글 테스트 4',
      },
      {
        childrenComment: [
          {
            _id: '11',
            userID: {
              _id: '1',
              nickname: '작성자 닉넴',
            },
            text: '들어가라 답글 얍!',
          },
        ],
        _id: '2',
        userID: {
          _id: '1',
          nickname: '작성자 닉넴',
        },
        text: '들어가라 댓글 얍!',
      },
    ],
    hashtag: ['#해시태그', '#오투 사랑해'],
    scrap: 5,
  },
  {
    concertId: '4',
    image: test,
    speaker: '앵그리엘모',
    interest: ['IT', '요식업'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '좋아요 4등평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 5,
    comments: [
      {
        childrenComment: [],
        _id: '1',
        userID: {
          _id: '1',
          nickname: '작성자 닉넴',
        },
        text: '댓글 테스트 4',
      },
      {
        childrenComment: [
          {
            _id: '11',
            userID: {
              _id: '1',
              nickname: '작성자 닉넴',
            },
            text: '들어가라 답글 얍!',
          },
        ],
        _id: '2',
        userID: {
          _id: '1',
          nickname: '작성자 닉넴',
        },
        text: '들어가라 댓글 얍!',
      },
    ],
    hashtag: ['#해시태그', '#오투 사랑해'],
    scrap: 5,
  },
  {
    concertId: '5',
    image: test,
    speaker: '앵그리엘모',
    interest: ['IT', '요식업'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '좋아요 5등평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 4,
    comments: [
      {
        childrenComment: [],
        _id: '1',
        userID: {
          _id: '1',
          nickname: '작성자 닉넴',
        },
        text: '댓글 테스트 4',
      },
      {
        childrenComment: [
          {
            _id: '11',
            userID: {
              _id: '1',
              nickname: '작성자 닉넴',
            },
            text: '들어가라 답글 얍!',
          },
        ],
        _id: '2',
        userID: {
          _id: '1',
          nickname: '작성자 닉넴',
        },
        text: '들어가라 댓글 얍!',
      },
    ],
    hashtag: ['#해시태그', '#오투 사랑해'],
    scrap: 5,
  },
  {
    concertId: '6',
    image: test,
    speaker: '앵그리엘모',
    interest: ['그래픽 및 디자인'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 9,
    comments: [
      {
        childrenComment: [],
        _id: '1',
        userID: {
          _id: '1',
          nickname: '작성자 닉넴',
        },
        text: '댓글 테스트 4',
      },
      {
        childrenComment: [
          {
            _id: '11',
            userID: {
              _id: '1',
              nickname: '작성자 닉넴',
            },
            text: '들어가라 답글 얍!',
          },
        ],
        _id: '2',
        userID: {
          _id: '1',
          nickname: '작성자 닉넴',
        },
        text: '들어가라 댓글 얍!',
      },
    ],
    hashtag: ['#해시태그', '#오투 사랑해'],
    scrap: 5,
  },
  {
    concertId: '7',
    image: test,
    speaker: '살아남는자',
    interest: ['그래픽 및 디자인'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기',
    desc: '평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 8,
    comments: [
      {
        childrenComment: [],
        _id: '1',
        userID: {
          _id: '1',
          nickname: '작성자 닉넴',
        },
        text: '댓글 테스트 4',
      },
      {
        childrenComment: [
          {
            _id: '11',
            userID: {
              _id: '1',
              nickname: '작성자 닉넴',
            },
            text: '들어가라 답글 얍!',
          },
        ],
        _id: '2',
        userID: {
          _id: '1',
          nickname: '작성자 닉넴',
        },
        text: '들어가라 댓글 얍!',
      },
    ],
    hashtag: ['#해시태그', '#오투 사랑해'],
    scrap: 5,
  },
  {
    concertId: '8',
    image: test,
    speaker: '사랑아노동해',
    interest: ['그래픽 및 디자인'],
    createdAt: '2021-07-01',
    title: '노동으로 히트친 그 사람, 드디어 만나보다 엘모의 내적',
    desc: '평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...v평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 7,
    comments: [
      {
        childrenComment: [
          {
            _id: '11',
            userID: {
              _id: '3',
              nickname: '콩나물콩콩',
            },
            text: '저 지금 콩나물 먹어야 되니까 말 걸지 마세요 코코~!',
          },
          {
            _id: '12',
            userID: {
              _id: '4',
              nickname: '작성자닉넴',
            },
            text: '콩나물 마싯냑',
          },
        ],
        _id: '1',
        userID: {
          _id: '1',
          nickname: '깡또아뚜아',
        },
        text: '와 엘모님 어쩜 그렇게 글을 잘 쓰시는거죠? 잘 읽었습니다. 특히 배울 점이 진짜 대박많아요... 그런데 오늘 날씨가 너무 덥네요. 저는 카페에 가서 엘모님 본받아서 써야겠어요.',
      },
      {
        childrenComment: [],
        _id: '2',
        userID: {
          _id: '2',
          nickname: '어노잉뚜빈',
        },
        text: '헐 엘모님 어쩜 그렇게 글을 잘 쓰시는거죠? 잘 읽었습니다. 특히 배울 점이 진짜 대박많아요... 그런데 오늘 날씨가 너무 덥네요. 저는 카페에 가서 엘모님 본받아서 써야겠어요.',
      },
      {
        childrenComment: [],
        _id: '3',
        userID: {
          _id: '2',
          nickname: '어노잉뚜빈',
        },
        text: '와 엘모님 어쩜 그렇게 글을 잘 쓰시는거죠? 잘 읽었습니다. 특히 배울 점이 진짜 대박많아요... 그런데 오늘 날씨가 너무 덥네요. 저는 카페에 가서 엘모님 본받아서 써야겠어요.',
      },
    ],
    hashtag: [
      '#해시태그',
      '#오투 사랑해',
      '#해시태그',
      '#오투 사랑해',
      '#해시태그',
      '#오투 사랑해',
      '#해시태그',
      '#오투 사랑해',
    ],
    scrap: 5,
  },
];
