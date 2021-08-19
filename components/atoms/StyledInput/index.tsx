import { ErrorIcon } from 'assets/images';
import React, { useState } from 'react';
import { ErrorImage, ErrorMsg, Input, InputContainer, SStyledInput } from './style';

export interface IProps {
  name?: string;
  className?: string;
  errorMsg?: string;
  placeHolder?: string;
  onChange?: (value: string) => void;
  isConditionMet: boolean;
  width: string;
  height: string;
  isPw?: boolean;
  margin?: string;
  readOnly?: boolean;
}

function StyledInput({
  name,
  errorMsg,
  placeHolder,
  isConditionMet,
  onChange,
  width,
  height,
  isPw,
  margin,
  readOnly = false,
}: IProps): React.ReactElement {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  return (
    <SStyledInput margin={margin}>
      <InputContainer
        width={width}
        height={height}
        condition={!isFocused ? -1 : isFocused && isConditionMet ? 1 : 0}
        readOnly={readOnly}
      >
        <Input
          name={name}
          placeholder={placeHolder}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          type={isPw ? 'password' : 'text'}
          readOnly={readOnly}
          autoComplete={isPw ? 'false' : 'true'}
        />
        {isFocused && !isConditionMet && <ErrorImage src={ErrorIcon}></ErrorImage>}
      </InputContainer>
      {isFocused && !isConditionMet && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </SStyledInput>
  );
}

export default StyledInput;
