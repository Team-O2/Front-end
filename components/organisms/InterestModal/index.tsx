import { Modal } from 'components/atoms';
import React from 'react';
import { interestList } from 'resources/string';
import { InterestButton, InterestButtonWrapper, ModalButton, ModalLabel, ModalWrapper } from './style';

interface IProps {
  isInterestModalOpen: boolean;
  setIsInterestModalOpen: (value: boolean) => void;
  handleInterestOnClick: (interest: string) => void;
  selectedInterest: string[];
  modalBtnHandler: () => void;
}

function InterestModal({
  isInterestModalOpen,
  setIsInterestModalOpen,
  handleInterestOnClick,
  selectedInterest,
  modalBtnHandler,
}: IProps): React.ReactElement {
  return (
    <Modal isOpen={isInterestModalOpen} setIsOpen={setIsInterestModalOpen} isBlur={true}>
      <ModalWrapper>
        <ModalLabel>관심있는 분야를 5개 선택해 주세요</ModalLabel>
        <InterestButtonWrapper>
          {interestList.map((interest, id) => {
            const handleOnClick = () => {
              handleInterestOnClick(interest);
            };
            return (
              <InterestButton
                key={id}
                onClick={handleOnClick}
                order={
                  interest == selectedInterest[0]
                    ? 0
                    : interest == selectedInterest[1]
                    ? 1
                    : interest == selectedInterest[2]
                    ? 2
                    : interest == selectedInterest[3]
                    ? 3
                    : interest == selectedInterest[4]
                    ? 4
                    : -1
                }
              >
                {interest}
              </InterestButton>
            );
          })}
        </InterestButtonWrapper>
        <ModalButton
          selectedInterest={selectedInterest}
          disabled={selectedInterest.length > 0 ? false : true}
          onClick={modalBtnHandler}
        >
          <div>확인 ({selectedInterest.length}/5)</div>
        </ModalButton>
      </ModalWrapper>
    </Modal>
  );
}

export default InterestModal;
