import { MoreViewArrow } from 'assets/images';
import { Icon, Link } from 'components/atoms';
import React from 'react';
import { IConcert } from 'types/concert.type';
import { IChallenge } from 'types/myPage.type';
import { EngTitle, Title, Wrapper } from './style';

export interface IProps {
  title: string;
  subTitle: string;
  column: number;
  gap: number;
  path: string;
  data?: IConcert[] | IChallenge[] | null;
  renderItemList: (data: any[]) => React.ReactElement[]; // FIXME: IConcert[]와 IChallenge[]를 제네릭으로 받는 방법을 모르겠음...
}

function MyPageSection({ title, subTitle, path, data, renderItemList, ...props }: IProps): React.ReactElement {
  return (
    <Wrapper {...props}>
      {title === '작성한 글' ? <Title>{title}</Title> : <EngTitle>{title}</EngTitle>}
      <div className="infoContainer">
        <h2 className="body3">{subTitle}</h2>
        <Link to={path}>
          <div className="infoContainer__link">
            <p className="body2">더보기</p>
            <Icon src={MoreViewArrowIcon} />
          </div>
        </Link>
      </div>
      {data ? (
        <div className="itemContainer">{renderItemList(data)}</div>
      ) : (
        <div className="emptyContainer">
          <p className="subhead4">스크랩한 글이 없어요</p>
        </div>
      )}
    </Wrapper>
  );
}

export default MyPageSection;
