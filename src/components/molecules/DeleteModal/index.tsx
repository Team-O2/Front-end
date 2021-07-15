import { Button } from 'components/atoms';
import Modal from 'components/atoms/Modal';
import React from 'react';
import Styled from 'styled-components';
import DeleteModalImg from '../../../assets/images/delete_modal.png';

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

const Wrapper = Styled.div`
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin:auto;
  border-radius: 16px;
  background-color: #FFFFFF;
  width: 500px;
  height: 312px;

  .delete {
    &__notice{
      padding: 0px 80px 0px 80px;
    }

    &__img{
      display:flex;
      margin:auto;
      margin-top:-40px;

    }
    &__title{
      padding:20px 0px 20px 0px;
      text-align: center;
      line-height: 1.42;
      letter-spacing: -0.5px;
      color: #000000;
      font-size: 48px;
      font-weight: bold;
    }
    &__detail{
      text-align: center;
      line-height: 1.5;
      letter-spacing: -0.5px;
      color: var(--colors-grayscale-0-d-black);
      font-size: 16px;
    }
    &__button{
      padding-top:50px;
      text-align: center;

    }
    &__delete{
      padding-left:170px;
      line-height: 1.33;
      letter-spacing: -0.5px;
      color: #C1C1C1;
      font-size: 18px;
      font-weight: bold;;

    }
    &__cancel{
      line-height: 1.33;
      letter-spacing: -0.5px;
      color: #E04747;
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

export default DeleteModal;
