import { hamburgerLogo as Ham_Logo, header_logo as O2_Logo } from 'assets/images';
import { Button, Modal } from 'components/atoms';
import { Hamburger } from 'components/organisms';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

function Header(): React.ReactElement {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const handleHamburgerOpen = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <HeaderWrap>
        <div className="header_buttons">
          <Button onClick={handleHamburgerOpen}>
            <img className="button" src={Ham_Logo}></img>
          </Button>
          <Link to="/">
            <Button>
              <img className="button" src={O2_Logo}></img>
            </Button>
          </Link>
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
    height : 60px;
    width : 100vw;
    background-color : #242424;
    .header_buttons{
        display : flex;
        height : 60px;
        margin-left : 50px;
        align-items : center;
    }  
    .button{
        width : 32px;
        margin-right : 20px;
    }  
`;

const HideWrap = Styled.div`
  height : 60px;
  width : 100vw;
`;

export default Header;
