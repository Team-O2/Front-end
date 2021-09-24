import { PolicyModal } from 'components/molecules';
import { CheckAllOffIcon, CheckAllOnIcon, CheckOffIcon, CheckOnIcon } from 'public/assets/images';
import React, { useEffect, useState } from 'react';
import { policyList } from 'resources/policyList';
import { IUserDataType } from 'types/user.type';
import {
  BiggerCheckBox,
  BiggerLabel,
  CheckAllImg,
  CheckImg,
  FlexContainer,
  ImgWrapper,
  Label,
  Line,
  MoreBtn,
  PolicyCheck,
  SmallerCheckBox,
  Wrapper,
} from './style';

export interface IProps {
  className?: string;
  setUserData: (value: IUserDataType) => void;
  userData: IUserDataType;
}

function JoinCheck({ setUserData, userData }: IProps): React.ReactElement {
  const [checkAll, setCheckAll] = useState(false);
  const [isChecked, setIsChecked] = useState({
    check1: false,
    check2: false,
    check3: false,
  });
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [policyTitle, setPolicyTitle] = useState('');
  const [policyContent, setPolicyContent] = useState('');

  const handleCheckAll = (): void => {
    if (!checkAll) {
      setCheckAll(true);
      setIsChecked({
        check1: true,
        check2: true,
        check3: true,
      });
    }
    if (checkAll) {
      setCheckAll(false);
      setIsChecked({
        check1: false,
        check2: false,
        check3: false,
      });
    }
  };
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
      case 'policy1':
        setIsChecked({
          ...isChecked,
          check1: !isChecked.check1,
        });
        break;
      case 'policy2':
        setIsChecked({
          ...isChecked,
          check2: !isChecked.check2,
        });
        break;
      case 'policy3':
        setIsChecked({
          ...isChecked,
          check3: !isChecked.check3,
        });
        break;
    }
  };
  const modalHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(e.currentTarget.value);
    setIsPolicyOpen(!isPolicyOpen);
    switch (e.currentTarget.value) {
      case 'policy1':
        setPolicyTitle(policyList[0].title);
        setPolicyContent(policyList[0].content);
        break;
      case 'policy2':
        console.log();
        setPolicyTitle(policyList[1].title);
        setPolicyContent(policyList[1].content);
        break;
      case 'policy3':
        setPolicyTitle(policyList[2].title);
        setPolicyContent(policyList[2].content);
        break;
    }
  };

  useEffect(() => {
    setUserData({ ...userData, marpolicy: isChecked.check3 });
  }, [isChecked.check3]);
  useEffect(() => {
    if (isChecked.check1 && isChecked.check2) {
      setUserData({ ...userData, policyMust: true });
    } else {
      setUserData({ ...userData, policyMust: false });
    }
  }, [isChecked.check1, isChecked.check2]);
  useEffect(() => {
    if (isChecked.check1 && isChecked.check2 && isChecked.check3) setCheckAll(true);
    else setCheckAll(false);
  }, [isChecked.check1, isChecked.check2, isChecked.check3]);

  return (
    <Wrapper>
      <div>
        <FlexContainer>
          <BiggerCheckBox type="checkbox" checked={checkAll} onChange={handleCheckAll} id="policyAll" />
          <BiggerLabel htmlFor="policyAll">
            <ImgWrapper>
              <CheckAllImg src={checkAll ? CheckAllOnIcon : CheckAllOffIcon} />
            </ImgWrapper>
            전체 동의 (선택 정보 포함)
          </BiggerLabel>
        </FlexContainer>
        <Line />
        <PolicyCheck>
          <FlexContainer>
            <SmallerCheckBox
              type="checkbox"
              checked={isChecked.check1}
              name="policy1"
              onChange={handleCheck}
              id="policy1"
            />
            <Label htmlFor="policy1">
              <ImgWrapper>
                <CheckImg src={isChecked.check1 ? CheckOnIcon : CheckOffIcon} />
              </ImgWrapper>
              (필수) 서비스 이용약관 동의
            </Label>
          </FlexContainer>
          <MoreBtn onClick={modalHandler} value="policy1">
            보기
          </MoreBtn>
        </PolicyCheck>
        <PolicyCheck>
          <FlexContainer>
            <SmallerCheckBox
              type="checkbox"
              checked={isChecked.check2}
              name="policy2"
              onChange={handleCheck}
              id="policy2"
            />
            <Label htmlFor="policy2">
              <ImgWrapper>
                <CheckImg src={isChecked.check2 ? CheckOnIcon : CheckOffIcon} />
              </ImgWrapper>
              (필수) 개인정보 수집 이용 동의
            </Label>
          </FlexContainer>
          <MoreBtn onClick={modalHandler} value="policy2">
            보기
          </MoreBtn>
        </PolicyCheck>
        <PolicyCheck>
          <FlexContainer>
            <SmallerCheckBox
              type="checkbox"
              checked={isChecked.check3}
              name="policy3"
              onChange={handleCheck}
              id="policy3"
            />
            <Label htmlFor="policy3">
              <ImgWrapper>
                <CheckImg src={isChecked.check3 ? CheckOnIcon : CheckOffIcon} />
              </ImgWrapper>
              (선택) 광고성 정보 수신 및 마케팅 활용 동의
            </Label>
          </FlexContainer>
          <MoreBtn onClick={modalHandler} value="policy3">
            보기
          </MoreBtn>
        </PolicyCheck>
      </div>
      <PolicyModal
        isPolicyOpen={isPolicyOpen}
        setIsPolicyOpen={setIsPolicyOpen}
        title={policyTitle}
        content={policyContent}
      />
    </Wrapper>
  );
}

export default JoinCheck;
