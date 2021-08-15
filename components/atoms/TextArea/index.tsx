import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  name: string;
  value?: string | number;
  invalid?: boolean;
  disabled?: boolean;
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  autoComplete?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocusOut?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea({ name, autoComplete = 'off', ...props }: IProps): React.ReactElement {
  return <STextArea name={name} autoComplete={autoComplete} {...props} />;
}

const STextArea = Styled.textarea`
  resize:none;
`;

export default TextArea;
