import { MinusIcon, PlusIcon } from 'assets/images';
import React from 'react';
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
  function minusCount() {
    if (registerCount > 0) {
      setRegisterCount(registerCount - 1);
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
    </>
  );
}

export default RegisterCard;
