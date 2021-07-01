import React, { useState, useRef, useCallback } from 'react';
import Styled from 'styled-components';
import { prop } from 'styled-tools';

export interface IProps {
  maxFileSize?: number;
  className?: string;
  onChange?: (data?: string, file?: File) => void;
}

function clearImageInput(inputRef: React.RefObject<HTMLInputElement>): void {
  if (!inputRef?.current?.value) return;
  inputRef.current.value = inputRef.current.defaultValue;
}

function readImageOfInput(
  inputRef: React.RefObject<HTMLInputElement>,
  maxFileSize?: number,
): Promise<{ data: string; file: File }> {
  return new Promise((resolve, reject) => {
    if (!inputRef?.current?.files) return reject(new Error());

    const file: File = inputRef.current.files[0];

    if (!file) {
      return reject(new Error());
    } else if (!file.type.startsWith('image')) {
      clearImageInput(inputRef);
      return reject(new Error());
    } else if (maxFileSize && maxFileSize <= file.size) {
      clearImageInput(inputRef);
      return reject(new Error());
    }

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = (e: ProgressEvent<FileReader>): void => {
      if (!e?.target?.result) return reject(new Error());
      const data: string = e.target.result.toString();
      return resolve({ data, file });
    };
  });
}

function ImgSelector({ onChange, maxFileSize, ...props }: IProps): React.ReactElement {
  const [background, setBackground] = useState<string>();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onChangeImage = useCallback(async () => {
    try {
      const { data, file } = await readImageOfInput(inputRef, maxFileSize);
      setBackground(data);
      onChange && onChange(data, file);
    } catch (error) {
      alert(error.message);
    }
  }, [inputRef, onChange, maxFileSize]);

  return (
    <SFileInput {...props} {...{ background }}>
      <input type="file" accept="image/*" onChange={onChangeImage} ref={inputRef} {...props} />;
    </SFileInput>
  );
}

interface InputProps {
  background?: string;
}

const SFileInput = Styled.div<InputProps>`
  position: relative;
  background-image: url('${prop('background')}');
  background-size: cover;
  background-position: center;
  width: 100px;
  height: 100px;

  input {
    display: block;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    outline: none;
  }
`;

export default ImgSelector;
