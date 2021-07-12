import checkOff from 'assets/images/checkall_off.svg';
import checkOn from 'assets/images/checkall_on.svg';
import plusIcon from 'assets/images/plusIconGrey.svg';
import Button from 'components/atoms/Button';
import CheckBox from 'components/atoms/CheckBox';
import PhotoUpload from 'components/atoms/fileUpload';
import Label from 'components/atoms/Label';
import AdminChallengeOpenForm from 'components/molecules/AdminChallengeOpenForm';
import { challengeOpen } from 'libs/axios';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';

function AdminChallengeOpen(): React.ReactElement {
  const [image, setImage] = useState<File | null>(null);
  const [check, setCheck] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isConditionMet, setIsConditionMet] = useState({
    title: false,
    challengePeriod: false,
    applyPeriod: false,
    peopleNum: false,
  });
  const [challengeOpenData, setChallengeOpenData] = useState({
    title: '',
    challengePeriod: {
      start: '',
      end: '',
    },
    applyPeriod: {
      start: '',
      end: '',
    },
    peopleNum: 0,
  });
  const checkHandler = () => {
    setCheck(!check);
  };
  useEffect(() => {
    if (
      isConditionMet.title &&
      isConditionMet.challengePeriod &&
      isConditionMet.applyPeriod &&
      isConditionMet.peopleNum &&
      image != null &&
      check
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [isConditionMet, image, check]);
  const btnHandler = () => {
    challengeOpen(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlYjI3Y2ZjZmY1NTkyNmM0M2NlN2ZmIn0sImlhdCI6MTYyNjA4ODY1NiwiZXhwIjoxNjI3Mjk4MjU2fQ.uxM51YrnEf6qZsq9tjPbkvRS587g_8xclrC0zxAN0IU',
      { ...challengeOpenData, img: image },
    );
  };

  return (
    <SAdminChallengeOpen isButtonDisabled={isButtonDisabled}>
      <Label className="admin__label--page">관리자 페이지</Label>
      <Label className="admin__label--title">챌린지 등록</Label>
      <AdminChallengeOpenForm
        setIsConditionMet={setIsConditionMet}
        challengeOpenData={challengeOpenData}
        setChallengeOpenData={setChallengeOpenData}
      />
      <div className="admin__container--uploder">
        <Label className="admin__label--element">사진 업로드</Label>
        <PhotoUpload width={'262px'} height={'216px'} setFile={setImage} fileType={0}>
          <div className="photoUpload__container">
            <img className="photoUpload__icon--plus" src={plusIcon}></img>
            <div className="photoUpload__desc--middle">
              대표이미지
              <br />
              (필수)
            </div>
            <div className="photoUpload__desc--bottom">(1920px X 253px)</div>
          </div>
        </PhotoUpload>
      </div>
      <div className="check__container">
        <CheckBox id="checkBox" className="check__checkbox" checked={check} onChange={checkHandler} />
        <label htmlFor="checkBox" className="check__exp">
          {check ? <img src={checkOn} className="check__icon" /> : <img src={checkOff} className="check__icon" />}위
          내용을 확인하셨습니까?
        </label>
      </div>
      <Button className="admin__button--fin" disabled={isButtonDisabled} onClick={btnHandler}>
        등록하기
      </Button>
    </SAdminChallengeOpen>
  );
}

const SAdminChallengeOpen = Styled.div<{ isButtonDisabled?: boolean }>`
    display : flex;
    flex-direction: column;
    align-items: center;
    .check{
      &__container{
        margin-top : 200px;
        margin-bottom : 40px;
      }
      &__checkbox{
        display : none;
      }
      &__exp{
        font-size: 18px;
        color : #8b8b8b;
        line-height: 1.56;
        letter-spacing: -0.5px;
        display : flex;
        align-items : center;
      }
      &__icon{
        width : 24px;
        height : 24px;
        margin-right : 16px;
      }
    }
    .photoUpload{
        &__container{
            width: 262px;
            height: 216px;
            background-color : #f2f2f2;
            display : flex;
            flex-direction : column;
            align-items : center;
            justify-content : center;
        }
        &__icon--plus{
            width : 38px;
            height : 38px;
        }
        &__desc{
            &--middle{
                font-size: 16px;
                font-weight: bold;
                line-height: 1.38;
                letter-spacing: -0.5px;
                color : #a5a5a5;
                text-align: center;
                margin-top :4px;
                margin-bottom : 20px;
            }
            &--bottom{
                font-size: 14px;
                line-height: 1.29;
                color : #a5a5a5;
            }
        }
    }
    .admin{
        &__label{
            &--page{
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: -0.5px;
                color : #3d3d3d;
                margin-top : 60px;
            }
            &--title{
                font-size: 48px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.42;
                letter-spacing: -0.5px;
                color:#3d3d3d;
                margin-top:10px;
                margin-bottom : 110px;
            }
            &--element{
                font-size: 18px;
                font-weight: bold;
                line-height: 1.33;
                letter-spacing: -0.5px;
                color: #0d0d0d;
                margin-bottom :11px;
            }
        }
        &__button{
            &--fin{
                width: 406px;
                height: 60px;
                border-radius: 4px;
                font-size : 16px;
                font-weight : bold;  
                line-height: 1.38;
                      letter-spacing: -0.5px;   
                color : #ffffff; 
                background-color : ${(props) => (props.isButtonDisabled ? '#dfdfdf' : undefined)};
                background-image : ${(props) =>
                  !props.isButtonDisabled ? 'linear-gradient(to right, #36c8f5,#13e2dd )' : undefined};        
                margin-bottom : 304px;
            }
        }
        &__container{
            &--uploder{
                width : 844px;
                display : flex;
                flex-direction : column;
            }
        }
    }
  `;

export default AdminChallengeOpen;
