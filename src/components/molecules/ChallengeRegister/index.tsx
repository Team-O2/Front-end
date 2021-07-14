import { SignRegister } from 'libs/getChallenge';
import React, { useState } from 'react';
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
import { useRecoilState } from 'recoil';
import { userStatusState } from 'stores/user';

const ChallengeRegister = (): React.ReactElement => {
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);
  const [registerCount, setRegisterCount] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isSubmitModal, setIsSubmitModal] = useState(false);
  const [registerSubmit, setRegisterSubmit] = useState(false);
  function minusCount() {
    if (registerCount > 0) {
      setRegisterCount(registerCount - 1);
    }
  }

  const handleSubmit = async () => {
    setRegisterSubmit(true);
    setIsOpenModal(false);
    const signData = {
      challengeCNT: registerCount,
    };
    if (userStatusData) {
      const getData = await SignRegister(signData, userStatusData.token);
      console.log('getData', getData);
    }
  };
  return (
    <SRegister>
      <RegisterHeader />
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
            <div className="register__remain">10일 남음</div>
            <div className="challenge">챌린지 기간</div>
            <div className="challenge__detail">7월 1일 ~ 7월 31일</div>
            <div className="challenge__setting">
              <div className="challenge__count-set">챌린지 개수 설정</div>
              <p className="challenge__notice">2개 이상부터 뱃지 획득 가능</p>
            </div>
            <div className="challenge__box">
              <button
                className="challenge__minus-plus"
                onClick={() => {
                  minusCount();
                }}
              >
                <img src={MinusIcon} />
              </button>
              {registerCount}
              <button
                className="challenge__minus-plus"
                onClick={() => {
                  setRegisterCount(registerCount + 1);
                }}
              >
                <img src={PlusIcon} />
              </button>
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
                        <div className="modal__content">7월1일~7월31일</div>
                      </div>
                      <div>
                        <div className="modal__title">신청자</div>
                        <div className="modal__content">앵그리엘모님</div>
                      </div>
                      <div>
                        <div className="modal__title">챌린지 개수</div>
                        <div className="modal__content">{registerCount}개</div>
                      </div>
                    </div>
                    <img className="modal__icon" src={CautionIcon} alt=""></img>
                    <div className="modal__caution">주의사항</div>
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
                    <div className="submit__detail">앵글리엘모님 챌린지가 정상적으로</div>
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
  );
};

