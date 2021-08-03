import { HamArrowDownIcon, HamArrowUpIcon } from 'assets/images';
import { Link } from 'components/atoms';
import React, { useState } from 'react';
import {
  Detail,
  DetailBtn,
  DetailBtnContainer,
  DetailContainer,
  FakeBtn,
  Hide,
  Label,
  LabelIcon,
  Title,
  Wrapper,
} from './style';

export interface IProps {
  className?: string;
  title: string;
  itemList: {
    name: string;
    link: string;
  }[];
  isEnglish: boolean;
}

function HamDropDown({ title, itemList, isEnglish }: IProps): React.ReactElement {
  const [isOpened, setIsOpened] = useState(false);
  const handleOpenOnClick = (): void => {
    setIsOpened(!isOpened);
  };

  return (
    <Wrapper>
      <Title onClick={handleOpenOnClick}>
        <>
          <Label isOpened={isOpened} isEnglish={isEnglish}>
            {title}
          </Label>
          <LabelIcon src={isOpened ? HamArrowUpIcon : HamArrowDownIcon} />
        </>
      </Title>
      {isOpened && (
        <Detail>
          <DetailContainer>
            <DetailBtnContainer>
              {itemList.map((value, id) => {
                return (
                  <Link key={id} to={value.link}>
                    <DetailBtn>{value.name}</DetailBtn>
                  </Link>
                );
              })}
              <FakeBtn>_</FakeBtn>
            </DetailBtnContainer>
            <Hide></Hide>
          </DetailContainer>
        </Detail>
      )}
    </Wrapper>
  );
}

export default HamDropDown;
