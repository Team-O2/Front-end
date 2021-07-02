import React, { useContext } from 'react';
import Styled from 'styled-components';
import Joinform from '../../molecules/Joinform/index';
import Label from 'components/atoms/Label';
import Button from 'components/atoms/Button';

function CJoin(): React.ReactElement {
  return (
    <JoinWrap>
      <Label className="join_label">회원가입</Label>
      <Joinform />
      <Button className="join_button">가입 완료</Button>
    </JoinWrap>
  );
}

const JoinWrap = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  .join{
    &_label{
      font-size: 40px;
      font-weight: bold;
      margin-bottom : 20px;
    }
    &_button{
      width: 406px;
      height: 60px;
      background-color : #dfdfdf;
      border-radius: 4px;
      font-size : 16px;
      font-weight : bold;     
      color : #ffffff; 
      margin-top : 60px;
      /* //활성화 될경우
      background-image: linear-gradient(to right, #36c8f5,#13e2dd ); */
    }
  }
`;

export default CJoin;
