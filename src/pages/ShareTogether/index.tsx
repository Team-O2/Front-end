import ConcertTitle from 'components/molecules/ConcertTitle';
import CategoryList from 'components/organisms/CategoryList';
import ConcertCardList from 'components/organisms/ConcertCardList';
import ConcertList from 'components/organisms/ConcertList';
import Header from 'components/organisms/Header';
import SeachForm from 'components/organisms/SearchForm';
import React from 'react';
import Styled from 'styled-components';
import test from '../../assets/images/test.svg';

interface IData {
  concertId: string;
  image: string;
  speaker: string;
  interest: string[];
  createdAt: string;
  title: string;
  desc: string;
  like: number;
  commentNum: number;
}

function ShareTogether(): React.ReactElement {
  const reRender = (category: string) => {
    console.log(category);
  };

  mockData.sort(function (a: IData, b: IData) {
    return b.like - a.like;
  });
  const concertCardData = mockData.slice(undefined, 3);
  const concertData = mockData.slice(3);

  return (
    <>
      <Header />
      <SShareTogether>
        <ConcertTitle></ConcertTitle>
        <CategoryList reRender={reRender}></CategoryList>
        <SeachForm></SeachForm>
        <ConcertCardList concertCardData={concertCardData} />
        <ConcertList concertData={concertData}></ConcertList>
      </SShareTogether>
    </>
  );
}

const SShareTogether = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 845px;
`;
export default ShareTogether;

const mockData = [
  {
    concertId: '1',
    image: test,
    speaker: '앵그리엘모',
    interest: ['뷰티', '금융'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '좋아요 7등 평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 2,
    commentNum: 2,
    comments: [
      {
        _id: 'id',
        author: '작성자 닉넴',
        text: '댓글 내용',
        reply: [
          {
            _id: 'id',
            author: '작성자 닉넴',
            text: '댓글 내용',
          },
        ],
      },
    ],
  },
  {
    concertId: '2',
    image: test,
    speaker: '앵그리엘모',
    interest: ['뷰티', '금융'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '좋아요 6등평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 3,
    commentNum: 2,
    comments: [
      {
        _id: 'id',
        author: '작성자 닉넴',
        text: '댓글 내용',
        reply: [
          {
            _id: 'id',
            author: '작성자 닉넴',
            text: '댓글 내용',
          },
        ],
      },
    ],
  },
  {
    concertId: '3',
    image: test,
    speaker: '앵그리엘모',
    interest: ['금융', '뷰티'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '좋아요 8등평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 1,
    commentNum: 2,
    comments: [
      {
        _id: 'id',
        author: '작성자 닉넴',
        text: '댓글 내용',
        reply: [
          {
            _id: 'id',
            author: '작성자 닉넴',
            text: '댓글 내용',
          },
        ],
      },
    ],
  },
  {
    concertId: '4',
    image: test,
    speaker: '앵그리엘모',
    interest: ['금융', '뷰티'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '좋아요 4등평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 5,
    commentNum: 2,
    comments: [
      {
        _id: 'id',
        author: '작성자 닉넴',
        text: '댓글 내용',
        reply: [
          {
            _id: 'id',
            author: '작성자 닉넴',
            text: '댓글 내용',
          },
        ],
      },
    ],
  },
  {
    concertId: '5',
    image: test,
    speaker: '앵그리엘모',
    interest: ['금융', '뷰티'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '좋아요 5등평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 4,
    commentNum: 2,
    comments: [
      {
        _id: 'id',
        author: '작성자 닉넴',
        text: '댓글 내용',
        reply: [
          {
            _id: 'id',
            author: '작성자 닉넴',
            text: '댓글 내용',
          },
        ],
      },
    ],
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
    commentNum: 2,
    comments: [
      {
        _id: 'id',
        author: '작성자 닉넴',
        text: '댓글 내용',
        reply: [
          {
            _id: 'id',
            author: '작성자 닉넴',
            text: '댓글 내용',
          },
        ],
      },
    ],
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
    commentNum: 2,
    comments: [
      {
        _id: 'id',
        author: '작성자 닉넴',
        text: '댓글 내용',
        reply: [
          {
            _id: 'id',
            author: '작성자 닉넴',
            text: '댓글 내용',
          },
        ],
      },
    ],
  },
  {
    concertId: '8',
    image: test,
    speaker: '사랑아노동해',
    interest: ['그래픽 및 디자인'],
    createdAt: '2021-07-01',
    title: '노동으로 히트친 그 사람, 드디어 만나보다 엘모의 내적',
    desc: '평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 7,
    commentNum: 2,
    comments: [
      {
        _id: 'id',
        author: '작성자 닉넴',
        text: '댓글 내용',
        reply: [
          {
            _id: 'id',
            author: '작성자 닉넴',
            text: '댓글 내용',
          },
        ],
      },
    ],
  },
];
