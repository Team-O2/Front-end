import { FilledBookmarkIcon } from 'assets/images';
import { Button, Icon } from 'components/atoms';
import React from 'react';
import { Contents, IconButton, Image, Name, Wrapper } from './style';

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
  const handleOnClick = (): void => {
    onButtonClick(id);
  };

  return (
    <Wrapper>
      {isBookmarked && (
        <IconButton value={id} onClick={onClick}>
          <Icon src={FilledBookmarkIcon} height="2.4rem" />
        </IconButton>
      )}
      <Button onClick={handleOnClick}>
        <span>
          <Image src={imagePath} />
          <Name>{name}</Name>
          <Contents>{content}</Contents>
        </span>
      </Button>
    </Wrapper>
  );
}

export default ChallengeCard;
