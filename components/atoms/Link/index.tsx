import Link from 'next/link';
import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  children: string | React.ReactElement;
  to: string;
  replace?: boolean;
  className?: string;
}

function CLink({ children, to, ...props }: IProps): React.ReactElement {
  return (
    <SLink href={to} {...props}>
      {children}
    </SLink>
  );
}

const SLink = Styled(Link)``;

export default CLink;