const SRegister = Styled.div`
.header{
  &__title{
      height: 70px;
      font-family: AppleSDGothicNeo;
      font-size: 18px;
      line-height: 1.56;
      letter-spacing: -0.5px;
      text-align: center;
      padding-top:25px;
      color: var(--colors-grayscale-0-d-black);
  }
  &__line{
      display: inline-block;
      width: 100%;
      height: 2px;
      opacity: 0.4;
      background-color: #c4c4c4;
  }
  &__fixed{
      position: sticky;
      top: 0px;
      width: 100%;
      background-color: #FFFFFF;
  }


}

  .container{
    margin: 0 auto;
    text-align: center;

  }
    .register{
        width: 354px;
        height: 487px;
        padding: 50px 30px;
        border-radius: 10px;
        box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
        background-color: var(--colors-grayscale-ff);
        margin-bottom:30px;
        &__img{
            display:inline-block;
            width: 677px;
            height: 1414px;
            padding-top:60px;
        }
        &__date{
          width: 51px;
          height: 21px;
          margin: 0 243px 4px 0;
          font-family: AppleSDGothicNeo;
          font-size: 14px;
          line-height: 1.5;
          letter-spacing: -0.5px;
          text-align: center;
          color: var(--colors-grayscale-3-d-dark-gray);
        }
        &__remain{
            width: 294px;
            height: 44px;
            margin: 4px 0 0;
            font-family: AppleSDGothicNeo;
            font-size: 36px;
            font-weight: bold;
            line-height: 1.22;
            letter-spacing: -0.5px;
            text-align: left;
            color: var(--colors-grayscale-3-d-dark-gray);
        }
    }
    .img{
      display:inline-block;
      padding-right:20px;

    }
    .challenge{
        width: 62px;
        height: 21px;
        font-family: AppleSDGothicNeo;
        font-size: 14px;
        line-height: 1.5;
        letter-spacing: -0.5px;
        color: var(--colors-grayscale-3-d-dark-gray);
        margin-top:40px;
        
        &__minus-plus{
          border:none;
          background-color: #FFFFFF;
        }
        &__setting{
          display:inline-block;
        }
        &__box{
          display:inline-block;
          float:right;
          width: 119px;
          height: 36px;
          border-radius: 4px;
          border: solid 1px var(--colors-grayscale-df-light-gray-1);
          font-family: HomepageBaukasten;
          font-size: 16px;
          font-weight: bold;
          line-height: 1.25;
          padding-top:65px;
        }
        &__detail{
            width: 294px;
            height: 44px;
            margin: 4px 0 0;
            font-family: AppleSDGothicNeo;
            font-size: 36px;
            font-weight: bold;
            line-height: 1.22;
            letter-spacing: -0.5px;
            text-align: left;
            color: var(--colors-grayscale-3-d-dark-gray);
        }
        &__count-set{
            width: 89px;
            height: 21px;
            margin: 0 37px 0 0;
            font-family: AppleSDGothicNeo;
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: -0.5px;
            text-align: center;
            color: var(--colors-grayscale-3-d-dark-gray);
            margin-top:60px;
        }
        &__notice{
            width: 126px;
            height: 18px;
            font-family: AppleSDGothicNeo;
            font-size: 12px;
            line-height: 1.5;
            letter-spacing: -0.5px;
            color: var(--colors-grayscale-c-1-light-gray-2);
        }
    }
    .card{
      display:inline-block;
      vertical-align: top;
      padding:60px 0px 0px 20px;
      
    }

    .button{
      margin-top:50px;

        &__register{
          height:60px;
          width:294px;
          font-family: Apple SD Gothic Neo;
          font-weight: bold;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: -0.5px;
          color: #FFFFFF;
          border:none;
          border-radius: 4px;
          background: linear-gradient(91.91deg, #36C8F5 7.34%, #13E2DD 90.35%);
      
        }
    }
    }
    .card__notice{
        width: 354px;
        height: 282px;
        padding: 30px 30px 30px 28px;
        border-radius: 10px;
        box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
        background-color: var(--colors-grayscale-ff);
    }
    .o2__notice{
      font-size: 18px;
      line-height: 28px;
      text-align: left;
      letter-spacing: -0.5px;
      color: #3D3D3D;
    }
    .notice{
      &__img{
        float:right;
      }
      &__num{
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #A5A5A5;
        text-align: left;
        margin-top:20px;
      }
      &__detail{
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.5px;
        color: #8B8B8B;
        text-align: left;
      }
    }

    .modal{

      &__main{
      position: fixed;
      top:0;
      left:0;
      right:0;
      bottom:0;
      margin:auto;
      width: 500px;
      height: 613px;
      border-radius: 16px;
      background-color: #FFFFFF;

      &-card{
        padding: 80px 80px 80px;
      }
    }


    &__notice{
      font-family: AppleSDGothicNeo;
      font-size: 28px;
      font-weight: bold;
      line-height: 1.36;
      letter-spacing: -0.5px;
      color: var(--colors-grayscale-3-d-dark-gray);


      &-detail{
        font-family: AppleSDGothicNeo;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: -0.5px;
        padding-top:10px;
        padding-bottom:30px;
        color: var(--colors-grayscale-8-b-gray);

      }

    }

    .modal__button{
      height:64px;
      width:500px;
      background: linear-gradient(91.91deg, #36C8F5 7.34%, #13E2DD 90.35%);
      border-radius: 0px 0px 16px 16px;
      border:none;

    }
    .modal__img{
      display:inline-block;
    }
    .modal__register-button{
        display:inline-block;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.38;
        letter-spacing: -0.5px;
        border:none;
        background: linear-gradient(91.91deg, #36C8F5 7.34%, #13E2DD 90.35%);
        border-radius: 0px 0px 16px 16px;
        color: #FFFFFF;

    }

    &__detail{
      height:192px;
      text-align:left;
      padding: 20px 40px 40px 40px;
      border-radius: 30px;
      background-color: #f9f9f9;
    }

      &__title{
        width: calc(100% - 150px);
        display:inline-block;
        text-align:left;
        padding-top:20px;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: -0.5px;
        color: var(--colors-grayscale-3-d-dark-gray);

      }

      &__content{
        display:inline-block;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.38;
        letter-spacing: -0.5px;
        text-align:left;
        color: var(--colors-grayscale-3-d-dark-gray);

      }
      &__icon{
        display:inline-block;
        padding-top:50px;
      }

      &__caution{
        display:inline-block;
        padding-top:50px;
        font-family: AppleSDGothicNeo;
        font-size: 14px;
        line-height: 1.5;
        letter-spacing: -0.5px;
        text-align: center;
        color: var(--colors-grayscale-3-d-dark-gray);

        &-detail{
          font-family: AppleSDGothicNeo;
          font-size: 14px;
          padding-top:12px;
          line-height: 1.5;
          letter-spacing: -0.5px;
          text-align: center;
          color: #F66436;
        }
      }

      .submit{
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        width: 500px;
        height: 273px;
        border-radius: 16px;
        background-color: #FFFFFF;
        border-style: solid;
        border-width: 1px;
        border-color:#36C8F5;

        &__icon{
          display:flex;
          margin:auto;
          margin-top:-40px;

        }

        &__title{
          font-weight: bold;
          font-size: 48px;
          line-height: 68px;
          text-align: center;
          letter-spacing: -0.5px;
          padding-top:20px;
          padding-bottom:40px;
            background-image: linear-gradient(to top, var(--colors-primary-36-c-8-f-5-o-2-blue), var(--colors-primary-13-e-2-dd-o-2-mint));
          font-family: AppleSDGothicNeo;
          line-height: 1.42;
          -webkit-background-clip: text;
          background-clip: text;
          
        }
        &__detail{
          font-family: AppleSDGothicNeo;
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: -0.5px;
          text-align: center;
        }
      }

`;
export default ChallengeRegister;
