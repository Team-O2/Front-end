import { LoginModal } from 'components/molecules';
import Image from 'next/image';
import { MinusIcon, PlusIcon } from 'public/assets/images';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IAdminChallengePeriod } from 'types/admin.type';
import { BoxWrapper, CardDetailWrapper, CardSettingWrapper, ChallengeSetting, RegisterButton } from './style';

interface IProps {
  setIsOpenModal: (value: boolean) => void;
  dateToString: (date: string) => void;
  periodData: IAdminChallengePeriod;
  registerCount: number;
  setRegisterCount: (value: number) => void;
}

function RegisterCard({
  setIsOpenModal,
  dateToString,
  periodData,
  registerCount,
  setRegisterCount,
}: IProps): React.ReactElement {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const userStatusData = useRecoilValue(userStatusState);
  const userStateNum = userStatusData ? userStatusData.userType : 0;

  function minusCount() {
    if (registerCount > 1) {
      setRegisterCount(registerCount - 1);
    }
  }

  function plusCount() {
    if (registerCount < 7) {
      setRegisterCount(registerCount + 1);
    }
  }

  function registerAuthority() {
    if (userStateNum === 0) {
      return setIsLoginModalOpen(true);
    } else {
      setIsOpenModal(true);
    }
  }

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
  return (
    <>
      <CardDetailWrapper>
        <h1>신청기간</h1>
        <h2>{getRestDay(periodData.registerEndDT)}일 남음</h2>
        <h3>챌린지 기간</h3>
        <h4>
          {dateToString(periodData.challengeStartDT)} ~ {dateToString(periodData.challengeEndDT)}
        </h4>
        <CardSettingWrapper>
          <ChallengeSetting>
            <h1>한 주의 챌린지 개수 설정</h1>
            <p>2개 이상부터 뱃지 획득 가능</p>
          </ChallengeSetting>
          <BoxWrapper>
            <p
              onClick={() => {
                minusCount();
              }}
            >
              <Image src={MinusIcon} />
            </p>
            {registerCount}
            <p
              onClick={() => {
                plusCount();
              }}
            >
              <Image src={PlusIcon} />
            </p>
          </BoxWrapper>
        </CardSettingWrapper>
        <RegisterButton>
          <button
            onClick={() => {
              registerAuthority();
            }}
          >
            신청하기
          </button>
        </RegisterButton>
        <LoginModal isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />
      </CardDetailWrapper>
    </>
  );
}

export default RegisterCard;
