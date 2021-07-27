import { getRegistPeriod } from 'apis';
import { SignRegister } from 'libs/getChallenge';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import Styled from 'styled-components';
import alertIcon from '../../../assets/images/alertIcon.svg';
import CautionIcon from '../../../assets/images/cautionIcon.png';
import ChallengeImg from '../../../assets/images/challengeregister_img.png';
import CheckIcon from '../../../assets/images/checkWhite.svg';
import CheckCircleIcon from '../../../assets/images/check_circleIcon.png';
import MinusIcon from '../../../assets/images/minusIcon.svg';
import PlusIcon from '../../../assets/images/plusIcon.svg';
import Modal from '../../atoms/Modal/index';
import RegisterHeader from '../RegisterHeader';
interface IPeriodData {
  title: string;
  generation: number;
  registerEndDT: string;
  registerStartDT: string;
  challengeEndDT: string;
  challengeStartDT: string;
  img: string;
}

const ChallengeRegister = (): React.ReactElement => {
  const [userData, setUserData] = useRecoilState(userState);
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);
  const [registerCount, setRegisterCount] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isSubmitModal, setIsSubmitModal] = useState(false);
  const [registerSubmit, setRegisterSubmit] = useState(false);
  const [periodData, setPeriodData] = useState<IPeriodData | null>(null);
  function minusCount() {
    if (registerCount > 0) {
      setRegisterCount(registerCount - 1);
    }
  }
  const handleSubmit = async () => {
    const signData = {
      challengeCNT: registerCount,
    };
    if (userStatusData) {
      const getData = await SignRegister(signData, userStatusData.token);
      if (getData) {
        setRegisterSubmit(true);
        setIsOpenModal(false);
      } else {
        setIsOpenModal(false);
      }
    }
  };

  const datetoString = (date: string): string => {
    let month = date.substr(5, 2);
    if (month.substr(0, 1) === '0') month = month.substr(1, 1);
    let day = date.substr(8, 2);
    if (day.substr(0, 1) === '0') day = day.substr(1, 1);
    return `${month}월 ${day}일`;
  };

  const getRestDay = (dateString: string): number => {
    const date = new Date(
      parseInt(dateString.substr(0, 4)),
      parseInt(dateString.substr(5, 2)) - 1,
      parseInt(dateString.substr(8, 2)),
    );
    const today = new Date();
    const rest = Math.ceil((date.getTime() - today.getTime()) / (1000 * 3600 * 24));
    return rest;
  };
  const getChallengePeriod = async () => {
    const data = await getRegistPeriod();
    data && setPeriodData(data);
  };
  useEffect(() => {
    getChallengePeriod();
  }, []);

  return periodData ? (
    <SRegister>
      <RegisterHeader title={periodData.title} generation={periodData.generation} img={periodData.img} />
      <div className="container">
        <div className="header__fixed">
          <p className="header__title">챌린지 설명</p>
          <span className="header__line"></span>
        </div>
        <div className="img">
          <img className="register__img" src={ChallengeImg} alt="" />
        </div>
        <div className="card">
          <div className="register">
            <div className="register__date">신청기간</div>
            <div className="register__remain">{getRestDay(periodData.registerEndDT)}일 남음</div>
            <div className="challenge">챌린지 기간</div>
            <div className="challenge__detail">
              {datetoString(periodData.challengeStartDT)} ~ {datetoString(periodData.challengeEndDT)}
            </div>
            <div
              className="challenge_setting_container"
              style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <div className="challenge__setting">
                <div className="challenge__count-set">챌린지 개수 설정</div>
                <p className="challenge__notice">2개 이상부터 뱃지 획득 가능</p>
              </div>
              <div className="challenge__box">
                <div
                  className="challenge__minus-plus"
                  onClick={() => {
                    minusCount();
                  }}
                >
                  <img src={MinusIcon} />
                </div>
                {registerCount}
                <div
                  className="challenge__minus-plus"
                  onClick={() => {
                    setRegisterCount(registerCount + 1);
                  }}
                >
                  <img src={PlusIcon} />
                </div>
              </div>
            </div>
            <div className="button">
              <button
                className="button__register"
                onClick={() => {
                  setIsOpenModal(true);
                }}
              >
                신청하기
              </button>
              <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} isBlur={true}>
                <div className="modal__main">
                  <div className="modal__main-card">
                    <h3 className="modal__notice">잠깐! 확인하고 신청 완료하세요</h3>
                    <p className="modal__notice-detail">아래 정보를 확인해주세요</p>
                    <div className="modal__detail">
                      <div>
                        <div className="modal__title">챌린지 기간</div>
                        <div className="modal__content">
                          {datetoString(periodData.challengeStartDT)}~{datetoString(periodData.challengeEndDT)}
                        </div>
                      </div>
                      <div>
                        <div className="modal__title">신청자</div>
                        <div className="modal__content">{userData?.nickname}님</div>
                      </div>
                      <div>
                        <div className="modal__title">챌린지 개수</div>
                        <div className="modal__content">{registerCount}개</div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '50px',
                      }}
                    >
                      <img className="modal__icon" src={CautionIcon} alt=""></img>
                      <div className="modal__caution">주의사항</div>
                    </div>
                    <div className="modal__caution-detail">
                      챌린지 개수 2개를 선택하시면 최종 달성률 80%를 넘더라도 배지를 받을 수 없어요!
                    </div>
                  </div>
                  <button className="modal__button" onClick={handleSubmit}>
                    <img className="modal__img" src={CheckIcon} alt=""></img>
                    <div className="modal__register-button">주의 사항을 확인했으며 챌린지 신청을 완료합니다.</div>
                  </button>
                </div>
              </Modal>
              {registerSubmit === true ? (
                <Modal isOpen={registerSubmit} setIsOpen={setRegisterSubmit} isBlur={true}>
                  <div className="submit">
                    <img className="submit__icon" src={CheckCircleIcon} alt=""></img>
                    <div className="submit__title">신청완료!</div>
                    <div className="submit__detail">{userData?.nickname}님 챌린지가 정상적으로</div>
                    <div className="submit__detail"> 신청되었습니다.</div>
                  </div>
                </Modal>
              ) : null}
            </div>
          </div>

          <div className="card__notice">
            <div className="o2__notice">
              오투 챌린지 주의사항
              <img className="notice__img" src={alertIcon}></img>
            </div>
            <div className="notice__num">01</div>
            <div className="notice__detail">
              주당 회고록 개수 3개 이상 선택 및 80% 이상 달성 시 뱃지 획득이 가능합니다.
            </div>
            <div className="notice__num">02</div>
            <div className="notice__detail">
              본 챌린지 의도와는 다른 광고성 글과 카테고리와 무관한 내용은 무통보 삭제 될 수 있습니다.
            </div>
          </div>
        </div>
      </div>
    </SRegister>
  ) : (
    <div> 챌린지 신청기간이 아닙니다</div>
  );
};

