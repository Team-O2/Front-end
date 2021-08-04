import { MoreViewArrowIcon } from 'assets/images';
import { Icon, Link } from 'components/atoms';
import React from 'react';
import { IConcert } from 'types/concert.type';
import { IChallenge } from 'types/myPage.type';
import {
  EmptyTextWrapper,
  EngTitle,
  InfoWrapper,
  ItemContainer,
  LinkWrapper,
  MyPageSectionContainer,
  Title,
} from './style';

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
    <MyPageSectionContainer>
      {title === '작성한 글' ? <Title>{title}</Title> : <EngTitle>{title}</EngTitle>}
      <InfoWrapper>
        <h2>{subTitle}</h2>
        <Link to={path}>
          <LinkWrapper>
            <p>더보기</p>
            <Icon src={MoreViewArrowIcon} />
          </LinkWrapper>
        </Link>
      </InfoWrapper>
      {data ? (
        <ItemContainer {...props}>{renderItemList(data)}</ItemContainer>
      ) : (
        <EmptyTextWrapper>
          <p>스크랩한 글이 없어요</p>
        </EmptyTextWrapper>
      )}
    </MyPageSectionContainer>
  );
}

export default MyPageSection;
