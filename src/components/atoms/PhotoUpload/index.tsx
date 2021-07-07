import React, { useRef, useEffect, useState } from 'react';
import Styled from 'styled-components';
import Button from 'components/atoms/Button';

export interface IProps {
  children: React.ReactElement | string;
  className?: string;
  width: string;
  height: string;
  setImage: (e: string) => void;
}

function PhotoUpload({ children, width, height, setImage }: IProps): React.ReactElement {
  const [newImage, setNewImage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonHandler = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };
  useEffect(() => {
    setImage(newImage);
  }, [newImage]);

  const fileInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files !== null) {
      const file = e.target.files[0];
      const fileForm = /(.*?)\.(jpg|jpeg|png|gif|bmp)$/;
      if (file.name.match(fileForm)) {
        setNewImage(URL.createObjectURL(file));
      } else {
        alert('이미지 파일을 첨부해주세요');
      }
    }
  };

  return (
    <SPhotoUpload width={width} height={height}>
      <input hidden={true} ref={inputRef} type="file" onChange={fileInputHandler} />
      <Button onClick={buttonHandler} className="upload__btn">
        {newImage ? <img src={newImage} className="upload__image--preview" /> : children}
      </Button>
    </SPhotoUpload>
  );
}

const SPhotoUpload = Styled.div<{
  width: string;
  height: string;
}>`
    cursor : pointer;
    .upload{
      &__image--preview{
        width : ${(props) => props.width};
        height : ${(props) => props.height};
        object-fit: cover;
      }
      &__btn{
        width : ${(props) => props.width};
        height : ${(props) => props.height};
      }
    }
  `;

export default PhotoUpload;
