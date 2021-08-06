import React from 'react';
import { IAdminChallenge } from 'types/admin.type';
import { BottomContainer, Exp, Image, Label, RowContainer, SAdminChallengeCard, Title } from './style';

export interface IProps {
  challengeData: IAdminChallenge;
}
const changeDatetoString = (date: string, isIncludeYear: boolean): string => {
  const year = date.substr(0, 4);
  const month = date.substr(5, 2);
  const day = date.substr(8, 2);
  if (isIncludeYear) return `${year}.${month}.${day}`;
  else return `${month}.${day}`;
};

function AdminChallengeCard({ challengeData }: IProps): React.ReactElement {
  return (
    <SAdminChallengeCard>
      <Image src={challengeData.img}></Image>
      <BottomContainer>
        <Title>오투 회고 챌린지 {challengeData.generation}기</Title>
        <RowContainer>
          <Label>오픈일자</Label>
          <Exp>{changeDatetoString(challengeData.createdDT, true)}</Exp>
        </RowContainer>
        <RowContainer>
          <Label>진행기간</Label>
          <Exp>
            {changeDatetoString(challengeData.challengeStartDT, true)} ~{' '}
            {changeDatetoString(challengeData.challengeEndDT, false)}
          </Exp>
        </RowContainer>
        <RowContainer>
          <Label>신청기간</Label>
          <Exp>
            {changeDatetoString(challengeData.registerStartDT, true)} ~{' '}
            {changeDatetoString(challengeData.registerEndDT, false)}
          </Exp>
        </RowContainer>
        <RowContainer>
          <Label>신청인</Label>
          <Exp>{challengeData.applyNum}명</Exp>
        </RowContainer>
        <RowContainer>
          <Label>참여인원수</Label>
          <Exp>{challengeData.participants}명</Exp>
        </RowContainer>
        <RowContainer>
          <Label>총 게시물 개수</Label>
          <Exp>{challengeData.postNum}개</Exp>
        </RowContainer>
      </BottomContainer>
    </SAdminChallengeCard>
  );
}

export default AdminChallengeCard;
