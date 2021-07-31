import { HeaderLogoIcon } from 'assets/images';
import React from 'react';
import Styled from 'styled-components';

function Footer(): React.ReactElement {
  return (
    <SFooter>
      <img className="logo" src={HeaderLogoIcon} alt="" />
      <div className="text">
        <div className="info">
          <span>Open Together</span>
          <span>이용약관</span>
          <span>개인정보 처리방침</span>
          <span>공지사항</span>
          <p>Copyright © 2021 Open Together, O2</p>
        </div>
        <div className="member">
          <div className="member__planner">
            <p>Planner</p>
            <p>Eunsol</p>
            <p>Heeyoung</p>
          </div>
          <div className="member__designer">
            <p>Designer</p>
            <p>Hyunkyung</p>
            <p>Suah</p>
            <p>Subin</p>
          </div>
          <div className="member__developer">
            <p>Developer</p>
            <p>Yeongwoo</p>
            <p>Subin</p>
            <p>Hyoin</p>
            <p>Jiyoung</p>
          </div>
          <div className="member__server">
            <p>Server</p>
            <p>Hyunjin</p>
            <p>Seongyong</p>
          </div>
        </div>
      </div>
    </SFooter>
  );
}

const SFooter = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
  width: 100%;
  height: 278px;
  .logo {
    margin-right: 1030px;
    margin-bottom: 27px;
  }
  .info {
    font-size: 16px;
    & span:nth-of-type(1) {
    font-family: 'HomepageBaukasten';
    font-weight: bold;
    }
    span {
      margin-right:20px;
    }
    p {
      margin-top: 10px;
      font-family: 'HomepageBaukasten';
      font-size: 14px;
    }
  }
  .text {
    display: flex;
    line-height: 1.5;
    color:#3d3d3d;
    font-family: 'HomepageBaukasten';
    font-size: 12px;
  }
  .member {
    display: flex;
    margin-left: 140px;
  }
  .member__planner {
    margin-right: 50px;
    & p:nth-of-type(1) {
    font-weight: bold;
    }
  }
  .member__designer {
    margin-right: 50px;
    & p:nth-of-type(1) {
    font-weight: bold;
    }
  }
  .member__developer {
    margin-right: 50px;
    & p:nth-of-type(1) {
    font-weight: bold;
    }
  }
  .member__server {
    margin-right: 50px;
    & p:nth-of-type(1) {
    font-weight: bold;
    }
 }
`;

export default Footer;
