import React from 'react';
import Styled from 'styled-components';
import Select from 'react-select';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';
import DropDown from 'components/molecules/DropDown';
import CheckBox from 'components/atoms/CheckBox';
import { useState } from 'react';
import checkOff from 'assets/images/check_off.svg';
import checkOn from 'assets/images/check_on.svg';
import checkall_off from 'assets/images/checkall_off.svg';
import checkall_on from 'assets/images/checkall_on.svg';

function JoinCheck(): React.ReactElement {
  const [checkAll, setCheckAll] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const checkAllHandler = (e: React.ChangeEvent<HTMLInputElement>): any => {
    if (!checkAll) {
      setCheckAll(true);
      setCheck1(true);
      setCheck2(true);
      setCheck3(true);
    }
    if (checkAll) {
      setCheckAll(false);
      setCheck1(false);
      setCheck2(false);
      setCheck3(false);
    }
  };

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>): any => {
    switch (e.target.name) {
      case 'policy1':
        setCheck1(!check1);
        break;

      case 'policy2':
        setCheck2(!check2);
        break;

      case 'policy3':
        setCheck3(!check3);
        break;
    }
  };

  return (
    <JoinCheckWrap>
      <div className="flex" style={{ margin: '16px 0 0 0' }}>
        <CheckBox className="check_icon1" checked={checkAll} onChange={checkAllHandler} id="policyAll" />
        <label htmlFor="policyAll" className="policy_exp1">
          {checkAll ? (
            <img src={checkall_on} className="checkAllImg" />
          ) : (
            <img src={checkall_off} className="checkAllImg" />
          )}
          전체 동의 (선택 정보 포함)
        </label>
      </div>
      <div className="line"></div>
      <div className="policy_check">
        <div className="flex">
          <CheckBox className="check_icon2" checked={check1} name="policy1" onChange={checkHandler} id="policy1" />
          <label htmlFor="policy1" className="policy_exp2">
            {check1 ? <img src={checkOn} className="checkimg" /> : <img src={checkOff} className="checkimg" />}
            (필수) 서비스 이용약관 동의
          </label>
        </div>
        <Button className="btn_more">보기</Button>
      </div>
      <div className="policy_check">
        <div className="flex">
          <CheckBox className="check_icon2" checked={check2} name="policy2" onChange={checkHandler} id="policy2" />
          <label htmlFor="policy2" className="policy_exp2">
            {check2 ? <img src={checkOn} className="checkimg" /> : <img src={checkOff} className="checkimg" />}
            (필수) 개인정보 수집 이용 동의
          </label>
        </div>
        <Button className="btn_more">보기</Button>
      </div>
      <div className="policy_check">
        <div className="flex">
          <CheckBox className="check_icon2" checked={check3} name="policy3" onChange={checkHandler} id="policy3" />
          <label htmlFor="policy3" className="policy_exp2">
            {check3 ? <img src={checkOn} className="checkimg" /> : <img src={checkOff} className="checkimg" />}
            (선택) 광고성 정보 수신 및 마케팅 활용 동의
          </label>
        </div>
        <Button className="btn_more">보기</Button>
      </div>
    </JoinCheckWrap>
  );
}

const JoinCheckWrap = Styled.div`
.checkAllImg{
  width : 20px;
  height : 20px;
  margin-right : 16px;
}
.checkimg{
  width: 14.7px;
  height: 10.1px;
  margin-left : 3.7px;
  margin-right : 17px;
}
.check_icon2, .check_icon1{
  display:none;
}

.line{
  width: 406px;
  height: 2px;
  background-color: #c4c4c4;
  margin-top : 18px;
}
 .flex{
    display : flex;
    align-items : center;
 }
 .policy_check{
     margin-top : 19px;
    width : 406px;
    display : flex;
    justify-content : space-between;
    align-items : center;
 }
 .check_icon1{
    width : 22px;
    height : 22px;
    margin-right : 16px
 }
 .check_icon2{
    width : 22px;
    height : 22px;
    margin-right : 16px
 }
 .policy_exp1{
    font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.5px;
  display : flex;
    align-items : center;
 }
 .policy_exp2{
    font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.5px;

  vertical-align : center;
  display : flex;
    align-items : center;
}
.btn_more{
    font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.5px;
  color : #a5a5a5;
}

`;

export default JoinCheck;
