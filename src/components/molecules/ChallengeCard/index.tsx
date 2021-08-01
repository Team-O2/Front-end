import { FilledBookmarkIcon } from 'assets/images';
import { Button, Icon, Img } from 'components/atoms';
import React from 'react';
import { Wrapper } from './style';

export interface IProps {
  imagePath: string;
  isBookmarked?: boolean;
  id: string;
  name: string;
  content: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onButtonClick: (id: string) => void;
}

function ChallengeCard({
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
          <Icon className="card__icon" src={FilledBookmarkIcon} height="2.4rem" />
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

export default ChallengeCard;
