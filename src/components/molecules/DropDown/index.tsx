import React, { Component, useState, useEffect } from 'react';

import Styled from 'styled-components';
import arrowDown from 'assets/images/arrowDown.svg';
import arrowUp from 'assets/images/arrowUp.svg';

export interface IProps {
  className?: string;
  options?: {
    value: string;
    label: string;
  }[];
}

function DropDown({ ...props }: IProps): React.ReactElement {
  const [selectedValue, setSelectedValue] = useState<string>('성별 선택');
  const [open, setOpen] = useState<boolean>(false);
  const radioClickListener = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setSelectedValue(e.target.value);
    setOpen(false);
  };
  const openClickListener = (e: React.MouseEvent<HTMLElement, MouseEvent>): any => {
    setOpen(!open);
  };
  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <SDropDown>
      <div
        className="summary"
        onClick={openClickListener}
        style={
          open
            ? {
                borderStyle: 'solid',
                borderWidth: '1px',
                borderImageSource: 'linear-gradient(to right, #36c8f5, #13e2dd)',
                borderImageSlice: '1',
              }
            : { border: '1px solid #c1c1c1' }
        }
      >
        <div className="summary_value">{selectedValue}</div>
        {open ? <img className="arrow" src={arrowUp}></img> : <img className="arrow" src={arrowDown}></img>}
      </div>
      {open ? (
        <div className="container">
          <label>
            <input type="radio" name="radio" value="남성" onChange={radioClickListener} />
            <span>남성</span>
          </label>
          <div className="line"></div>
          <label>
            <input type="radio" name="radio" value="여성" onChange={radioClickListener} />
            <span>여성</span>
          </label>
          <div className="line"></div>
          <label>
            <input type="radio" name="radio" value="선택안함" onChange={radioClickListener} />
            <span>선택안함</span>
          </label>
        </div>
      ) : (
        <></>
      )}
    </SDropDown>
  );
}

const SDropDown = Styled.div`


`;

export default DropDown;
