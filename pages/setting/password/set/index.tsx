import { postNewPw } from 'apis';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import SettingPwdTemplate from '../../../../components/template/setting/set';

function SettingPwdView(): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);

  // 기존 비밀번호 체크
  const [isOldPwOkay, setIsOldPwOkay] = useState(true);
  // 기존 비밀번호
  const [oldPw, setOldPw] = useState('');
  // 새 비밀번호
  const [pw, setPw] = useState({
    pw: '',
    pwCheck: '',
  });
  // 모달 오픈
  const [isOpen, setIsOpen] = useState(false);

  const handleClickButton = async () => {
    const res = await postNewPw(userStatusData?.token, oldPw, pw.pw);
    if (res) {
      // 모달 오픈
      setIsOldPwOkay(true);
      setIsOpen(true);
      // 다음 페이지로 이동
    } else {
      setIsOldPwOkay(false);
    }
  };

  return (
    <SettingPwdTemplate
      isOldPwOkay={isOldPwOkay}
      pw={pw}
      setPw={setPw}
      handleOnChange={setOldPw}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleClickButton={handleClickButton}
    />
  );
}

export default SettingPwdView;
