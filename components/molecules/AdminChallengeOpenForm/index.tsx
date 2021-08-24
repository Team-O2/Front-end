import { StyledInput } from 'components/atoms';
import React from 'react';
import { IConditionMet } from 'types/challenge.type';
import { PeopleContainer, PeriodContainer, Text, Wrapper, WriteLabel } from './style';

export interface IProps {
  isConditionMet: IConditionMet;
  handleTitleOnChange: (value: string) => void;
  handleChallengeStOnChange: (value: string) => void;
  handleChallengeEndOnChange: (value: string) => void;
  handleApplyStOnChange: (value: string) => void;
  handleApplyEndOnChange: (value: string) => void;
  handleNumOnChange: (value: string) => void;
}

function AdminChallengeOpenForm({
  isConditionMet,
  handleTitleOnChange,
  handleChallengeStOnChange,
  handleChallengeEndOnChange,
  handleApplyStOnChange,
  handleApplyEndOnChange,
  handleNumOnChange,
}: IProps): React.ReactElement {
  return (
    <Wrapper>
      <WriteLabel>챌린지 제목</WriteLabel>
      <StyledInput
        placeHolder="제목을 입력하세요"
        width="844px"
        height="60px"
        onChange={handleTitleOnChange}
        isConditionMet={isConditionMet.title}
        margin="0 0 40px 0"
      />
      <WriteLabel>챌린지 기간</WriteLabel>
      <PeriodContainer>
        <StyledInput
          placeHolder="년도.월.일. ex) 2021.07.04"
          width="390px"
          height="60px"
          onChange={handleChallengeStOnChange}
          isConditionMet={isConditionMet.challengePeriod.start}
          margin="0 0 40px 0"
        />
        <Text font="h1_eng">~</Text>
        <StyledInput
          placeHolder="년도.월.일. ex) 2021.07.04"
          width="390px"
          height="60px"
          onChange={handleChallengeEndOnChange}
          isConditionMet={isConditionMet.challengePeriod.end}
          margin="0 0 40px 0"
        />
      </PeriodContainer>
      <WriteLabel>챌린지 신청 기간</WriteLabel>
      <PeriodContainer>
        <StyledInput
          placeHolder="년도.월.일. ex) 2021.07.04"
          width="390px"
          height="60px"
          onChange={handleApplyStOnChange}
          isConditionMet={isConditionMet.applyPeriod.start}
          margin="0 0 40px 0"
        />
        <Text font="h1_eng">~</Text>
        <StyledInput
          placeHolder="년도.월.일. ex) 2021.07.04"
          width="390px"
          height="60px"
          onChange={handleApplyEndOnChange}
          isConditionMet={isConditionMet.applyPeriod.end}
          margin="0 0 40px 0"
        />
      </PeriodContainer>
      <WriteLabel>제한 인원 수</WriteLabel>
      <PeopleContainer>
        <StyledInput
          placeHolder="제한 인원 수를 입력하세요"
          width="390px"
          height="60px"
          onChange={handleNumOnChange}
          isConditionMet={isConditionMet.peopleNum}
          margin="0 26px 40px 0"
        />
        <Text font="subhead4">명</Text>
      </PeopleContainer>
    </Wrapper>
  );
}

export default AdminChallengeOpenForm;
