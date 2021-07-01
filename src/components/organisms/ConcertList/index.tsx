import React from 'react';
import Styled from 'styled-components';
import test from '../../../assets/images/test.svg';
import Concert from '../../molecules/Concert';

const mockData = [
  {
    id: '1',
    image: test,
    speaker: '앵그리엘모',
    category: '그래핏 및 디자인',
    date: '6월 23일',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
  },
  {
    id: '2',
    image: test,
    speaker: '앵그리엘모',
    category: '그래핏 및 디자인',
    date: '6월 23일',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
  },
  {
    id: '3',
    image: test,
    speaker: '앵그리엘모',
    category: '그래핏 및 디자인',
    date: '6월 23일',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
  },
  {
    id: '4',
    image: test,
    speaker: '앵그리엘모',
    category: '그래핏 및 디자인',
    date: '6월 23일',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
  },
  {
    id: '5',
    image: test,
    speaker: '앵그리엘모',
    category: '그래핏 및 디자인',
    date: '6월 23일',
    title: '창업에서 살아남기 오늘도 눈물짓는 소쩍새가 되는 방법 공유',
    desc: '평소 컨텐츠 영감을 얻기 위해서 많은 커뮤니티나 오픈카톡방을 눈팅하고는 한다. 그러다가도 괜한 오지랖에 조언을 하고는 하는데, 영상에 등장하신 참치님(오픈카톡방 닉네임)은 그렇게 만난분들 중 하...',
  },
];

function ConcertList(): React.ReactElement {
  return (
    <>
      <SConcertList>
        {mockData.map((card) => (
          <Concert
            image={card.image}
            speaker={card.speaker}
            category={card.category}
            date={card.date}
            title={card.title}
            desc={card.desc}
            key={card.id}
          ></Concert>
        ))}
      </SConcertList>
    </>
  );
}

const SConcertList = Styled.div`
  margin-top: 60px;
`;

export default ConcertList;
