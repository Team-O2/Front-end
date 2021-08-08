import { CharacterBlackIcon, CharacterColor1Icon, CharacterColor2Icon, CharacterColor3Icon } from 'assets/images';
import React from 'react';
import {
  CharacterStepImg,
  CharacterWrapper,
  ProgressBarStep0,
  ProgressBarStep1,
  ProgressBarStep2,
  ProgressBarStep3,
} from './style';

interface IProps {
  countProgressBar: number;
}

function ChallengeProgressBar({ countProgressBar }: IProps): React.ReactElement {
  return (
    <>
      {countProgressBar === 0 ? (
        <CharacterWrapper>
          <div>
            <img src={CharacterBlackIcon} alt="" />
            <p>당신의 오늘을 알고싶어요!</p>
          </div>
          <div>
            <ProgressBarStep0>
              <span>.</span>
            </ProgressBarStep0>
          </div>
        </CharacterWrapper>
      ) : null}

      {countProgressBar === 1 ? (
        <CharacterWrapper>
          <h1>
            <CharacterStepImg src={CharacterColor1Icon} alt="" />
            <p>오호라! 오늘 이런 일이 있었군요!</p>
          </h1>
          <div>
            <ProgressBarStep1>
              <span>.</span>
            </ProgressBarStep1>
          </div>
        </CharacterWrapper>
      ) : null}

      {countProgressBar === 2 ? (
        <CharacterWrapper>
          <h2>
            <CharacterStepImg src={CharacterColor2Icon} alt="" />
            <p>우와! 내일의 당신은 더 행복할거에요 :)</p>
          </h2>
          <div>
            <ProgressBarStep2>
              <span>.</span>
            </ProgressBarStep2>
          </div>
        </CharacterWrapper>
      ) : null}

      {countProgressBar === 3 ? (
        <CharacterWrapper>
          <h3>
            <img src={CharacterColor3Icon} alt="" />
            <p>더 성장한 내일의 나를 위해!</p>
          </h3>
          <div>
            <ProgressBarStep3>
              <span>.</span>
            </ProgressBarStep3>
          </div>
        </CharacterWrapper>
      ) : null}
    </>
  );
}

export default ChallengeProgressBar;
