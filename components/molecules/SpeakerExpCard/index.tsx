import { Img } from 'components/atoms';
import React from 'react';
import { Exp, SSpeakerExpCard, ImgWrapper } from './style';

export interface IProps {
  exp1: string;
  exp2: string;
  width: number;
  height: number;
  img: string | StaticImageData;
}

function SpeakerExpCard({ exp1, exp2, img, width, height }: IProps): React.ReactElement {
  return (
    <SSpeakerExpCard>
      <ImgWrapper>
        <Img src={img} width={width} height={height} />
      </ImgWrapper>
      <Exp>
        {exp1} <br />
        {exp2}
      </Exp>
    </SSpeakerExpCard>
  );
}

export default SpeakerExpCard;
