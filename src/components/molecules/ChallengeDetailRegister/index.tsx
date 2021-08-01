import { getRegistPeriod, SignRegister } from 'apis';
import { AlertIcon, CautionIcon, ChallengeImg, CheckCircleIcon, CheckIcon, MinusIcon, PlusIcon } from 'assets/images';
import { Modal } from 'components/atoms';
import { RegisterHeader } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import { IAdminChallengePeriod } from 'types/admin.type';
import SRegister from './style';

function ChallengeRegister(): React.ReactElement {
  const [userData, setUserData] = useRecoilState(userState);
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);
  const [registerCount, setRegisterCount] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isRegisterSubmit, setIsRegisterSubmit] = useState(false);
  const [periodData, setPeriodData] = useState<IAdminChallengePeriod | null>(null);

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
        setIsRegisterSubmit(true);
        setIsOpenModal(false);
      } else {
        setIsOpenModal(false);
      }
    }
  };

  const dateToString = (date: string): string => {
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
              {dateToString(periodData.challengeStartDT)} ~ {dateToString(periodData.challengeEndDT)}
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
                          {dateToString(periodData.challengeStartDT)}~{dateToString(periodData.challengeEndDT)}
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
              {isRegisterSubmit === true ? (
                <Modal isOpen={isRegisterSubmit} setIsOpen={setIsRegisterSubmit} isBlur={true}>
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
              <img className="notice__img" src={AlertIcon}></img>
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
}
export default ChallengeRegister;
