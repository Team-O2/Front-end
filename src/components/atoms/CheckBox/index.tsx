import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  checked: boolean;
  id?: string;
  className?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, isChecked?: boolean) => void;
}

function CheckBox({ checked, ...props }: IProps): React.ReactElement {
  return <SCheckBox type="checkbox" checked={checked} {...props} />;
}

const SCheckBox = Styled.input``;

export default CheckBox;
