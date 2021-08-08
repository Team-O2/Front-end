import { getRegistPeriod, SignRegister } from 'apis';
import { AlertIcon } from 'assets/images';
import { RegisterCard, RegisterCompletedModal, RegisterConfirmModal } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userStatusState } from 'stores/user';
import { IAdminChallengePeriod } from 'types/admin.type';
import { CardWrapper, NoticeCardWrapper, NoticeHeaderWrapper } from './style';

function RegisterDetailCard() {
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);
  const [registerCount, setRegisterCount] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isRegisterSubmit, setIsRegisterSubmit] = useState(false);
  const [periodData, setPeriodData] = useState<IAdminChallengePeriod | null>(null);

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
        <RegisterCard
          setIsOpenModal={setIsOpenModal}
          dateToString={dateToString}
          periodData={periodData}
          setRegisterCount={setRegisterCount}
          registerCount={registerCount}
        />
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
