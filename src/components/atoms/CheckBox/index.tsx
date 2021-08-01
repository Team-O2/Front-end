import React from 'react';
import Styled from 'styled-components';

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  id?: string;
  value?: string;
  className?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, isChecked?: boolean) => void;
}

function CheckBox({ ...props }: IProps): React.ReactElement {
  return <SCheckBox type="checkbox" {...props} />;
}

const SCheckBox = Styled.input``;

export default CheckBox;
