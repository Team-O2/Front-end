import { HamburgerIcon, O2Icon } from 'assets/images';
import { Button, Link, Modal } from 'components/atoms';
import { Hamburger } from 'components/organisms';
import React, { useState } from 'react';
import { ButtonWrapper, HeaderButton, HeaderWrapper, HideWrap } from './style';

function Header(): React.ReactElement {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const handleHamburgerOpen = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <HeaderWrapper>
        <ButtonWrapper>
          <Button onClick={handleHamburgerOpen}>
            <HeaderButton src={HamburgerIcon}></HeaderButton>
          </Button>
          <Link to="/">
            <Button>
              <HeaderButton src={O2Icon}></HeaderButton>
            </Button>
          </Link>
        </ButtonWrapper>
        <Modal isOpen={hamburgerOpen} setIsOpen={setHamburgerOpen} isBlur={false}>
          <Hamburger />
        </Modal>
      </HeaderWrapper>
      <HideWrap></HideWrap>
    </>
  );
}

export default Header;
