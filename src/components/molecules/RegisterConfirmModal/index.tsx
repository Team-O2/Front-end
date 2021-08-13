import { CautionIcon, CheckIcon, XIcon } from 'assets/images';
import { Modal } from 'components/atoms';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'stores/user';
import { IAdminChallengePeriod } from 'types/admin.type';
import {
  CautionWrapper,
  ConfirmDetail,
  ConfirmModalWrapper,
  DetailContent,
  ImgIcon,
  ModalButton,
  XButton,
} from './style';

interface IProps {
  isOpenModal: boolean;
  setIsOpenModal: (value: boolean) => void;
  dateToString: (date: string) => void;
  periodData: IAdminChallengePeriod;
  registerCount: number;
  handleSubmit: () => void;
}

function RegisterConfirmModal({
  isOpenModal,
  setIsOpenModal,
  dateToString,
  periodData,
  registerCount,
  handleSubmit,
}: IProps): React.ReactElement {
  const userData = useRecoilValue(userState);
  return (
    <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} isBlur={true}>
      <ConfirmModalWrapper>
        <XButton
          onClick={() => {
            setIsOpenModal(false);
          }}
        >
          <ImgIcon src={XIcon} alt="" />
        </XButton>
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
  );
}

export default RegisterConfirmModal;
