import { Icon } from 'components/atoms';
import { XIcon } from 'public/assets/images';
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
      <p>{text}</p>
      <div id={text} onClick={handleOnClick}>
        <Icon src={XIcon} size={14} />
      </div>
    </S.RemovableContainer>
  );
}

export default RemovableTag;
