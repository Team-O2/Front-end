import { getRegistPeriod, SignRegister } from 'apis';
import { AlertIcon, MinusIcon, PlusIcon } from 'assets/images';
import { RegisterCompletedModal, RegisterConfirmModal } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import { IAdminChallengePeriod } from 'types/admin.type';
import {
  BoxWrapper,
  CardDetailWrapper,
  CardSettingWrapper,
  CardWrapper,
  ChallengeSetting,
  NoticeCardWrapper,
  NoticeHeaderWrapper,
  RegisterButton,
} from './style';

function RegisterDetailCard() {
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
    <>
      <CardWrapper>
        <CardDetailWrapper>
          <h1>신청기간</h1>
          <h2>{getRestDay(periodData.registerEndDT)}일 남음</h2>
          <h3>챌린지 기간</h3>
          <h4>
            {dateToString(periodData.challengeStartDT)} ~ {dateToString(periodData.challengeEndDT)}
          </h4>
          <CardSettingWrapper>
            <ChallengeSetting>
              <h1>챌린지 개수 설정</h1>
              <p>2개 이상부터 뱃지 획득 가능</p>
            </ChallengeSetting>
            <BoxWrapper>
              <p
                onClick={() => {
                  minusCount();
                }}
              >
                <img src={MinusIcon} />
              </p>
              {registerCount}
              <p
                onClick={() => {
                  setRegisterCount(registerCount + 1);
                }}
              >
                <img src={PlusIcon} />
              </p>
            </BoxWrapper>
          </CardSettingWrapper>
          <RegisterButton>
            <button
              onClick={() => {
                setIsOpenModal(true);
              }}
            >
              신청하기
            </button>
          </RegisterButton>
        </CardDetailWrapper>
        <RegisterConfirmModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          dateToString={dateToString}
          periodData={periodData}
          registerCount={registerCount}
          handleSubmit={handleSubmit}
        />
        {isRegisterSubmit === true ? (
          <RegisterCompletedModal isRegisterSubmit={isRegisterSubmit} setIsRegisterSubmit={setIsRegisterSubmit} />
        ) : null}

        <NoticeCardWrapper>
          <NoticeHeaderWrapper>
            오투 챌린지 주의사항
            <img src={AlertIcon}></img>
          </NoticeHeaderWrapper>
          <h1>01</h1>
          <p>주당 회고록 개수 3개 이상 선택 및 80% 이상 달성 시 뱃지 획득이 가능합니다.</p>
          <h1>02</h1>
          <p>본 챌린지 의도와는 다른 광고성 글과 카테고리와 무관한 내용은 무통보 삭제 될 수 있습니다.</p>
        </NoticeCardWrapper>
      </CardWrapper>
    </>
  ) : (
    <p> 챌린지 신청기간이 아닙니다</p>
  );
}

export default RegisterDetailCard;
