import arrowDown from 'assets/images/ham_arrowDown.svg';
import arrowUp from 'assets/images/ham_arrowUp.svg';
import React, { useState } from 'react';
import Styled from 'styled-components';
import Button from '../../atoms/Button/index';

export interface IProps {
  className?: string;
  title: string;
  itemList: string[];
  isEnglish: boolean;
}

function HamDropDown({ title, itemList, isEnglish }: IProps): React.ReactElement {
  const [isOpened, setIsOpened] = useState(false);
  const learnOpenClickListener = (): void => {
    setIsOpened(!isOpened);
  };

  return (
    <SHamDropDown isOpened={isOpened} isEnglish={isEnglish}>
      <Button className="title" onClick={learnOpenClickListener}>
        <>
          <div className="title__label ">{title}</div>
          <img className="title__icon" src={isOpened ? arrowUp : arrowDown} />
        </>
      </Button>
      {isOpened && (
        <div className="detail">
          <div className="detail__container">
            <div className="detail__btnContainer">
              {itemList.map((value, id) => {
                return (
                  <Button key={id} className="detail__btn" value={value}>
                    {value}
                  </Button>
                );
              })}
              <Button className="detail__btn--fake">_</Button>
            </div>
            <div className="detail__hide"></div>
          </div>
        </div>
      )}
    </SHamDropDown>
  );
}

const SHamDropDown = Styled.div<{ isOpened?: boolean; isEnglish: boolean }>`
  display : flex;
  flex-direction: column;
  align-items : center;
  justify-content : center; 
  .title{
    display : flex;
    align-items : center;
    justify-content : center;
    color : #3d3d3d;
      &__label{
        font-size: 16px;
        line-height: 1.25;
        letter-spacing: normal;
        text-align: left;
        font-family : ${(props) => (props.isEnglish ? 'HomepageBaukasten' : 'AppleSDGothicNeo')};
        fontWeight : ${(props) => (props.isOpened ? 'bold' : 'normal')};
        :hover{
          font-weight: bold;
        }
      }
      &__icon{
        width: 20px;
        height: 20px;
        margin: 0 0 0 1px;
        object-fit: contain;
      }
  }
  .detail{
    width : 100%;
    display : flex;
    justify-content:center;
    &__container{
      width : 98px;
      display : flex;
      flex-direction : column;
      align-items : center;
      position : relative;
      margin-top : 20px;
    }
    &__btnContainer{
      width : 98px;
      display : flex;
      flex-direction : column;
      max-height : 229px;
      overflow: scroll;
      align-items : center;
    }
    &__btn{
      height: 18px;
      font-size: 14px;
      line-height: 1.29;
      margin: 5px 0;
      color : #8b8b8b;
      white-space: nowrap;
      &--fake{
        color : rgba(0,0,0,0);
        line-height : 30px;
      }
      :hover{
        font-weight: bold;
      }
    }
    &__hide{
      width : 100%;
      height : 36px;
      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
      position : absolute;
      bottom : 0px;
    }
  }
`;

export default HamDropDown;
