import { SettingForm } from 'components/organisms';
import React from 'react';
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
      <SettingForm
        userInfo={userInfo}
        imgInput={imgInput}
        isBtnAtv={isBtnAtv}
        handleInputImg={handleInputImg}
        handleUserNickname={handleUserNickname}
        handleClickDel={handleClickDel}
        handleUserInterest={handleUserInterest}
        handleUserGender={handleUserGender}
        handleUserMarpolicy={handleUserMarpolicy}
        handleClickEdit={handleClickEdit}
        handlePasswordBtnClicked={handlePasswordBtnClicked}
      />
      {/* TODO: 회원탈퇴 버튼 들어갈 부분 */}
    </S.Container>
  );
}

export default SettingTemplate;
