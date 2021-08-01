import { StyledInput } from 'components/atoms';
import React, { useEffect } from 'react';
import { IChallengeOpen, IConditionMet } from 'types/challenge.type';
import { PeopleContainer, PeriodContainer, Text, Wrapper, WriteLabel } from './style';

export interface IProps {
  isConditionMet: IConditionMet;
  setIsConditionMet: (value: IConditionMet) => void;
  challengeOpenData: IChallengeOpen;
  setChallengeOpenData: (value: IChallengeOpen) => void;
}

function AdminChallengeOpenForm({
  isConditionMet,
  setIsConditionMet,
  challengeOpenData,
  setChallengeOpenData,
}: IProps): React.ReactElement {
  const CheckDatePattern = (date: string) => /[0-9]{4}.[0-9]{2}.[0-9]{2}$/.test(date);

  useEffect(() => {
    if (challengeOpenData.title !== '') {
      setIsConditionMet({ ...isConditionMet, title: true });
    } else {
      setIsConditionMet({ ...isConditionMet, title: false });
    }
  }, [challengeOpenData.title]);
  useEffect(() => {
    if (challengeOpenData.peopleNum !== 0) {
      setIsConditionMet({ ...isConditionMet, peopleNum: true });
    } else {
      setIsConditionMet({ ...isConditionMet, peopleNum: false });
    }
  }, [challengeOpenData.peopleNum]);

  useEffect(() => {
    if (CheckDatePattern(challengeOpenData.challengePeriod.start)) {
      setIsConditionMet({ ...isConditionMet, challengePeriod: { ...isConditionMet.challengePeriod, start: true } });
    } else {
      setIsConditionMet({ ...isConditionMet, challengePeriod: { ...isConditionMet.challengePeriod, start: false } });
    }
  }, [challengeOpenData.challengePeriod.start]);
  useEffect(() => {
    if (CheckDatePattern(challengeOpenData.challengePeriod.end)) {
      setIsConditionMet({ ...isConditionMet, challengePeriod: { ...isConditionMet.challengePeriod, end: true } });
    } else {
      setIsConditionMet({ ...isConditionMet, challengePeriod: { ...isConditionMet.challengePeriod, end: false } });
    }
  }, [challengeOpenData.challengePeriod.end]);
  useEffect(() => {
    if (CheckDatePattern(challengeOpenData.applyPeriod.start)) {
      setIsConditionMet({ ...isConditionMet, applyPeriod: { ...isConditionMet.applyPeriod, start: true } });
    } else {
      setIsConditionMet({ ...isConditionMet, applyPeriod: { ...isConditionMet.applyPeriod, start: false } });
    }
  }, [challengeOpenData.applyPeriod.start]);
  useEffect(() => {
    if (CheckDatePattern(challengeOpenData.applyPeriod.end)) {
      setIsConditionMet({ ...isConditionMet, applyPeriod: { ...isConditionMet.applyPeriod, end: true } });
    } else {
      setIsConditionMet({ ...isConditionMet, applyPeriod: { ...isConditionMet.applyPeriod, end: false } });
    }
  }, [challengeOpenData.applyPeriod.end]);

  return (
    <Wrapper>
      <WriteLabel className="subhead4">챌린지 제목</WriteLabel>
      <StyledInput
        placeHolder="제목을 입력하세요"
        width="844px"
        height="60px"
        onChange={(value) => {
          if (typeof value === 'string') setChallengeOpenData({ ...challengeOpenData, title: value });
        }}
        isConditionMet={isConditionMet.title}
        margin="0 0 40px 0"
      />
      <WriteLabel className="subhead4">챌린지 기간</WriteLabel>
      <PeriodContainer>
        <StyledInput
          placeHolder="년도.월.일. ex) 2021.07.04"
          width="390px"
          height="60px"
          onChange={(value) => {
            if (typeof value === 'string')
              setChallengeOpenData({
                ...challengeOpenData,
                challengePeriod: { ...challengeOpenData.challengePeriod, start: value },
              });
          }}
          isConditionMet={isConditionMet.challengePeriod.start}
          margin="0 0 40px 0"
        />
        <Text className="h1_eng">~</Text>
        <StyledInput
          placeHolder="년도.월.일. ex) 2021.07.04"
          width="390px"
          height="60px"
          onChange={(value) => {
            if (typeof value === 'string')
              setChallengeOpenData({
                ...challengeOpenData,
                challengePeriod: { ...challengeOpenData.challengePeriod, end: value },
              });
          }}
          isConditionMet={isConditionMet.challengePeriod.end}
          margin="0 0 40px 0"
        />
      </PeriodContainer>
      <WriteLabel className="subhead4">챌린지 신청 기간</WriteLabel>
      <PeriodContainer>
        <StyledInput
          placeHolder="년도.월.일. ex) 2021.07.04"
          width="390px"
          height="60px"
          onChange={(value) => {
            if (typeof value === 'string')
              setChallengeOpenData({
                ...challengeOpenData,
                applyPeriod: { ...challengeOpenData.applyPeriod, start: value },
              });
          }}
          isConditionMet={isConditionMet.applyPeriod.start}
          margin="0 0 40px 0"
        />
        <Text className="h1_eng">~</Text>
        <StyledInput
          placeHolder="년도.월.일. ex) 2021.07.04"
          width="390px"
          height="60px"
          onChange={(value) => {
            if (typeof value === 'string')
              setChallengeOpenData({
                ...challengeOpenData,
                applyPeriod: { ...challengeOpenData.applyPeriod, end: value },
              });
          }}
          isConditionMet={isConditionMet.applyPeriod.end}
          margin="0 0 40px 0"
        />
      </PeriodContainer>
      <WriteLabel className="subhead4">제한 인원 수</WriteLabel>
      <PeopleContainer>
        <StyledInput
          placeHolder="제한 인원 수를 입력하세요"
          width="390px"
          height="60px"
          onChange={(value) => {
            if (typeof value === 'string')
              if (!isNaN(Number(value))) {
                setChallengeOpenData({ ...challengeOpenData, peopleNum: Number(value) });
              }
          }}
          isConditionMet={isConditionMet.peopleNum}
          margin="0 26px 40px 0"
        />
        <Text className="subhead4">명</Text>
      </PeopleContainer>
    </Wrapper>
  );
}

export default AdminChallengeOpenForm;
