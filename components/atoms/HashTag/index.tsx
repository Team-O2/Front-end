import React, { LabelHTMLAttributes } from 'react';
import Styled from 'styled-components';

export interface IProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactElement | string;
}

function HashTag({ children, ...props }: IProps): React.ReactElement {
  return <SHashTag {...props}>{children}</SHashTag>;
}

const SHashTag = Styled.label`
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #f5f5f5;
  font-family: 'AppleSDGothicNeo';
  font-size: 14px;
  color:#a5a5a5;
  margin-right:20px;
`;

export default HashTag;
