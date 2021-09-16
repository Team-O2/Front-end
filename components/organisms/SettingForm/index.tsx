import { DropDownMulti, FormInput, ProfileEdit, RemovableTag, ToggleSwitch } from 'components/molecules';
import React from 'react';
import { interestList } from 'resources/string';
import { ISettingUserInfo } from 'types/setting.type';
import * as S from './style';

export interface IProps {
  userInfo: ISettingUserInfo;
  imgInput: React.RefObject<HTMLInputElement>;
  isBtnAtv: boolean;
  handleInputImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUserNickname: (nickname: string) => void;
  handleClickDel: (e: string) => void;
  handleUserInterest: (e: string) => void;
  handleUserIsMarketing: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickEdit: () => Promise<void>;
  handlePasswordBtnClicked: () => void;
}

function SettingForm({
  userInfo,
  imgInput,
  isBtnAtv,
  handleInputImg,
  handleUserNickname,
  handleClickDel,
  handleUserInterest,
  handleUserIsMarketing,
  handleClickEdit,
  handlePasswordBtnClicked,
}: IProps): React.ReactElement {
  return (
    <S.Container>
      <ProfileEdit userInfo={userInfo} imgInput={imgInput} handleInputImg={handleInputImg} />
      <FormInput
        title="아이디"
        width="844px"
        height="60px"
        placeHolder={userInfo.email}
        isConditionMet={userInfo.email !== ''}
        readOnly
      />
      <FormInput
        title="닉네임"
        width="844px"
        height="60px"
        placeHolder={userInfo.nickname}
        onChange={handleUserNickname}
        isConditionMet={userInfo.nickname !== ''}
        errorMsg="닉네임을 입력해주세요"
      />
      <S.CategoryWrapper>
        <DropDownMulti
          title="카테고리"
          state={userInfo.interest}
          setState={handleUserInterest}
          defaultMsg="카테고리를 선택해 주세요 (최대 5개)"
          itemList={interestList}
        />
      </S.CategoryWrapper>
      <S.InterestList>
        {userInfo.interest.map((item: string, idx: number) => {
          return <RemovableTag text={item} setList={handleClickDel} key={idx} />;
        })}
      </S.InterestList>
      <S.Txt>비밀번호 변경</S.Txt>
      <S.PwBtn onClick={handlePasswordBtnClicked}>비밀번호 변경하기</S.PwBtn>
      <S.PolicyCntnr>
        <S.TextWrapper>
          <S.Text>이메일 수신 설정</S.Text>
          <S.TxtSmall>오투에서 진행하는 챌린지, 이벤트, 프로모션에 관한 광고를 수신하겠습니다.</S.TxtSmall>
        </S.TextWrapper>
        <ToggleSwitch checked={userInfo.isMarketing} onChange={handleUserIsMarketing} />
      </S.PolicyCntnr>
      <S.Btn isActive={isBtnAtv} onClick={handleClickEdit}>
        수정완료
      </S.Btn>
    </S.Container>
  );
}

export default SettingForm;
