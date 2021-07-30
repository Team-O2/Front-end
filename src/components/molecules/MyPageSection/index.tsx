import { MoreViewArrow } from 'assets/images';
import { Icon, Link } from 'components/atoms';
import React from 'react';
import Styled from 'styled-components';
import { palette, prop } from 'styled-tools';
import { IConcert } from 'types/concert.type';
import { IChallenge } from 'types/myPage.type';

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
      <h2 className={title === '작성한 글' ? 'dp2' : 'dp2_eng'}>{title}</h2>
      <div className="infoContainer">
        <h2 className="body3">{subTitle}</h2>
        <Link to={path}>
          <div className="infoContainer__link">
            <p className="body2">더보기</p>
            <Icon src={MoreViewArrow} />
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

const Wrapper = Styled.div<{ column: number; gap: number }>`
  width: 1062px;

  .dp2, .dp2_eng {
    margin-bottom: 14px;
    color: ${palette('grayscale', -3)};
  }

  .infoContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;
    color: ${palette('grayscale', -4)};

    &__link {
      display: flex;
      align-items: center;
      width: 60px;
      height: 25px;
      color: ${palette('grayscale', 4)};

      p {
        margin: 2px 0 1px 0;
      }

      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  
  .emptyContainer {
    width: 100%;
    text-align: center;
    margin-top: 90px;
    color: ${palette('grayscale', 2)}
  }

  .itemContainer {
    display: grid;
    grid-template-columns: repeat(${prop('column')}, 1fr);
    gap: ${prop('gap')}px;
    width: 100%;
  }
`;

export default MyPageSection;
