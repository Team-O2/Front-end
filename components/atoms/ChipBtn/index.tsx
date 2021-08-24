import { Button, Img } from 'components/atoms';
import { XBtn } from 'public/assets/images';
import React from 'react';
import { ChipName, SChipBtn } from './style';

interface IUserData {
  title: string;
  category: string[];
  menu: string;
  content: string;
  hashtag: string[];
  video: File | null;
  thumbnail: File | null;
  nickname: string;
}

export interface IProps {
  className?: string;
  name: string;
  writeData: IUserData;
  setWriteData: (value: IUserData) => void;
}

function ChipBtn({ name, writeData, setWriteData }: IProps): React.ReactElement {
  return (
    <SChipBtn>
      <ChipName>{name}</ChipName>
      <Button
        onClick={() => {
          setWriteData({ ...writeData, category: writeData.category.filter((category) => category !== name) });
        }}
      >
        <Img src={XBtn}></Img>
      </Button>
    </SChipBtn>
  );
}

export default ChipBtn;
