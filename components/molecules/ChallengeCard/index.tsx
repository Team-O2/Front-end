import { Button, Icon } from 'components/atoms';
import { FilledBookmarkIcon } from 'public/assets/images';
import React from 'react';
import { Contents, IconButton, ImageWrapper, Name, Wrapper } from './style';

export interface IProps {
  imagePath: string;
  isBookmarked?: boolean;
  id: number;
  name: string;
  content: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onButtonClick: (id: number) => void;
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
  const handleOnClick = (): void => {
    onButtonClick(id);
  };

  return (
    <Wrapper>
      {isBookmarked && (
        <IconButton value={id} onClick={onClick}>
          <Icon src={FilledBookmarkIcon} size={24} />
        </IconButton>
      )}
      <Button onClick={handleOnClick}>
        <span>
          <ImageWrapper>
            <Icon src={imagePath} size={100} circular="true" />
          </ImageWrapper>
          <Name>{name}</Name>
          <Contents>{content}</Contents>
        </span>
      </Button>
    </Wrapper>
  );
}

export default ChallengeCard;
