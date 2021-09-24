import { Button, Modal } from 'components/atoms';
import { ModalCloseIcon } from 'public/assets/images';
import React from 'react';
import { CloseImage, Content, ContentContainer, ModalContainer, Title, TitleContainer } from './style';

interface IProps {
  isPolicyOpen: boolean;
  setIsPolicyOpen: (value: boolean) => void;
  title: string;
  content: string;
}

function PolicyModal({ isPolicyOpen, setIsPolicyOpen, title, content }: IProps) {
  const modalHandler = (): void => {
    setIsPolicyOpen(!isPolicyOpen);
  };
  return (
    <Modal isOpen={isPolicyOpen} setIsOpen={setIsPolicyOpen} isBlur={true}>
      <ModalContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <Button onClick={modalHandler}>
            <CloseImage src={ModalCloseIcon}></CloseImage>
          </Button>
        </TitleContainer>
        <ContentContainer>
          <Content dangerouslySetInnerHTML={{ __html: `${content}` }} />
        </ContentContainer>
      </ModalContainer>
    </Modal>
  );
}

export default PolicyModal;
