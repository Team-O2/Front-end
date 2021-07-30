import { arrowDown, arrowUp } from 'assets/images';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';

export interface IProps {
  className?: string;
  setState: (value: string) => void;
  state: string[];
  defaultMsg: string;
  itemList: string[];
}

function DropDown({ setState, state, defaultMsg, itemList }: IProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false); //드롭다운이 열렸는지
  const [isChecked, setIsChecked] = useState<boolean>(false); //값이 선택이 되었는지
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.value);
    setIsOpen(false);
  };
  const handleOpenOnClick = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (state.length !== 0) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [state]);

  return (
    <SDropDown isOpen={isOpen} isChecked={isChecked} state={state}>
      <div className="summary__container--outer">
        <div className="summary__container--inner" onClick={handleOpenOnClick}>
          <div className="summary_value">{state.length === 0 ? defaultMsg : state.join(', ')}</div>
          <img className="arrow" src={isOpen ? arrowUp : arrowDown}></img>
        </div>
      </div>
      {isOpen && (
        <div className="container">
          {itemList.map((item, id) => {
            return (
              <div key={id}>
                <label>
                  <input type="radio" name="radio" value={item} onChange={handleOnChange} />
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

const SDropDown = Styled.div<{ isOpen?: boolean; isChecked: boolean; state: string[] }>`
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
        cursor : pointer;
        width:844px;
        height:62.6px;
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
      }
      &--inner{
        display : flex;
        justify-content : space-between;
        align-items : center;
        width : 100%;
        height: 100%;
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
      color: ${(props) => props.state.length === 0 && '#c1c1c1'};
    }
  }

  .line{
    padding : 0;
    width:804px;
    height : 1px;
    background-color : #dfdfdf;
    margin : 13px 0 14px 0 ;
  }
  .container{
    width:844px;
    height: 212px;
    margin-top: 5px;
    border: 1px solid #c1c1c1;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 20px 18px;
    z-index : 10;
    background-color : #ffffff;
    overflow-y: scroll;
    ::-webkit-scrollbar {    
        width: 4px;  
        height: 38px;
    }  
    /* Track */  
    ::-webkit-scrollbar-track {    
        background: none;  
    }  
    /* Handle */  
    ::-webkit-scrollbar-thumb {   
        background: #dfdfdf;    
        border-radius: 20px;  
    }  
    /* Handle on hover */  
    ::-webkit-scrollbar-thumb:hover {    
        background: #c1c1c1;  
    }
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
    color: '#8b8b8b';
  }  
}
`;

export default DropDown;
