import { ArrowDownIcon, ArrowUpIcon } from 'assets/images';
import React, { useEffect, useState } from 'react';
import { Arrow, Input, Item, Label, Line, ListContainer, SummaryInner, SummaryOuter, SummaryValue } from './style';

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
    <>
      <SummaryOuter isOpen={isOpen} isChecked={isChecked}>
        <SummaryInner onClick={handleOpenOnClick}>
          <SummaryValue state={state}>{state.length === 0 ? defaultMsg : state.join(', ')}</SummaryValue>
          <Arrow src={isOpen ? ArrowUpIcon : ArrowDownIcon}></Arrow>
        </SummaryInner>
      </SummaryOuter>
      {isOpen && (
        <ListContainer>
          {itemList.map((item, id) => {
            return (
              <div key={id}>
                <Label>
                  <Input type="radio" name="radio" value={item} onChange={handleOnChange} />
                  <Item>{item}</Item>
                </Label>
                {id !== itemList.length - 1 && <Line></Line>}
              </div>
            );
          })}
        </ListContainer>
      )}
    </>
  );
}

export default DropDown;
