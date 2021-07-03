import React from 'react';
import TShareTogether from 'components/templates/ShareTogether';
import test from '../../assets/images/test.svg';

function ShareTogether(): React.ReactElement {
  return <TShareTogether concerts={mockData}></TShareTogether>;
}

export default ShareTogether;

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
    interest: ['IT', '요식업'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '좋아요 6등평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 3,
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
    interest: ['IT', '요식업'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '좋아요 8등평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 1,
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
    interest: ['IT', '요식업'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '좋아요 4등평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 5,
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
    interest: ['IT', '요식업'],
    createdAt: '2021-07-01',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '좋아요 5등평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
    like: 4,
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
