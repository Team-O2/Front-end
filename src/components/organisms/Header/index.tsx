import React, { useState } from 'react';
import Styled from 'styled-components';
import Button from '../../atoms/Button/index';
import Hamburger from 'components/organisms/Hamburger';
import Modal from 'components/atoms/Modal';

import Ham_Logo from '../../../assets/images/hamburgerLogo.svg';
import O2_Logo from '../../../assets/images/header_logo.svg';

function Header(): React.ReactElement {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const hamburgerOpenClickListener = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <HeaderWrap>
        <div className="header_buttons">
          <Button onClick={hamburgerOpenClickListener}>
            <img className="button" src={Ham_Logo}></img>
          </Button>
          <Button>
            <img className="button" src={O2_Logo}></img>
          </Button>
        </div>
        <Modal isOpen={hamburgerOpen} setIsOpen={setHamburgerOpen} isBlur={false}>
          <Hamburger />
        </Modal>
      </HeaderWrap>
      <HideWrap></HideWrap>
    </>
  );
}

const HeaderWrap = Styled.div`
  position: fixed;
  top:0;
  left:0;
  z-index:999;
    height : 80px;
    width : 100vw;
    background-color : #242424;
    .header_buttons{
        display : flex;
        height : 80px;
        margin-left : 50px;
        align-items : center;
    }  
    .button{
        width : 32px;
    }  
`;

const HideWrap = Styled.div`
  height : 80px;
  width : 100vw;
`;

export default Header;
