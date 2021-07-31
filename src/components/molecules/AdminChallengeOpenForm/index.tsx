import { Input, Label } from 'components/atoms';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';

interface IChallengeOpenData {
  title: string;
  challengePeriod: {
    start: string;
    end: string;
  };
  applyPeriod: {
    start: string;
    end: string;
  };
  peopleNum: number;
}
interface IConditionMet {
  title: boolean;
  challengePeriod: boolean;
  applyPeriod: boolean;
  peopleNum: boolean;
}
export interface IProps {
  setIsConditionMet: (value: IConditionMet) => void;
  challengeOpenData: IChallengeOpenData;
  setChallengeOpenData: (value: IChallengeOpenData) => void;
}

function AdminChallengeOpenForm({
  setIsConditionMet,
  challengeOpenData,
  setChallengeOpenData,
}: IProps): React.ReactElement {
  const dateCheckPattern = /[0-9]{4}.[0-9]{2}.[0-9]{2}$/;
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

  useEffect(() => {
    setIsConditionMet({
      title: isValueExist.title,
      challengePeriod: isValueExist.challengePeriod[0] && isValueExist.challengePeriod[1],
      applyPeriod: isValueExist.applyPeriod[0] && isValueExist.applyPeriod[1],
      peopleNum: isValueExist.peopleNum,
    });
  }, [isValueExist]);

  useEffect(() => {
    if (challengeOpenData.title !== '') {
      setIsValueExist({ ...isValueExist, title: true });
    } else {
      setIsValueExist({ ...isValueExist, title: false });
    }
  }, [challengeOpenData.title]);
  useEffect(() => {
    if (challengeOpenData.peopleNum !== 0) {
      setIsValueExist({ ...isValueExist, peopleNum: true });
    } else {
      setIsValueExist({ ...isValueExist, peopleNum: false });
    }
  }, [challengeOpenData.peopleNum]);

  useEffect(() => {
    if (dateCheckPattern.test(challengeOpenData.challengePeriod.start)) {
      setIsValueExist({ ...isValueExist, challengePeriod: [true, isValueExist.challengePeriod[1]] });
    } else {
      setIsValueExist({ ...isValueExist, challengePeriod: [false, isValueExist.challengePeriod[1]] });
    }
  }, [challengeOpenData.challengePeriod.start]);
  useEffect(() => {
    if (dateCheckPattern.test(challengeOpenData.challengePeriod.end)) {
      setIsValueExist({ ...isValueExist, challengePeriod: [isValueExist.challengePeriod[0], true] });
    } else {
      setIsValueExist({ ...isValueExist, challengePeriod: [isValueExist.challengePeriod[0], false] });
    }
  }, [challengeOpenData.challengePeriod.end]);
  useEffect(() => {
    if (dateCheckPattern.test(challengeOpenData.applyPeriod.start)) {
      setIsValueExist({ ...isValueExist, applyPeriod: [true, isValueExist.applyPeriod[1]] });
    } else {
      setIsValueExist({ ...isValueExist, applyPeriod: [false, isValueExist.applyPeriod[1]] });
    }
  }, [challengeOpenData.applyPeriod.start]);
  useEffect(() => {
    if (dateCheckPattern.test(challengeOpenData.applyPeriod.end)) {
      setIsValueExist({ ...isValueExist, applyPeriod: [isValueExist.applyPeriod[0], true] });
    } else {
      setIsValueExist({ ...isValueExist, applyPeriod: [isValueExist.applyPeriod[0], false] });
    }
  }, [challengeOpenData.applyPeriod.end]);

  return (
    <SAdminChallengeOpenForm isValueExist={isValueExist} isFocused={isFocused}>
      <Label className="admin__label">챌린지 제목</Label>
      <div className="admin__div admin__div--title">
        <Input
          className="admin__input"
          name="adminWriteTitle"
          placeholder="제목을 입력하세요"
          onChange={(e) => {
            setChallengeOpenData({ ...challengeOpenData, title: e.target.value });
          }}
          onFocus={() => {
            setIsFocused({ ...isFocused, title: true });
          }}
          onBlur={() => {
            setIsFocused({ ...isFocused, title: false });
          }}
        />
      </div>

      <Label className="admin__label">챌린지 기간</Label>
      <div className="admin__container--period">
        <div className="admin__div admin__div--period1-1">
          <Input
            className="admin__input"
            name="adminWriteTitle"
            placeholder="년도.월.일. ex) 2021.07.04"
            onChange={(e) => {
              setChallengeOpenData({
                ...challengeOpenData,
                challengePeriod: { ...challengeOpenData.challengePeriod, start: e.target.value },
              });
            }}
            onFocus={() => {
              setIsFocused({ ...isFocused, challengePeriod: [true, false] });
            }}
            onBlur={() => {
              setIsFocused({ ...isFocused, challengePeriod: [false, false] });
            }}
          />
        </div>
        <div className="admin__text">~</div>
        <div className="admin__div admin__div--period1-2">
          <Input
            className="admin__input"
            name="adminWriteTitle"
            placeholder="년도.월.일. ex) 2021.07.04"
            onChange={(e) => {
              setChallengeOpenData({
                ...challengeOpenData,
                challengePeriod: { ...challengeOpenData.challengePeriod, end: e.target.value },
              });
            }}
            onFocus={() => {
              setIsFocused({ ...isFocused, challengePeriod: [false, true] });
            }}
            onBlur={() => {
              setIsFocused({ ...isFocused, challengePeriod: [false, false] });
            }}
          />
        </div>
      </div>

      <Label className="admin__label">챌린지 신청 기간</Label>
      <div className="admin__container--period">
        <div className="admin__div admin__div--period2-1">
          <Input
            className="admin__input"
            name="adminWriteTitle"
            placeholder="년도.월.일. ex) 2021.07.04"
            onChange={(e) => {
              setChallengeOpenData({
                ...challengeOpenData,
                applyPeriod: { ...challengeOpenData.applyPeriod, start: e.target.value },
              });
            }}
            onFocus={() => {
              setIsFocused({ ...isFocused, applyPeriod: [true, false] });
            }}
            onBlur={() => {
              setIsFocused({ ...isFocused, applyPeriod: [false, false] });
            }}
          />
        </div>
        <div className="admin__text">~</div>
        <div className="admin__div admin__div--period2-2">
          <Input
            className="admin__input"
            name="adminWriteTitle"
            placeholder="년도.월.일. ex) 2021.07.04"
            onChange={(e) => {
              setChallengeOpenData({
                ...challengeOpenData,
                applyPeriod: { ...challengeOpenData.applyPeriod, end: e.target.value },
              });
            }}
            onFocus={() => {
              setIsFocused({ ...isFocused, applyPeriod: [false, true] });
            }}
            onBlur={() => {
              setIsFocused({ ...isFocused, applyPeriod: [false, false] });
            }}
          />
        </div>
      </div>
      <Label className="admin__label">제한 인원 수</Label>
      <div className="admin__container--people">
        <div className="admin__div admin__div--people">
          <Input
            className="admin__input"
            name="adminWriteTitle"
            placeholder="제한 인원 수를 입력하세요"
            value={challengeOpenData.peopleNum === 0 ? '' : challengeOpenData.peopleNum}
            onChange={(e) => {
              if (!isNaN(Number(e.target.value))) {
                setChallengeOpenData({ ...challengeOpenData, peopleNum: Number(e.target.value) });
              }
            }}
            onFocus={() => {
              setIsFocused({ ...isFocused, peopleNum: true });
            }}
            onBlur={() => {
              setIsFocused({ ...isFocused, peopleNum: false });
            }}
          />
        </div>
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
