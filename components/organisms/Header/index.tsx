import { Button, Link, Modal } from 'components/atoms';
import { Hamburger } from 'components/organisms';
import { HamburgerIcon, O2Icon } from 'public/assets/images';
import React, { useState } from 'react';
import { ButtonWrap, ButtonWrapper, HeaderButton, HeaderWrapper, HideWrap } from './style';

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
            <ButtonWrap>
              <HeaderButton src={HamburgerIcon} />
            </ButtonWrap>
          </Button>
          <Link to="/">
            <Button>
              <HeaderButton src={O2Icon} />
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
