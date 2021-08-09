import { CheckOffIcon, CheckOnIcon, GreyPlusIcon } from 'assets/images';
import { FileUpload as PhotoUpload } from 'components/atoms';
import { AdminChallengeOpenForm } from 'components/molecules';
import React from 'react';
import { IChallengeOpen, IConditionMet } from 'types/challenge.type';
import {
  CheckContainer,
  CheckExp,
  CheckImage,
  ElementLabel,
  OpenButton,
  PageLabel,
  PhotoUploadBottomDesc,
  PhotoUploadContainer,
  PhotoUploadImage,
  PhotoUploadMiddleDesc,
  SCheckBox,
  Title,
  UploadContainer,
  Wrapper,
} from './style';

interface IProps {
  isConditionMet: IConditionMet;
  setIsConditionMet: (value: IConditionMet) => void;
  challengeOpenData: IChallengeOpen;
  setChallengeOpenData: (value: IChallengeOpen) => void;
  setImage: (image: File | null) => void;
  isChecked: boolean;
  checkHandler: () => void;
  isButtonDisabled: boolean;
  btnHandler: () => Promise<void>;
}

function AdminChallengeOpenTemplate({
  isConditionMet,
  setIsConditionMet,
  challengeOpenData,
  setChallengeOpenData,
  setImage,
  isChecked,
  checkHandler,
  isButtonDisabled,
  btnHandler,
}: IProps): React.ReactElement {
  return (
    <Wrapper>
      <PageLabel>관리자 페이지</PageLabel>
      <Title>챌린지 등록</Title>
      <AdminChallengeOpenForm
        isConditionMet={isConditionMet}
        setIsConditionMet={setIsConditionMet}
        challengeOpenData={challengeOpenData}
        setChallengeOpenData={setChallengeOpenData}
      />
      <UploadContainer>
        <ElementLabel>사진 업로드</ElementLabel>
        <PhotoUpload width="262px" height="216px" setFile={setImage} fileType={0}>
          <PhotoUploadContainer>
            <PhotoUploadImage src={GreyPlusIcon}></PhotoUploadImage>
            <PhotoUploadMiddleDesc>
              대표이미지
              <br />
              (필수)
            </PhotoUploadMiddleDesc>
            <PhotoUploadBottomDesc>(1920px X 253px)</PhotoUploadBottomDesc>
          </PhotoUploadContainer>
        </PhotoUpload>
      </UploadContainer>
      <CheckContainer>
        <SCheckBox id="checkBox" checked={isChecked} onChange={checkHandler} />
        <CheckExp htmlFor="checkBox">
          <CheckImage src={isChecked ? CheckOnIcon : CheckOffIcon} />위 내용을 확인하셨습니까?
        </CheckExp>
      </CheckContainer>
      <OpenButton disabled={isButtonDisabled} isButtonDisabled={isButtonDisabled} onClick={btnHandler}>
        등록하기
      </OpenButton>
    </Wrapper>
  );
}

export default AdminChallengeOpenTemplate;
