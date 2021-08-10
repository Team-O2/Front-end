import { XIcon } from 'assets/images';
import React from 'react';
import * as S from './style';

interface IProps {
  setList: (e: string) => void;
  text: string;
}

function RemovableTag({ setList, text }: IProps): React.ReactElement {
  const handleOnClick = (e: React.MouseEvent<HTMLImageElement>) => {
    setList(e.currentTarget.id);
  };

  return (
    <S.RemovableContainer>
      <div>{text}</div>
      <img id={text} src={XIcon} onClick={handleOnClick} />
    </S.RemovableContainer>
  );
}

export default RemovableTag;
