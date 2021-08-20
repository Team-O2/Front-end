import React from 'react';
import Styled from 'styled-components';
import { palette } from 'styled-tools';

export interface IProps {
  content: string;
}

function DotText({ content }: IProps): React.ReactElement {
  return (
    <Wrapper>
      <div className="dot"></div>
      <div className="body1">{content}</div>
    </Wrapper>
  );
}

const Wrapper = Styled.div`
  width: 270px;
  height: 18px;
  margin: 0 0 15px 20px;
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  .dot {
    width: 4px;
    height: 4px;
    background-color: ${palette('grayscale', -4)};
    border-radius: 50%;
    margin: 5px 5px 0 0;
  }
`;

export default DotText;
