import React from 'react';
import { Exp, Image, SSpeakerExpCard } from './style';

export interface IProps {
  exp1: string;
  exp2: string;
  img: string;
}

function SpeakerExpCard({ exp1, exp2, img }: IProps): React.ReactElement {
  return (
    <SSpeakerExpCard>
      <Image src={img} />
      <Exp>
        {exp1} <br />
        {exp2}
      </Exp>
    </SSpeakerExpCard>
  );
}

export default SpeakerExpCard;
