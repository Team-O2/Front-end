import { EmptyBookmark, FilledBookmark } from 'assets/images';
import { Icon, Img, Link } from 'components/atoms';
import React from 'react';
import Styled from 'styled-components';

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
          <Img className="card__img" src={imagePath} />
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
    border-radius: 20px;
    box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
    width: 254px;
    height: 259px;

    &__icon-wrapper {
      display: flex;
      position: absolute;
      top: 24px;
      right: 24px;
      align-items: center;
      justify-content: center;
      z-index: 1;
      width: 24px;
      height: 24px;
    }
    
    &__img {
      margin: 30px 0 10px 0;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      object-fit: cover;
    }

    &__name {
      margin-bottom: 23px;
    }

    &__content {
      display: box;
      width: 225px;
      height: 3em;
      overflow: hidden;
      text-align: left;
      text-overflow: ellipsis;
      word-break: break-word;
      color: #838383;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;

export default LearnMyselfCard;
