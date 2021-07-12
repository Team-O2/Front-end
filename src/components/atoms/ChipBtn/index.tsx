import XBtn from 'assets/images/xBtn.svg';
import Button from 'components/atoms/Button';
import React from 'react';
import Styled from 'styled-components';

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
      <div className="chip__name">{name}</div>
      <Button
        onClick={() => {
          setWriteData({ ...writeData, category: writeData.category.filter((category) => category !== name) });
        }}
      >
        <img className="chip__Xbtn" src={XBtn}></img>
      </Button>
    </SChipBtn>
  );
}

const SChipBtn = Styled.div`
    height: 46px;
    border-radius: 60px;
    border : solid 1px #03b6ce;
    padding : 12px 30px;
    display : flex;
    align-items : center;
    .chip{   
        &__name{
            font-size: 16px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1;
            letter-spacing: -0.5px;
            color : #03b6ce;
            margin-right : 12.3px;
        }
        &__Xbtn{
            width: 9.3px;
            height: 9.3px;
        }
    }
  `;

export default ChipBtn;
