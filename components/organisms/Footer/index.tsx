import { Img } from 'components/atoms';
import { HeaderLogoIcon } from 'public/assets/images';
import React from 'react';
import { Designer, Developer, FooterWrapper, Info, Logo, Member, Planner, Server, Text } from './style';

function Footer(): React.ReactElement {
  return (
    <FooterWrapper>
      <Logo>
        <Img src={HeaderLogoIcon} alt="" />
      </Logo>
      <Text>
        <Info>
          <span>Open Together</span>
          <span>이용약관</span>
          <span>개인정보 처리방침</span>
          <span>공지사항</span>
          <p>Copyright © 2021 Open Together, O2</p>
        </Info>
        <Member>
          <Planner>
            <p>Planner</p>
            <p>Eunsol</p>
            <p>Heeyoung</p>
          </Planner>
          <Designer>
            <p>Designer</p>
            <p>Hyunkyung</p>
            <p>Suah</p>
            <p>Subin</p>
          </Designer>
          <Developer>
            <p>Developer</p>
            <p>Yeongwoo</p>
            <p>Subin</p>
            <p>Hyoin</p>
            <p>Jiyoung</p>
          </Developer>
          <Server>
            <p>Server</p>
            <p>Hyunjin</p>
            <p>Seongyong</p>
          </Server>
        </Member>
      </Text>
    </FooterWrapper>
  );
}

export default Footer;
