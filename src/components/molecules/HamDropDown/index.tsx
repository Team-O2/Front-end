import { ham_arrowDown as arrowDown, ham_arrowUp as arrowUp } from 'assets/images';
import { Button, Link } from 'components/atoms';
import React, { useState } from 'react';
import Styled from 'styled-components';

interface Iitem {
  name: string;
  link: string;
}

export interface IProps {
  className?: string;
  title: string;
  itemList: Iitem[];
  isEnglish: boolean;
}

function HamDropDown({ title, itemList, isEnglish }: IProps): React.ReactElement {
  const [isOpened, setIsOpened] = useState(false);
  const handleOpenOnClick = (): void => {
    setIsOpened(!isOpened);
  };

  return (
    <SHamDropDown isOpened={isOpened} isEnglish={isEnglish}>
      <Button className="title" onClick={handleOpenOnClick}>
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
                  <Link key={id} to={value.link}>
                    <Button className="detail__btn">{value.name}</Button>
                  </Link>
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
      width : 100px;
      display : flex;
      flex-direction : column;
      max-height : 229px;
      overflow-y: scroll;
      align-items : center;
      ::-webkit-scrollbar {
      width: 0.3rem;
      }
      ::-webkit-scrollbar-track {
        background: none;
      }
      ::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 0.5rem;
        box-sizing: border-box;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #c1c1c1;
      }
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
