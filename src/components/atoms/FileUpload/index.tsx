import Button from 'components/atoms/Button';
import React, { useEffect, useRef, useState } from 'react';
import Styled from 'styled-components';

export interface IProps {
  children: React.ReactElement | string;
  className?: string;
  width: string;
  height: string;
  setFile: (e: File) => void;
  fileType: number; //0:이미지, 1:영상
}

function PhotoUpload({ children, width, height, setFile, fileType }: IProps): React.ReactElement {
  const [newFile, setNewFile] = useState<File | null>(null);
  const [fileString, setFileString] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonHandler = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };
  useEffect(() => {
    newFile && setFile(newFile);
  }, [newFile, setFile]);

  const fileInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files !== null) {
      const file = e.target.files[0];
      const imgFileForm = /(.*?)\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|bmp|BMP)$/;
      const videoFileForm = /(.*?)\.(mp4|MP4|mov|MOV|wmv|WMV|avi|AVI|avchd|AVCHD)$/;
      if (fileType === 0) {
        // 이미지파일
        if (file?.name?.match(imgFileForm)) {
          //파일 확장자 체크
          setNewFile(file);
          setFileString(URL.createObjectURL(file));
        } else {
          alert('이미지 파일을 첨부해주세요');
        }
      } else {
        //동영상파일
        if (file?.name?.match(videoFileForm)) {
          //파일 확장자 체크
          setNewFile(file);
          setFileString(URL.createObjectURL(file));
        } else {
          alert('동영상 파일을 첨부해주세요');
        }
      }
    }
  };

  return (
    <SPhotoUpload width={width} height={height}>
      <input hidden={true} ref={inputRef} type="file" onChange={fileInputHandler} />
      <Button onClick={buttonHandler} className="upload__btn">
        {!newFile ? ( //파일이 없는 경우
          children
        ) : newFile && fileType == 0 ? ( //업로드된 파일이 사진일 경우
          <img src={fileString} className="upload__image--preview" />
        ) : (
          //업로드된 파일이 영상일 경우
          <video src={fileString} className="upload__image--preview" />
        )}
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
