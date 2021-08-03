import { ArrowDownIcon, ArrowUpIcon } from 'assets/images';
import React, { useEffect, useState } from 'react';
import { Arrow, Input, Item, Label, Line, ListContainer, SummaryInner, SummaryOuter, SummaryValue } from './style';

export interface IProps {
  className?: string;
  setState: (value: string) => void;
  state: string;
  defaultMsg: string;
  itemList: string[];
  page: string;
  isSetting?: boolean;
}

function DropDown({ setState, state, defaultMsg, itemList, page, isSetting }: IProps): React.ReactElement {
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
    if (state !== defaultMsg) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [defaultMsg, state]);
  useEffect(() => {
    setState(defaultMsg);
  }, []);

  return (
    <>
      <SummaryOuter isOpen={isOpen} isChecked={isChecked} page={page} isSetting={isSetting}>
        <SummaryInner
          onClick={handleOpenOnClick}
          isOpen={isOpen}
          isChecked={isChecked}
          page={page}
          isSetting={isSetting}
        >
          <SummaryValue>{state}</SummaryValue>
          <Arrow src={isOpen ? ArrowUpIcon : ArrowDownIcon}></Arrow>
        </SummaryInner>
      </SummaryOuter>
      {isOpen && (
        <ListContainer page={page} isSetting={isSetting}>
          {itemList.map((item, id) => {
            return (
              <div key={id}>
                <Label>
                  <Input type="radio" name="radio" value={item} onChange={handleOnChange} />
                  <Item page={page}>{item}</Item>
                </Label>
                {id !== itemList.length - 1 && <Line page={page} isSetting={isSetting} />}
              </div>
            );
          })}
        </ListContainer>
      )}
    </>
  );
}

export default DropDown;
