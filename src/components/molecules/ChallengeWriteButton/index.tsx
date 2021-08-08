import React from 'react';
import { BlackButton, ButtonWrapper, ColorButton } from './style';

interface IProps {
  countProgressBar: number;
  handleSubmit: (e: any) => void;
}

function ChallengeWriteButton({ countProgressBar, handleSubmit }: IProps): React.ReactElement {
  return (
    <>
      {countProgressBar === 3 ? (
        <ButtonWrapper>
          <ColorButton onClick={handleSubmit}>글 올리기</ColorButton>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <BlackButton>글 올리기</BlackButton>
        </ButtonWrapper>
      )}
    </>
  );
}

export default ChallengeWriteButton;
