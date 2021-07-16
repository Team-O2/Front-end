import { FilledBookmark } from 'assets/images';
import { Button, Icon, Img } from 'components/atoms';
import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  imagePath: string;
  isBookmarked?: boolean;
  id: string;
  name: string;
  content: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onButtonClick: (id: string) => void;
}

function LearnMyselfCard({
  imagePath,
  isBookmarked,
  id,
  name,
  content,
  onClick,
  onButtonClick,
}: IProps): React.ReactElement {
  return (
    <Wrapper>
      {isBookmarked && (
        <Button className="card__icon-wrapper" value={id} onClick={onClick}>
          <Icon className="card__icon" src={FilledBookmark} height="2.4rem" />
        </Button>
      )}
      <Button onClick={() => onButtonClick(id)}>
        <span className="card">
          <Img className="card__img" src={imagePath} />
          <h3 className="card__name subhead3">{name}</h3>
          <p className="card__content body2">{content}</p>
        </span>
      </Button>
    </Wrapper>
  );
}

const Wrapper = Styled.div`
  position: relative;

  span {
    display: inline-block;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
    width: 254px;
    height: 259px;
  }
  
  .card {

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
