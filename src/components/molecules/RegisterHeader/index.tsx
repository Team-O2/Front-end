import React from 'react';
import Styled from 'styled-components';
import registerHeaderImg from '../../../assets/images/registerHeaderImg.png';

const RegisterHeader = () => {
  return (
    <SHeader>
      <div className="header">
        <img className="header__img" src={registerHeaderImg} alt="" />
        <span className="header__text">Learn Myself 3rd 모집</span>
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
      padding-top:150px;
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
