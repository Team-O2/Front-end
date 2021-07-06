import React from 'react';
import Styled from 'styled-components';
import { palette } from 'styled-tools';

export interface IProps {
  title: string;
  children: string | React.ReactElement;
}

function MyPageCard({ title, children }: IProps): React.ReactElement {
  return (
    <Wrapper>
      <p className="subhead2_eng">{title}</p>
      <div className="card">{children}</div>
    </Wrapper>
  );
}

const Wrapper = Styled.span`
  display: inline-block;

  p {
    color: ${palette('grayscale', 2)};
  }

  .card {
    margin: 10px 20px 0 0;
    width: 350px;
    height: 313px;
    flex-grow: 0;
    border-radius: 4px;
    background-color: '#fbfbfb';
  }
`;

export default MyPageCard;
