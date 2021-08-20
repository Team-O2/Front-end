import { EditWhiteIcon } from 'public/assets/images';
import React from 'react';
import { ISettingUserInfo } from 'types/setting.type';
import * as S from './style';

interface IProps {
  userInfo: ISettingUserInfo;
  imgInput: React.RefObject<HTMLInputElement>;
  handleInputImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ProfileEdit({ userInfo, imgInput, handleInputImg }: IProps): React.ReactElement {
  return (
    <S.ProfileContainer>
      <S.ProfileImg url={userInfo.img} />
      <label htmlFor="file">
        <S.EditButton src={EditWhiteIcon} />
      </label>
      <S.ProfileInput
        type="file"
        id="file"
        accept="image/jpeg, image/jpg, image/png"
        ref={imgInput}
        onChange={handleInputImg}
      />
    </S.ProfileContainer>
  );
}

export default ProfileEdit;
