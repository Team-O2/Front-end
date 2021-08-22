import { SettingPwdSuccessModal } from 'components/molecules';
import { SettingPwd } from 'components/organisms';
import React from 'react';

interface IProps {
  isOldPwOkay: boolean;
  pw: {
    pw: string;
    pwCheck: string;
  };
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPw: (value: { pw: string; pwCheck: string }) => void;
  handleClickButton: () => Promise<void>;
  handleOnChange: (value: string) => void;
}

function SettingPwdTemplate({
  isOldPwOkay,
  pw,
  isOpen,
  setIsOpen,
  setPw,
  handleOnChange,
  handleClickButton,
}: IProps): React.ReactElement {
  return (
    <div>
      <SettingPwd
        isOldPwOkay={isOldPwOkay}
        pw={pw}
        setPw={setPw}
        handleOnChange={handleOnChange}
        handleClickButton={handleClickButton}
      />
      {isOpen && <SettingPwdSuccessModal setIsOpen={setIsOpen} url="/setting" />}
    </div>
  );
}

export default SettingPwdTemplate;
