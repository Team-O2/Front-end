import { ErrorIcon } from 'assets/images';
import React, { useState } from 'react';
import { SStyledInput } from './style';

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
const conditionMetStyle = {
  border: 'double 1px transparent',
  backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)',
  backgroundOrigin: 'border-box',
  backgroundClip: 'content-box, border-box',
};
const conditionNotMetStyle = {
  border: 'solid 1px #f66436',
};
const defaultStyle = {
  border: 'solid 1px #c1c1c1',
};

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
    <SStyledInput isConditionMet={isConditionMet} isFocused={isFocused} width={width} height={height} margin={margin}>
      <div
        className="input__container"
        style={!isFocused ? defaultStyle : isFocused && isConditionMet ? conditionMetStyle : conditionNotMetStyle}
      >
        <input
          className="input"
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
        {isFocused && !isConditionMet && <img className="input__image--error" src={ErrorIcon}></img>}
      </div>
      {isFocused && !isConditionMet && <div className="input__msg--error">{errorMsg}</div>}
    </SStyledInput>
  );
}

export default StyledInput;
