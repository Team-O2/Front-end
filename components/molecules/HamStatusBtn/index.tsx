import React from 'react';
import { StatusBtn } from './style';

export interface IProps {
  status: number;
}

function HamStatusBtn({ status }: IProps): React.ReactElement {
  // status :
  // 진행중인 기수(progressGeneration) => 1
  // 신청중인 기수(registGeneration) => 2
  // 진행중X, 신청중X 기수(종료) => -1
  if (status === 1) return <StatusBtn status={status}>참여하기</StatusBtn>;
  else return <StatusBtn status={status}>신청중</StatusBtn>;
}

export default HamStatusBtn;
