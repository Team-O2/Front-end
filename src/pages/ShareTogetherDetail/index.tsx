import React from 'react';
import { RouteComponentProps } from 'react-router';
import test from '../../assets/images/test.svg';
import Styled from 'styled-components';
import ConcertDetailTitle from 'components/molecules/ConcertDetailTitle';
import CommentList from 'components/organisms/CommentList';

interface MatchParams {
  id: string;
}
function ShareTogetherDetail({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { id } = match.params;
  const selectedConcert = mockData.find((el) => el.concertId === id);

  return (
    <SShareTogetherDetail>
      <ConcertDetailTitle selectedConcert={selectedConcert}></ConcertDetailTitle>
      <CommentList selectedConcert={selectedConcert}></CommentList>
    </SShareTogetherDetail>
  );
}

const SShareTogetherDetail = Styled.div`
  width: 845px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
        _id: '1',
        author: '깡또아뚜아',
        text: '와 엘모님 어쩜 그렇게 글을 잘 쓰시는거죠? 잘 읽었습니다. 특히 배울 점이 진짜 대박많아요... 그런데 오늘 날씨가 너무 덥네요. 저는 카페에 가서 엘모님 본받아서 써야겠어요.',
        reply: [
          {
            _id: '1',
            author: '콩나물콩콩',
            text: '저 지금 콩나물 먹어야 되니까 말 걸지 마세요 코코~!',
          },
          {
            _id: '2',
            author: '작성자 닉넴',
            text: '콩나물 마싯냑',
          },
        ],
      },
      {
        _id: '2',
        author: '어노잉뚜빈',
        text: '와 엘모님 어쩜 그렇게 글을 잘 쓰시는거죠? 잘 읽었습니다. 특히 배울 점이 진짜 대박많아요... 그런데 오늘 날씨가 너무 덥네요. 저는 카페에 가서 엘모님 본받아서 써야겠어요.',
        reply: [
          {
            _id: '1',
            author: '작성자 닉넴',
            text: '댓글 내용',
          },
        ],
      },
      {
        _id: '3',
        author: '어노잉뚜빈',
        text: '와 엘모님 어쩜 그렇게 글을 잘 쓰시는거죠? 잘 읽었습니다. 특히 배울 점이 진짜 대박많아요... 그런데 오늘 날씨가 너무 덥네요. 저는 카페에 가서 엘모님 본받아서 써야겠어요.',
        reply: [
          {
            _id: '1',
            author: '작성자 닉넴',
            text: '댓글 내용',
          },
        ],
      },
    ],
  },
];
