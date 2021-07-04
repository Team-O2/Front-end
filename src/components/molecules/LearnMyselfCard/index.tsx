import React from 'react';
import Styled from 'styled-components';
import { Icon, Link, Img } from 'components/atoms';
import EmptyBookmark from 'assets/images/emptyBookmark.svg';
import FilledBookmark from 'assets/images/filledBookmark.svg';

export interface IProps {
  imagePath: string;
  isBookmarked: boolean;
  id: string;
  name: string;
  content: string;
}

function LearnMyselfCard({ imagePath, isBookmarked, id, name, content }: IProps): React.ReactElement {
  return (
    <LinkWrapper to={`${id}`}>
      <span>
        <div className="card">
          <div
            className="card__icon-wrapper"
            onClick={() => {
              alert('북마크 누르기');
            }}
          >
            <Icon className="card__icon" src={isBookmarked ? FilledBookmark : EmptyBookmark} height="2.4rem" />
          </div>
          {!!imagePath ? <Img className="card__img" src={imagePath} /> : null}
          <h3 className="card__name subhead3">{name}</h3>
          <p className="card__content body2">{content}</p>
        </div>
      </span>
    </LinkWrapper>
  );
}

const LinkWrapper = Styled(Link)`
  span {
    display: inline-block;
  }
  
  .card {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 254px;
    height: 259px;
    margin: 0 15px 15px 0;
    box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
    border-radius: 20px;

    &__icon-wrapper {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      right: 24px;
      top: 24px;
      z-index: 1;
    }
    
    &__img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin: 30px 0 10px 0;
    }

    &__name {
      margin-bottom: 23px;
    }

    &__content {
      overflow: hidden;
      text-overflow: ellipsis;
      width: 225px;
      height: 3em;
      text-align: left;
      word-break: break-word;
      display: -webkit-box;
      color: #838383;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;

export default LearnMyselfCard;
