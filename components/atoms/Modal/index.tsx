import React from 'react';
import { SModal } from './style';

export interface IProps {
  children: React.ReactElement;
  className?: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isBlur: boolean; //모달창이 켜졌을때 뒤에 회색으로 처리하는지 (true면 회색처리됨)
}

function Modal({ ...props }: IProps): React.ReactElement {
  const { children, isOpen, setIsOpen, isBlur } = props;
  const closeHandler = (): void => {
    setIsOpen(false);
  };

  return (
    <SModal isBlur={isBlur}>
      {isOpen && (
        <>
          <div className="modal__background" onClick={closeHandler}></div>
          <div className="modal">{children}</div>
        </>
      )}
    </SModal>
  );
}

export default Modal;
