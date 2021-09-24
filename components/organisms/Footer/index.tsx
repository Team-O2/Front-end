import { Img, Link } from 'components/atoms';
import { PolicyModal } from 'components/molecules';
import { HeaderLogoIcon } from 'public/assets/images';
import React, { useState } from 'react';
import { policyList } from 'resources/policyList';
import { Designer, Developer, FooterWrapper, Info, Logo, Member, Planner, Server, Text } from './style';
function Footer(): React.ReactElement {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);
  const serviceModalHandler = (): void => {
    setIsServiceOpen(!isServiceOpen);
  };
  const personalModalHandler = (): void => {
    setIsPersonalOpen(!isPersonalOpen);
  };
  return (
    <FooterWrapper>
      <Logo>
        <Img src={HeaderLogoIcon} alt="" />
      </Logo>
      <Text>
        <Info>
          <Link to="/">
            <span>Open Together</span>
          </Link>
          <span onClick={serviceModalHandler}>이용약관</span>
          <span onClick={personalModalHandler}>개인정보 처리방침</span>
          <Link to="/notice">
            <span>공지사항</span>
          </Link>
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
            <p>Seolhui</p>
          </Server>
        </Member>
      </Text>
      <PolicyModal
        isPolicyOpen={isServiceOpen}
        setIsPolicyOpen={setIsServiceOpen}
        title={policyList[0].title}
        content={policyList[0].content}
      />
      <PolicyModal
        isPolicyOpen={isPersonalOpen}
        setIsPolicyOpen={setIsPersonalOpen}
        title={policyList[1].title}
        content={policyList[1].content}
      />
    </FooterWrapper>
  );
}

export default Footer;
