import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import arrowDown from 'assets/images/arrowDown.svg';
import arrowUp from 'assets/images/arrowUp.svg';

export interface IProps {
  className?: string;
  setState: (value: string) => void;
  state: string;
  defaultMsg: string;
  itemList: string[];
  page: string;
}

function DropDown({ setState, state, defaultMsg, itemList, page }: IProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false); //드롭다운이 열렸는지
  const [isChecked, setIsChecked] = useState<boolean>(false); //값이 선택이 되었는지
  const radioClickListener = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.value);
    setIsOpen(false);
  };
  const openClickListener = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (state !== defaultMsg) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [state]);
  useEffect(() => {
    setState(defaultMsg);
  }, []);

  return (
    <SDropDown isOpen={isOpen} isChecked={isChecked} page={page}>
      <div className="summary__container--outer">
        <div className="summary__container--inner" onClick={openClickListener}>
          <div className="summary_value">{state}</div>
          <img className="arrow" src={isOpen ? arrowUp : arrowDown}></img>
        </div>
      </div>
      {isOpen && (
        <div className="container">
          {itemList.map((item, id) => {
            return (
              <div key={id}>
                <label>
                  <input type="radio" name="radio" value={item} onChange={radioClickListener} />
                  <span>{item}</span>
                </label>
                {id !== itemList.length - 1 && <div className="line"></div>}
              </div>
            );
          })}
        </div>
      )}
    </SDropDown>
  );
}

const SDropDown = Styled.div<{ isOpen?: boolean; isChecked: boolean; page: string }>`
  input {
    -webkit-appearance: none;
    appearance: none;
    visibility: hidden;
    position: absolute;
  }

  input:checked + span {
    color: #36c8f5;
  }
  .arrow{
    width: 17px;
    height: 10.4px;
  }
  
  .summary{
    &__container{
      &--outer{
        width:${(props) => (props.page === 'adminwrite' ? '391px' : '406px')};
        height:${(props) => (props.page === 'adminwrite' ? '60px' : '62.6px')};
        margin-top: 5px;
        border-radius: 4px;
        display : flex;
        align-items : center;
        border : ${(props) => (props.isOpen || props.isChecked ? 'double 1px transparent' : '1px solid #c1c1c1')};
        background-image : 
        ${(props) =>
          props.isOpen || props.isChecked
            ? 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)'
            : undefined};
        background-origin : 
        ${(props) => (props.isOpen || props.isChecked ? 'border-box' : undefined)};
        background-clip : 
        ${(props) => (props.isOpen || props.isChecked ? 'content-box, border-box' : undefined)};       
        position:${(props) => (props.page === 'adminwrite' ? 'relative' : undefined)};
      }
      &--inner{
        display : flex;
        justify-content : space-between;
        align-items : center;
        width : 100%;
        padding : 0 15px 0 20px;
      }
    }

    &_value{
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: -0.5px;
    }
  }

  .line{
    padding : 0;
    width:${(props) => (props.page === 'adminwrite' ? '100%' : '370px')};
    height : 1px;
    background-color : #dfdfdf;
    margin : 13px 0 14px 0 ;
  }
  .container{
    width:${(props) => (props.page === 'adminwrite' ? '391px' : '406px')};
    max-height:${(props) => (props.page === 'adminwrite' ? '220px' : undefined)};
    overflow:${(props) => (props.page === 'adminwrite' ? 'scroll' : undefined)};
    margin-top: 5px;
    border: 1px solid #c1c1c1;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 20px 18px;
    position:${(props) => (props.page === 'adminwrite' ? 'absolute' : undefined)};
    background-color : #ffffff;
  }
  label {
    position: relative;
    cursor: pointer;
  } 
    
  span {
    width : 100%;
    display: block;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.5px;
    color:${(props) => (props.page === 'adminwrite' ? '#0d0d0d' : '#8b8b8b')};
  }  
}



`;

export default DropDown;
