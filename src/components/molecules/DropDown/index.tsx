import { ArrowDownIcon, ArrowUpIcon } from 'assets/images';
import React, { useEffect, useState } from 'react';
import * as S from './style';

export interface IProps {
  title?: string;
  className?: string;
  setState: (value: string) => void;
  state: string;
  defaultMsg: string;
  itemList: string[];
  page: string;
  isSetting?: boolean;
}

function DropDown({ title, setState, state, defaultMsg, itemList, page, isSetting }: IProps): React.ReactElement {
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
      {title && <S.Title>{title}</S.Title>}
      <S.SummaryOuter isOpen={isOpen} isChecked={isChecked} page={page} isSetting={isSetting}>
        <S.SummaryInner
          onClick={handleOpenOnClick}
          isOpen={isOpen}
          isChecked={isChecked}
          page={page}
          isSetting={isSetting}
        >
          <S.SummaryValue>{state}</S.SummaryValue>
          <S.Arrow src={isOpen ? ArrowUpIcon : ArrowDownIcon}></S.Arrow>
        </S.SummaryInner>
      </S.SummaryOuter>
      {isOpen && (
        <S.ListContainer page={page} isSetting={isSetting}>
          {itemList.map((item, id) => {
            return (
              <div key={id}>
                <S.Label>
                  <S.Input type="radio" name="radio" value={item} onChange={handleOnChange} />
                  <S.Item page={page}>{item}</S.Item>
                </S.Label>
                {id !== itemList.length - 1 && <S.Line page={page} isSetting={isSetting} />}
              </div>
            );
          })}
        </S.ListContainer>
      )}
    </>
  );
}

export default DropDown;
