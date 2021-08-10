import { StyledInput } from 'components/atoms';
import React from 'react';
import * as S from './style';

interface IProps {
  title: string;
  width: string;
  height: string;
  isConditionMet: boolean;
  onChange?: (value: string) => void;
  placeHolder?: string;
  errorMsg?: string;
  readOnly?: boolean;
  isPw?: boolean;
  margin?: string;
}

function FormInput({
  title,
  width,
  height,
  isConditionMet,
  placeHolder,
  onChange,
  errorMsg,
  readOnly,
  isPw,
  margin,
}: IProps): React.ReactElement {
  return (
    <S.FormInputContainer>
      <S.Title>{title}</S.Title>
      <S.InputWrapper>
        <StyledInput
          width={width}
          height={height}
          isConditionMet={isConditionMet}
          placeHolder={placeHolder}
          onChange={onChange}
          errorMsg={errorMsg}
          readOnly={readOnly}
          isPw={isPw}
          margin={margin}
        />
      </S.InputWrapper>
    </S.FormInputContainer>
  );
}

export default FormInput;
