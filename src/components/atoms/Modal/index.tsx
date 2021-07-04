import React, { useEffect, useRef } from 'react';

import Styled from 'styled-components';

export interface IProps {
  children: React.ReactElement;
  className?: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

function Modal({ ...props }: IProps): React.ReactElement {
  const { children, isOpen, setIsOpen } = props;
  const Ref = useRef<HTMLDivElement>(null);
  const closeHandler = (evt: any): void => {
    if (isOpen && (!Ref.current || !Ref.current?.contains(evt.target))) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeHandler);
    return () => {
      window.removeEventListener('click', closeHandler);
    };
  }, [isOpen]);

  return <>{isOpen && <SModal ref={Ref}>{children}</SModal>}</>;
}

const SModal = Styled.div`
`;

export default Modal;
