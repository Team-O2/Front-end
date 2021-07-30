import React from 'react';
import SHeader from './style';

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

export default RegisterHeader;