const SRegister = Styled.div`
.header{
  &__title{
      padding-top:25px;
      height: 70px;
      text-align: center;
      line-height: 1.56;
      letter-spacing: -0.5px;
      color: var(--colors-grayscale-0-d-black);
      font-family: AppleSDGothicNeo;
      font-size: 18px;
  }
  &__line{
      display: inline-block;
      opacity: 0.4;
      background-color: #c4c4c4;
      width: 100%;
      height: 2px;
  }
  &__fixed{
      position: sticky;
      top: 60px;
      background-color: #FFFFFF;
      width: 100%;
  }


}

  .container{
    margin: 0 auto;
    text-align: center;

  }
    .register{
        margin-bottom:30px;
        border-radius: 10px;
        box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
        background-color: var(--colors-grayscale-ff);
        padding: 50px 30px;
        width: 354px;
        height: 487px;
        &__img{
            display:inline-block;
            padding-top:60px;
            width: 677px;
            height: 1414px;
        }
        &__date{
          margin: 0 243px 4px 0;
          width: 51px;
          height: 21px;
          text-align: center;
          line-height: 1.5;
          letter-spacing: -0.5px;
          color: var(--colors-grayscale-3-d-dark-gray);
          font-family: AppleSDGothicNeo;
          font-size: 14px;
        }
        &__remain{
            margin: 4px 0 0;
            width: 294px;
            height: 44px;
            text-align: left;
            line-height: 1.22;
            letter-spacing: -0.5px;
            color: var(--colors-grayscale-3-d-dark-gray);
            font-family: AppleSDGothicNeo;
            font-size: 36px;
            font-weight: bold;
        }
    }
    .img{
      display:inline-block;
      padding-right:20px;

    }
    .challenge{
        margin-top:40px;
        width: 62px;
        height: 21px;
        line-height: 1.5;
        letter-spacing: -0.5px;
        color: var(--colors-grayscale-3-d-dark-gray);
        font-family: AppleSDGothicNeo;
        font-size: 14px;
        
        &__minus-plus{
          border:none;
          background-color: #FFFFFF;
          cursor: pointer;
        }
        &__setting{
          display:inline-block;
        }
        &__mainbox{
          display:inline-block;
          padding-top:30px;
          padding-left:25px;
        }
        &__box{
          box-sizing: border-box;
          display:inline-block;
          display: flex;
          float:right;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-top: 60px;
          border: solid 1px #dfdfdf;
          border-radius: 4px;
          border-radius: 4px;
          padding: 0 16px;
          width: 119px;
          height: 36px;
          font-family: HomepageBaukasten;
          font-size: 16px;
          font-weight: bold;
        }
        &__detail{
            margin: 4px 0 0;
            width: 294px;
            height: 44px;
            text-align: left;
            line-height: 1.22;
            letter-spacing: -0.5px;
            color: var(--colors-grayscale-3-d-dark-gray);
            font-family: AppleSDGothicNeo;
            font-size: 36px;
            font-weight: bold;
        }
        &__count-set{
            margin: 0 37px 0 0;
            margin-top:60px;
            width: 89px;
            height: 21px;
            text-align: center;
            line-height: 1.5;
            letter-spacing: -0.5px;
            color: var(--colors-grayscale-3-d-dark-gray);
            font-family: AppleSDGothicNeo;
            font-size: 14px;
        }
        &__notice{
            width: 126px;
            height: 18px;
            line-height: 1.5;
            letter-spacing: -0.5px;
            color: #c1c1c1;
            font-family: AppleSDGothicNeo;
            font-size: 12px;
        }
    }
    .card{
      display:inline-block;
      padding:60px 0px 0px 20px;
      vertical-align: top;
      
    }

    .button{
      margin-top:50px;

        &__register{
          border:none;
          border-radius: 4px;
          background: linear-gradient(91.91deg, #36C8F5 7.34%, #13E2DD 90.35%);
          width:294px;
          height:60px;
          line-height: 22px;
          letter-spacing: -0.5px;
          color: #FFFFFF;
          font-family: Apple SD Gothic Neo;
          font-size: 16px;
          font-weight: bold;
      
        }
    }
    .card__notice{
        border-radius: 10px;
        box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
        background-color: var(--colors-grayscale-ff);
        padding: 30px 30px 30px 28px;
        width: 354px;
        height: 282px;
    }
    .o2__notice{
      text-align: left;
      line-height: 28px;
      letter-spacing: -0.5px;
      color: #3D3D3D;
      font-size: 18px;
    }
    .notice{
      &__img{
        float:right;
      }
      &__num{
        margin-top:20px;
        text-align: left;
        line-height: 20px;
        color: #A5A5A5;
        font-size: 16px;
        font-weight: bold;
      }
      &__detail{
        text-align: left;
        line-height: 24px;
        letter-spacing: -0.5px;
        color: #8B8B8B;
        font-size: 16px;
      }
    }

    .modal{

      &__main{
      position: fixed;
      top:0;
      right:0;
      bottom:0;
      left:0;
      margin:auto;
      border-radius: 16px;
      background-color: #FFFFFF;
      width: 500px;
      height: 613px;

      &-card{
        padding: 80px 80px 80px;
      }
    }


    &__notice{
      line-height: 1.36;
      letter-spacing: -0.5px;
      color: var(--colors-grayscale-3-d-dark-gray);
      font-family: AppleSDGothicNeo;
      font-size: 28px;
      font-weight: bold;


      &-detail{
        padding-top:10px;
        padding-bottom:30px;
        line-height: 1.5;
        letter-spacing: -0.5px;
        color: var(--colors-grayscale-8-b-gray);
        font-family: AppleSDGothicNeo;
        font-size: 16px;

      }

    }

    .modal__button{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border:none;
      border-radius: 0px 0px 16px 16px;
      background: linear-gradient(91.91deg, #36C8F5 7.34%, #13E2DD 90.35%);
      width:500px;
      height:64px;
    }
    .modal__img{
      display:inline-block;
      margin-right: 10px;
    }
    .modal__register-button{
        display:inline-block;
        border:none;
        border-radius: 0px 0px 16px 16px;
        background: linear-gradient(91.91deg, #36C8F5 7.34%, #13E2DD 90.35%);
        line-height: 1.38;
        letter-spacing: -0.5px;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: bold;

    }

    &__detail{
      border-radius: 30px;
      background-color: #f9f9f9;
      padding: 20px 40px 40px 40px;
      height:192px;
      text-align:left;
    }

      &__title{
        display:inline-block;
        padding-top:20px;
        width: calc(100% - 150px);
        text-align:left;
        line-height: 1.5;
        letter-spacing: -0.5px;
        color: var(--colors-grayscale-3-d-dark-gray);
        font-size: 16px;

      }

      &__content{
        display:inline-block;
        text-align:left;
        line-height: 1.38;
        letter-spacing: -0.5px;
        color: var(--colors-grayscale-3-d-dark-gray);
        font-size: 16px;
        font-weight: bold;

      }
      &__icon{
        /* display:inline-block;
        padding-top:50px; */
        margin-right: 8px;
      }

      &__caution{
        /* display:inline-block;
        padding-top:50px; */
        text-align: center;
        letter-spacing: -0.5px;
        color: #3d3d3d;
        font-family: AppleSDGothicNeo;
        font-size: 14px;

        &-detail{
          padding-top:12px;
          text-align: center;
          line-height: 1.5;
          letter-spacing: -0.5px;
          color: #F66436;
          font-family: AppleSDGothicNeo;
          font-size: 14px;
        }
      }

      .submit{
        position: fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        margin:auto;
        border-width: 1px;
        border-style: solid;
        border-radius: 16px;
        border-color:#36C8F5;
        background-color: #FFFFFF;
        width: 500px;
        height: 273px;

        &__icon{
          display:flex;
          margin:auto;
          margin-top:-40px;

        }

        &__title{
          background: linear-gradient(to right, #36c8f5, #13e2dd);
          -webkit-background-clip: text;
          -webkit-background-clip: text;
          background-clip: text;
            background-image: linear-gradient(to top, var(--colors-primary-36-c-8-f-5-o-2-blue), var(--colors-primary-13-e-2-dd-o-2-mint));
          padding-top:20px;
          padding-bottom:40px;
          text-align: center;
          line-height: 68px;
          line-height: 1.42;
          letter-spacing: -0.5px;
          font-family: AppleSDGothicNeo;
          font-size: 48px;
          font-weight: bold;
          -webkit-text-fill-color: transparent;
          
        }
        &__detail{
          text-align: center;
          line-height: 1.5;
          letter-spacing: -0.5px;
          font-family: AppleSDGothicNeo;
          font-size: 16px;
        }
      }

}`;
export default ChallengeRegister;
