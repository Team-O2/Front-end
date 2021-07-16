import React from 'react';
import Styled from 'styled-components';

interface IProps {
  generation: number;
  title: string;
  img: string;
}
const indextoName = (index: number) => {
  switch (index) {
    case 1:
      return '1st';
    case 2:
      return `2nd`;
    case 3:
      return `3rd`;
    default:
      return `${index}th`;
  }
};

const RegisterHeader = ({ generation, title, img }: IProps) => {
  return (
    <SHeader>
      <div className="header">
        <img className="header__img" src={img} alt="" />
        <span className="header__text">Learn Myself {indextoName(generation)} 모집</span>
      </div>
    </SHeader>
  );
};

const SHeader = Styled.div`
.header{

    &__img{
        width: 100%;
        height:253px;
        position:relative;

    }
    &__text{
      position: absolute;
      top:50%;
      left:50%;
      color: white;
      z-index: 2;
      text-align: center;
      top:0;
      padding-top:300px;
      transform: translate(-50%, -50%);                                                                   
      font-family: AppleSDGothicNeo;
      font-size: 48px;
    }
    &__fixed{
        position: fixed;
        top: 0px;
        width: 100%;
        background-color: #FFFFFF;

    }


}



`;

export default RegisterHeader;
