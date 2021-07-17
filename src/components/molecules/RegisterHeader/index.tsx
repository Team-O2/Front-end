import React from 'react';
import Styled from 'styled-components';

interface IProps {
  generation: number;
  title: string;
  img: string;
}
interface ISHeader {
  url?: string;
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
    <SHeader url={img}>
      <div className="header">
        <div className="header__img">
          <div className="header__text">
            {title} {indextoName(generation)} 모집
          </div>
        </div>
      </div>
    </SHeader>
  );
};

const SHeader = Styled.div<ISHeader>`
.header{

    &__img{
        width: 100%;
        height:253px;
        position:relative;
        background: url(${(props) => props.url}) center center / cover;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__text{
      color: white;                                                                   
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
