import { DeleteModalImg } from 'assets/images';
import { Button, Modal } from 'components/atoms';
import React from 'react';
import { ButtonWrapper, NoticeWrapper, Wrapper } from './style';

interface IProps {
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: (value: boolean) => void;
  onClickDeleteButton?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function DeleteModal({ isDeleteModalOpen, setIsDeleteModalOpen, onClickDeleteButton }: IProps): React.ReactElement {
  const handleCloseButton = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <Modal isOpen={isDeleteModalOpen} setIsOpen={setIsDeleteModalOpen} isBlur={true}>
      <Wrapper>
        <NoticeWrapper>
          <img src={DeleteModalImg} alt=""></img>
          <h1>잠깐!</h1>
          <p>삭제된 글은 복구가 불가능합니다.</p>
          <p>글을 삭제하시겠어요?</p>
        </NoticeWrapper>
        <ButtonWrapper>
          <Button onClick={handleCloseButton}>취소</Button>
          <Button onClick={onClickDeleteButton}>삭제</Button>
        </ButtonWrapper>
      </Wrapper>
    </Modal>
  );
}

export default DeleteModal;
