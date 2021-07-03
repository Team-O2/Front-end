import React from 'react';
import Styled from 'styled-components';
import { Link, Img, Tag } from 'components/atoms';

export interface IProps {
  imagePath?: string;
  tagName: string;
  tagColor?: string;
  title: string;
  content: string;
  date: string;
  id: string;
}

function ShareTogetherCard({
  imagePath = '',
  tagName,
  tagColor = '5',
  title,
  content,
  date,
  id,
}: IProps): React.ReactElement {
  return (
    <LinkWrapper to={`${id}`}>
      <span>
        <div className="card">
          <div className="card__img-wrapper">{!!imagePath ? <Img src={imagePath} /> : null}</div>
          <div className="card__info">
            <Tag className="Subhead2-apple14_bold" name={tagName} color={tagColor} />
            <div className="card__info--title Subhead4-apple18_bold">{title}</div>
            <div className="card__info--content Body2-apple14_regular">{content}</div>
            <div className="card__info--date Body1-hb12_book">{date}</div>
          </div>
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
    border-radius: 10px;
    border: solid 1px gray;
    width: 516px;
    height: 214px;
    padding: 0 20px 0 0;

    &__img-wrapper {
      width: 200px;
      height: 214px;
      margin: 0 20px 0 0;
      object-fit: cover;

      img {
        border-radius: 10px 0 0 10px;
      }
    }

    &__info {
      margin: 20px 0;

      * {
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &--title {
        width: 274px;
        margin: 33px 0 10px 2px;
        white-space: nowrap;
      }

      &--content {
        width: 238px;
        height: 2.6em;
        margin: 0 0 24px 1px;
        text-align: left;
        white-space: normal;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      &--time {
        margin-left: 4px;
      }
    }
  }
`;

export default ShareTogetherCard;
