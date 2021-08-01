import { Label, StyledInput } from 'components/atoms';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { IChallengeOpen, IConditionMet } from 'types/challenge.type';

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
  const [isValueExist, setIsValueExist] = useState({
    // 값이 들어있는지 유무
    title: false,
    challengePeriod: [false, false],
    applyPeriod: [false, false],
    peopleNum: false,
  });
  const [isFocused, setIsFocused] = useState({
    // 인풋에 포커스가 되어있는지 유무
    title: false,
    challengePeriod: [false, false],
    applyPeriod: [false, false],
    peopleNum: false,
  });

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
    <SAdminChallengeOpenForm isValueExist={isValueExist} isFocused={isFocused}>
      <Label className="admin__label">챌린지 제목</Label>
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
      <Label className="admin__label">챌린지 기간</Label>
      <div className="admin__container--period">
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
        <div className="admin__text">~</div>
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
      </div>
      <Label className="admin__label">챌린지 신청 기간</Label>
      <div className="admin__container--period">
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
        <div className="admin__text">~</div>
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
      </div>
      <Label className="admin__label">제한 인원 수</Label>
      <div className="admin__container--people">
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
        <div className="admin__text">명</div>
      </div>
    </SAdminChallengeOpenForm>
  );
}

const SAdminChallengeOpenForm = Styled.div<{
  isValueExist: {
    title: boolean;
    challengePeriod: boolean[];
    applyPeriod: boolean[];
    peopleNum: boolean;
  };
  isFocused: {
    title: boolean;
    challengePeriod: boolean[];
    applyPeriod: boolean[];
    peopleNum: boolean;
  };
}>`
  display : flex;
  flex-direction : column;
  align-items : center;
  width : 844px;
  input{
    border : none;
    :focus{
        outline : none;
      }
  }
  .admin{
    &__label{
      width : 100%;
      font-size: 18px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: -0.5px;
      color: #0d0d0d;
      margin-bottom : 8px;
    }
    &__div{
      width : 100%;
      height : 60px;
      border-radius: 4px;
      border: solid 1px #c1c1c1;
      margin-bottom : 40px;
      &--title{
        border : ${(props) =>
          props.isValueExist.title || props.isFocused.title ? 'double 1px transparent' : '1px solid #c1c1c1'};
        background-image : ${(props) =>
          props.isValueExist.title || props.isFocused.title
            ? 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)'
            : undefined};
        background-origin : ${(props) =>
          props.isValueExist.title || props.isFocused.title ? 'border-box' : undefined};
        background-clip : ${(props) =>
          props.isValueExist.title || props.isFocused.title ? 'content-box, border-box' : undefined};    
      }

      &--period1-1{
        width : 390px;
        border : ${(props) =>
          props.isValueExist.challengePeriod[0] || props.isFocused.challengePeriod[0]
            ? 'double 1px transparent'
            : '1px solid #c1c1c1'};
        background-image : ${(props) =>
          props.isValueExist.challengePeriod[0] || props.isFocused.challengePeriod[0]
            ? 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)'
            : undefined};
        background-origin : ${(props) =>
          props.isValueExist.challengePeriod[0] || props.isFocused.challengePeriod[0] ? 'border-box' : undefined};
        background-clip : ${(props) =>
          props.isValueExist.challengePeriod[0] || props.isFocused.challengePeriod[0]
            ? 'content-box, border-box'
            : undefined};    
      }
      &--period1-2{
        width : 390px;
        border : ${(props) =>
          props.isValueExist.challengePeriod[1] || props.isFocused.challengePeriod[1]
            ? 'double 1px transparent'
            : '1px solid #c1c1c1'};
        background-image : ${(props) =>
          props.isValueExist.challengePeriod[1] || props.isFocused.challengePeriod[1]
            ? 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)'
            : undefined};
        background-origin : ${(props) =>
          props.isValueExist.challengePeriod[1] || props.isFocused.challengePeriod[1] ? 'border-box' : undefined};
        background-clip : ${(props) =>
          props.isValueExist.challengePeriod[1] || props.isFocused.challengePeriod[1]
            ? 'content-box, border-box'
            : undefined};  
      }
      &--period2-1{
        width : 390px;
        border : ${(props) =>
          props.isValueExist.applyPeriod[0] || props.isFocused.applyPeriod[0]
            ? 'double 1px transparent'
            : '1px solid #c1c1c1'};
        background-image : ${(props) =>
          props.isValueExist.applyPeriod[0] || props.isFocused.applyPeriod[0]
            ? 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)'
            : undefined};
        background-origin : ${(props) =>
          props.isValueExist.applyPeriod[0] || props.isFocused.applyPeriod[0] ? 'border-box' : undefined};
        background-clip : ${(props) =>
          props.isValueExist.applyPeriod[0] || props.isFocused.applyPeriod[0]
            ? 'content-box, border-box'
            : undefined};  
      }
      &--period2-2{
        width : 390px;
        border : ${(props) =>
          props.isValueExist.applyPeriod[1] || props.isFocused.applyPeriod[1]
            ? 'double 1px transparent'
            : '1px solid #c1c1c1'};
        background-image : ${(props) =>
          props.isValueExist.applyPeriod[1] || props.isFocused.applyPeriod[1]
            ? 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)'
            : undefined};
        background-origin : ${(props) =>
          props.isValueExist.applyPeriod[1] || props.isFocused.applyPeriod[1] ? 'border-box' : undefined};
        background-clip : ${(props) =>
          props.isValueExist.applyPeriod[1] || props.isFocused.applyPeriod[1]
            ? 'content-box, border-box'
            : undefined};  
      }
      &--people{
        width : 390px;
        margin-right: 26px;
        border : ${(props) =>
          props.isValueExist.peopleNum || props.isFocused.peopleNum ? 'double 1px transparent' : '1px solid #c1c1c1'};
        background-image : ${(props) =>
          props.isValueExist.peopleNum || props.isFocused.peopleNum
            ? 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)'
            : undefined};
        background-origin : ${(props) =>
          props.isValueExist.peopleNum || props.isFocused.peopleNum ? 'border-box' : undefined};
        background-clip : ${(props) =>
          props.isValueExist.peopleNum || props.isFocused.peopleNum ? 'content-box, border-box' : undefined};    
      
      }
    }
    &__input{
      width : 100%;
      height : 100%;
      border-radius:4px;
      padding : 18px 20px;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: -0.5px;
    }

    &__container{
        &--period{
            width : 100%;
            display : flex;
            justify-content : space-between;
            align-items : flex-start;
        }
        &--people{
            width : 100%;
            display : flex;
            align-items : center;
            align-items : flex-start;
        }
    }
    &__text{
        font-size: 18px;
        font-weight: bold;
        letter-spacing: -0.5px;
        line-height : 60px;
        text-align: center;
        color : #8b8b8b;
    }
  }
`;

export default AdminChallengeOpenForm;
