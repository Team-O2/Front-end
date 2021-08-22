import { getUserInfo, updateUserInfo } from 'apis';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import { ISettingUserInfo } from 'types/setting.type';
import SettingTemplate from './template';

function Setting(): React.ReactElement {
  // for edit btn
  const [isBtnAtv, setIsBtnAtv] = useState(true);
  const history = useRouter();

  // for user info
  const setUserData = useSetRecoilState(userState);
  const userStatusData = useRecoilValue(userStatusState);
  const [userInfo, setUserInfo] = useState<ISettingUserInfo>({
    nickname: '',
    img: '',
    marpolicy: true,
    _id: '',
    email: '',
    gender: 0,
    interest: [],
  });

  // for img input
  const imgInput = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState({});
  const [isEmpty, setIsEmpty] = useState(true);

  const handlePasswordBtnClicked = () => {
    history.push('/setting/password/set');
  };

  const handleUserMarpolicy = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserInfo({
      ...userInfo,
      marpolicy: e.target.checked,
    });

  const handleUserGender = (e: string) =>
    setUserInfo({
      ...userInfo,
      gender: e === '남성' ? 0 : e === '여성' ? 1 : 2,
    });

  const handleUserInterest = (e: string) => {
    !userInfo.interest.includes(String(e)) &&
      userInfo.interest.length < 5 &&
      setUserInfo({
        ...userInfo,
        interest: userInfo.interest.concat([String(e)]),
      });
  };

  const handleUserNickname = (nickname: string | number) => {
    setUserInfo({
      ...userInfo,
      nickname: String(nickname),
    });
  };

  const handleInputImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUserInfo({
        ...userInfo,
        img: URL.createObjectURL(e.target.files[0]),
      });
      setImg(e.target.files[0]);
      setIsEmpty(false);
    }
    imgInput.current && imgInput.current.value;
  };

  const handleClickDel = (e: string) => {
    setUserInfo({
      ...userInfo,
      interest: userInfo.interest.filter((it: string) => it !== e),
    });
  };

  const handleClickEdit = async () => {
    if (!isBtnAtv) {
      return;
    }

    let data = null;
    if (!isEmpty) {
      data = await updateUserInfo(
        userStatusData?.token,
        img,
        userInfo.nickname,
        userInfo.interest,
        userInfo.gender,
        userInfo.marpolicy,
      );
    } else {
      data = await updateUserInfo(
        userStatusData?.token,
        undefined,
        userInfo.nickname,
        userInfo.interest,
        userInfo.gender,
        userInfo.marpolicy,
      );
    }
    if (data) {
      history.back();
      setUserData(userInfo);
    }
  };

  // get user info
  useEffect(() => {
    (async () => {
      if (userStatusData) {
        const userInfo = await getUserInfo(userStatusData?.token);
        setUserInfo(userInfo);
      }
    })();
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    userInfo.nickname.length === 0 || userInfo.interest.length === 0 ? setIsBtnAtv(false) : setIsBtnAtv(true);
  }, [userInfo]);

  return (
    <SettingTemplate
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
  );
}

export default Setting;
