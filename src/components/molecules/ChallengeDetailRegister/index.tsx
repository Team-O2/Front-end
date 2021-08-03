import { getRegistPeriod, SignRegister } from 'apis';
import { AlertIcon, CautionIcon, ChallengeImg, CheckCircleIcon, CheckIcon, MinusIcon, PlusIcon } from 'assets/images';
import { Modal } from 'components/atoms';
import { RegisterHeader } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import { IAdminChallengePeriod } from 'types/admin.type';
import {
  BoxWrapper,
  CardDetailWrapper,
  CardSettingWrapper,
  CardWrapper,
  CautionWrapper,
  ChallengeSetting,
  ConfirmDetail,
  ConfirmModalWrapper,
  Container,
  DetailContent,
  Header,
  ModalButton,
  NoticeCardWrapper,
  NoticeHeaderWrapper,
  RegisterButton,
  RegisterImg,
  RegisterSubmitWrapper,
} from './style';

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
    <Container>
      <RegisterHeader title={periodData.title} generation={periodData.generation} img={periodData.img} />
      <Header>
        <p>챌린지 설명</p>
        <span></span>
      </Header>
      <RegisterImg>
        <img src={ChallengeImg} alt="" />
      </RegisterImg>
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
        <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} isBlur={true}>
          <ConfirmModalWrapper>
            <ConfirmDetail>
              <h1>잠깐! 확인하고 신청 완료하세요</h1>
              <h2>아래 정보를 확인해주세요</h2>
              <DetailContent>
                <h3>챌린지 기간</h3>
                <p>
                  {dateToString(periodData.challengeStartDT)}~{dateToString(periodData.challengeEndDT)}
                </p>
                <h3>신청자</h3>
                <p>{userData?.nickname}님</p>
                <h3>챌린지 개수</h3>
                <p>{registerCount}개</p>
              </DetailContent>
              <CautionWrapper>
                <img src={CautionIcon} alt=""></img>
                <h4>주의사항</h4>
              </CautionWrapper>
              <h5>챌린지 개수 2개를 선택하시면 최종 달성률 80%를 넘더라도 배지를 받을 수 없어요!</h5>
            </ConfirmDetail>
            <ModalButton onClick={handleSubmit}>
              <img src={CheckIcon} alt=""></img>
              <p>주의 사항을 확인했으며 챌린지 신청을 완료합니다.</p>
            </ModalButton>
          </ConfirmModalWrapper>
        </Modal>
        {isRegisterSubmit === true ? (
          <Modal isOpen={isRegisterSubmit} setIsOpen={setIsRegisterSubmit} isBlur={true}>
            <RegisterSubmitWrapper>
              <img src={CheckCircleIcon} alt=""></img>
              <h5>신청완료!</h5>
              <p>{userData?.nickname}님 챌린지가 정상적으로</p>
              <p> 신청되었습니다.</p>
            </RegisterSubmitWrapper>
          </Modal>
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
    </Container>
  ) : (
    <p> 챌린지 신청기간이 아닙니다</p>
  );
}
export default ChallengeRegister;
