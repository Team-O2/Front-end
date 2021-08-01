import { DeleteModalImg } from 'assets/images';
import { Button, Modal } from 'components/atoms';
import React from 'react';
import { Wrapper } from './style';

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
        <div className="delete__notice">
          <img className="delete__img" src={DeleteModalImg} alt=""></img>
          <p className="delete__title">잠깐!</p>
          <p className="delete__detail">삭제된 글은 복구가 불가능합니다.</p>
          <p className="delete__detail">글을 삭제하시겠어요?</p>
        </div>
        <div className="delete__button">
          <Button className="delete__cancel" onClick={handleCloseButton}>
            취소
          </Button>
          <Button className="delete__delete" onClick={onClickDeleteButton}>
            삭제
          </Button>
        </div>
      </Wrapper>
    </Modal>
  );
}

export default DeleteModal;
