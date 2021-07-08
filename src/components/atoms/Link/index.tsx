import React from 'react';
import Styled from 'styled-components';
import { Link as link } from 'react-router-dom';

export interface IProps {
  children: string | React.ReactElement;
  to: string;
  replace?: boolean;
  className?: string;
}

function Link({ children, to, ...props }: IProps): React.ReactElement {
  return (
    <SLink to={to} {...props}>
      {children}
    </SLink>
  );
}

const SLink = Styled(link)``;

export default Link;
