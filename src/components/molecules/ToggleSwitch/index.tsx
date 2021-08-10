import React from 'react';
import * as S from './style';

interface IProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ToggleSwitch({ checked, onChange }: IProps): React.ReactElement {
  return (
    <S.ToggleSwitchContainer checked={checked}>
      <S.SwitchCheckbox checked={checked} onChange={onChange} id="toggle" />
      <S.SwitchLabel htmlFor="toggle">
        <S.Ball></S.Ball>
      </S.SwitchLabel>
    </S.ToggleSwitchContainer>
  );
}

export default ToggleSwitch;
