import { Img } from 'components/atoms';
import React from 'react';
import { Exp, SSpeakerExpCard } from './style';

export interface IProps {
  exp1: string;
  exp2: string;
  img: string | StaticImageData;
}

function SpeakerExpCard({ exp1, exp2, img }: IProps): React.ReactElement {
  return (
    <SSpeakerExpCard>
      <Img src={img} width={260} height={260} />
      <Exp>
        {exp1} <br />
        {exp2}
      </Exp>
    </SSpeakerExpCard>
  );
}

export default SpeakerExpCard;
