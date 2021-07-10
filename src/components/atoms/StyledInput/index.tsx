import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import errIcon from 'assets/images/errIcon.svg';

export interface IProps {
  name?: string;
  className?: string;
  errorMsg?: string;
  placeHolder?: string;
  onChange: (value: string | number) => void;
  isConditionMet: boolean;
  width: string;
  height: string;
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
}: IProps): React.ReactElement {
  const [isFocused, setIsfocused] = useState(false);
  useEffect(() => {
    console.log(isFocused);
    console.log(isConditionMet);
    console.log(errorMsg);
  }, [isFocused]);

  return (
    <SStyledInput isConditionMet={isConditionMet} isFocused={isFocused} width={width} height={height}>
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
        />
        {isFocused && !isConditionMet && <img className="input__image--error" src={errIcon}></img>}
      </div>
      {isFocused && !isConditionMet && <div className="input__msg--error">{errorMsg}</div>}
    </SStyledInput>
  );
}

const SStyledInput = Styled.div<{ isConditionMet: boolean; isFocused: boolean; width: string; height: string }>`
    display : flex;
    flex-direction : column;
    .input{
        border : none;
        font-size : 16px;
        color : #0d0d0d;
        letter-spacing: -0.5px;
        text-align: left;
        width : 100%;
        height : 100%;
        padding: 18px 20px;
        border-radius: 4px;
        
        :placeholder{
        color : #c1c1c1;
        }
        :focus{
        outline : none;
        }
        &__container{
            border-radius : 4px;   
            display : flex;    
            align-items : center;  
            width : ${(props) => props.width};
            height : ${(props) => props.height};
            margin-bottom : 5px;
            }
        &__image--error{
            width : 24px;
            height : 24px;
            margin-right : 15px;
        }
        &__msg--error{
            text-align : left;
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: -0.5px;
            text-align: left;
            color: #f66436;
        }
    }
`;

export default StyledInput;
