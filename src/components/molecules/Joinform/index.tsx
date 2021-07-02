import React from 'react';
import Styled from 'styled-components';
import Select from 'react-select';

import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';
import DropDown from 'components/molecules/DropDown';
import JoinCheck from 'components/molecules/JoinCheck';
import { useState } from 'react';
import checkOff from '../../../assets/images/check_off.svg';
import checkOn from '../../../assets/images/check_on.svg';
import checkall_off from '../../../assets/images/checkall_off.svg';
import checkall_on from '../../../assets/images/checkall_on.svg';

function Joinform(): React.ReactElement {
  const agreement = [
    '(필수) 서비스 이용약관 동의',
    '(필수) 개인정보 수집 이용 동의',
    '(선택) 광고성 정보 수신 및 마케팅 활용 동의',
  ];
  const [items, setItems] = useState([false, false, false]);

  return (
    <JoinformWrap>
      <Label className="join_subtitle">아이디(이메일)</Label>
      <Input className="join_input" inputName="userEmail" placeholder="이메일을 입력해 주세요"></Input>
      <Label className="join_subtitle">비밀번호</Label>
      <Input
        className="join_input join_pwd"
        type="password"
        inputName="userPwd"
        placeholder="비밀번호를 입력해 주세요"
      ></Input>
      <Input className="join_input" type="password" inputName="userPwd" placeholder="비밀번호를 입력해 주세요"></Input>
      <Label className="join_subtitle">닉네임</Label>
      <Input
        className="join_input"
        inputName="userEmail"
        placeholder="닉네임에는 한글, 숫자, 밑줄 및 마침표만 사용할 수 있습니다"
      ></Input>
      <Label className="join_subtitle">성별</Label>
      <DropDown className="join_dropdown" />
      <Label className="join_subtitle">약관동의</Label>
      <JoinCheck />
    </JoinformWrap>
  );
}

const JoinformWrap = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  .check{
      width : 22px;
      margin : 10px;
  }

  .join{
    &_dropdown{
      width: 406px;
      height: 60px;
    }
    &_subtitle{
        width : 406px;
        font-size: 18px;
        font-weight: bold;
        color : #0d0d0d;
        margin-top : 40px;
        margin-bottom : 8px;
        line-height: 1.33;
        letter-spacing: -0.5px;
    }
    &_pwd{
        margin-bottom : 14px;
    }
    &_input{
      width: 406px;
      height: 60px;
      border-radius: 4px;
      border : solid 1px #c1c1c1;
      padding: 18px 20px;
      font-size : 16px;
      color : #0d0d0d;
      letter-spacing: -0.5px;
      text-align: left;
      :placeholder{
        color : #c1c1c1;
      }
      :focus{
        outline : none;
        border-style: solid;
        border-width: 1px;
        border-image: linear-gradient(to right, #36c8f5,#13e2dd );
        border-image-slice: 1;
        color : #0d0d0d;
      }
    }
    &_button{
      width: 406px;
      height: 60px;
      border-radius: 4px;
      background-image: linear-gradient(to right, #36c8f5,#13e2dd );
      font-size : 16px;
      font-weight : bold;
      color : #ffffff;
      margin-top : 14px;
    }
  }

`;

export default Joinform;
