import { ErrorIcon } from 'assets/images';
import React, { useState } from 'react';
import { ErrorImage, ErrorMsg, Input, InputContainer, SStyledInput } from './style';

export interface IProps {
  name?: string;
  className?: string;
  errorMsg?: string;
  placeHolder?: string;
  onChange: (value: string | number) => void;
  isConditionMet: boolean;
  width: string;
  height: string;
  isPw?: boolean;
  margin?: string;
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
}: IProps): React.ReactElement {
  const [isFocused, setIsfocused] = useState(false);

  return (
    <SStyledInput margin={margin}>
      <InputContainer width={width} height={height} condition={!isFocused ? -1 : isFocused && isConditionMet ? 1 : 0}>
        <Input
          name={name}
          placeholder={placeHolder}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          onFocus={() => {
            setIsfocused(true);
          }}
          // onBlur={(e) => {
          //   setIsfocused(false);
          // }}
          type={isPw ? 'password' : 'text'}
        />
        {isFocused && !isConditionMet && <ErrorImage src={ErrorIcon}></ErrorImage>}
      </InputContainer>
      {isFocused && !isConditionMet && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </SStyledInput>
  );
}

export default StyledInput;
