import { ArrowDownIcon, ArrowUpIcon } from 'public/assets/images';
import React, { useEffect, useState } from 'react';
import * as S from './style';

export interface IProps {
  title?: string;
  setState: (value: string) => void;
  state: string[];
  defaultMsg: string;
  itemList: string[];
}

function DropDownMulti({ title, setState, state, defaultMsg, itemList }: IProps): React.ReactElement {
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
      {title && <S.Title>카테고리</S.Title>}
      <S.SummaryOuter isOpen={isOpen} isChecked={isChecked}>
        <S.SummaryInner onClick={handleOpenOnClick}>
          <S.SummaryValue state={state}>{state.length === 0 ? defaultMsg : state.join(', ')}</S.SummaryValue>
          <S.Arrow src={isOpen ? ArrowUpIcon : ArrowDownIcon}></S.Arrow>
        </S.SummaryInner>
      </S.SummaryOuter>
      {isOpen && (
        <S.ListContainer>
          {itemList.map((item, id) => {
            return (
              <div key={id}>
                <S.Label>
                  <S.Input type="radio" name="radio" value={item} onChange={handleOnChange} />
                  <S.Item>{item}</S.Item>
                </S.Label>
                {id !== itemList.length - 1 && <S.Line></S.Line>}
              </div>
            );
          })}
        </S.ListContainer>
      )}
    </>
  );
}

export default DropDownMulti;
