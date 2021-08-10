import { EditWhiteIcon } from 'assets/images';
import { StyledInput } from 'components/atoms';
import { DropDown, DropDownMulti, RemovableTag, ToggleSwitch } from 'components/molecules';
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
  handleUserGender: (e: string) => void;
  handleUserMarpolicy: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickEdit: () => Promise<void>;
  handlePasswordBtnClicked: () => void;
}

function SettingTemplate({
  userInfo,
  imgInput,
  isBtnAtv,
  handleInputImg,
  handleUserNickname,
  handleClickDel,
  handleUserInterest,
  handleUserGender,
  handleUserMarpolicy,
  handleClickEdit,
  handlePasswordBtnClicked,
}: IProps): React.ReactElement {
  return (
    <S.Container>
      <S.ProfileContainer>
        <S.ProfileImg url={userInfo.img} />
        <label htmlFor="file">
          <S.EditBtn src={EditWhiteIcon} />
        </label>
        <S.ProfileInput
          type="file"
          id="file"
          accept="image/jpeg, image/jpg, image/png"
          ref={imgInput}
          onChange={handleInputImg}
        />
      </S.ProfileContainer>
      <S.Txt>아이디</S.Txt>
      <S.Email>{userInfo.email}</S.Email>
      <S.Txt>닉네임</S.Txt>
      <S.NicknameInputContainer>
        <StyledInput
          width="844px"
          height="60px"
          placeHolder={userInfo.nickname}
          onChange={handleUserNickname}
          isConditionMet={userInfo.nickname !== ''}
          errorMsg="닉네임을 입력해주세요"
        />
      </S.NicknameInputContainer>
      <S.Txt>카테고리</S.Txt>
      <S.CategoryContainer>
        <DropDownMulti
          state={userInfo.interest}
          setState={handleUserInterest}
          defaultMsg="카테고리를 선택해 주세요 (최대 5개)"
          itemList={interestList}
        />
      </S.CategoryContainer>
      <S.InterestList>
        {userInfo.interest.map((item: string, idx: number) => {
          return <RemovableTag text={item} setList={handleClickDel} key={idx} />;
        })}
      </S.InterestList>
      <S.Txt>성별</S.Txt>
      <S.DropdownWrapper>
        <DropDown
          state={userInfo.gender === 0 ? '남성' : userInfo.gender === 1 ? '여성' : '선택안함'}
          setState={handleUserGender}
          defaultMsg="성별 선택"
          itemList={['남성', '여성', '선택안함']}
          page="joinform"
          isSetting={true}
        />
      </S.DropdownWrapper>
      <S.Txt>비밀번호 변경</S.Txt>
      <S.PwBtn onClick={handlePasswordBtnClicked}>비밀번호 변경하기</S.PwBtn>
      <S.PolicyCntnr>
        <S.TextWrapper>
          <S.Text>이메일 수신 설정</S.Text>
          <S.TxtSmall>오투에서 진행하는 챌린지, 이벤트, 프로모션에 관한 광고를 수신하겠습니다.</S.TxtSmall>
        </S.TextWrapper>
        <ToggleSwitch checked={userInfo.marpolicy} onChange={handleUserMarpolicy} />
      </S.PolicyCntnr>
      <S.Btn isActive={isBtnAtv} onClick={handleClickEdit}>
        수정완료
      </S.Btn>
    </S.Container>
  );
}

export default SettingTemplate;
