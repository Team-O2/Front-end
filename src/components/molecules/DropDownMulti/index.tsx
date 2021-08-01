import { ArrowDownIcon, ArrowUpIcon } from 'assets/images';
import React, { useEffect, useState } from 'react';
import { SDropDown } from './style';

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
          <img className="arrow" src={isOpen ? ArrowUpIcon : ArrowDownIcon}></img>
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

export default DropDown;
