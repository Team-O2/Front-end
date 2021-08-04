import React from 'react';
import { Container, GenerationText } from './style';

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
    <Container url={img}>
      <GenerationText>
        {title} {indextoName(generation)} 모집
      </GenerationText>
    </Container>
  );
};

export default RegisterHeader;
