import { CheckOffIcon, CheckOnIcon } from 'assets/images';
import { AdminChallengeOpenForm } from 'components/molecules';
import { ChallengeOpenPhotoUpload } from 'components/organisms';
import React from 'react';
import { IConditionMet } from 'types/challenge.type';
import {
  CheckContainer,
  CheckExp,
  CheckImage,
  ElementLabel,
  OpenButton,
  PageLabel,
  SCheckBox,
  Title,
  UploadContainer,
  Wrapper,
} from './style';

interface IProps {
  isConditionMet: IConditionMet;
  setImage: (image: File | null) => void;
  isChecked: boolean;
  checkHandler: () => void;
  isButtonDisabled: boolean;
  btnHandler: () => Promise<void>;
  handleTitleOnChange: (value: string | number) => void;
  handleChallengeStOnChange: (value: string | number) => void;
  handleChallengeEndOnChange: (value: string | number) => void;
  handleApplyStOnChange: (value: string | number) => void;
  handleApplyEndOnChange: (value: string | number) => void;
  handleNumOnChange: (value: string | number) => void;
}

function AdminChallengeOpenTemplate({
  handleTitleOnChange,
  isConditionMet,
  setImage,
  isChecked,
  checkHandler,
  isButtonDisabled,
  btnHandler,
  handleChallengeStOnChange,
  handleChallengeEndOnChange,
  handleApplyStOnChange,
  handleApplyEndOnChange,
  handleNumOnChange,
}: IProps): React.ReactElement {
  return (
    <Wrapper>
      <PageLabel>관리자 페이지</PageLabel>
      <Title>챌린지 등록</Title>
      <AdminChallengeOpenForm
        isConditionMet={isConditionMet}
        handleTitleOnChange={handleTitleOnChange}
        handleChallengeStOnChange={handleChallengeStOnChange}
        handleChallengeEndOnChange={handleChallengeEndOnChange}
        handleApplyStOnChange={handleApplyStOnChange}
        handleApplyEndOnChange={handleApplyEndOnChange}
        handleNumOnChange={handleNumOnChange}
      />
      <UploadContainer>
        <ElementLabel>사진 업로드</ElementLabel>
        <ChallengeOpenPhotoUpload setImage={setImage} />
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
