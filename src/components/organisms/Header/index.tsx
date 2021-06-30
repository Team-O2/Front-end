import React, { useContext } from 'react';
import Styled from 'styled-components';
import Button from '../../atoms/Button/index';

import Ham_Logo from '../../../assets/images/hamburgerLogo.svg';
import O2_Logo from '../../../assets/images/header_logo.svg';

function Header(): React.ReactElement {
  return (
    <HeaderWrap>
      <div className="header_buttons">
        <Button>
          <img className="button" src={Ham_Logo}></img>
        </Button>
        <Button>
          <img className="button" src={O2_Logo}></img>
        </Button>
      </div>
    </HeaderWrap>
  );
}

const HeaderWrap = Styled.div`
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

export default Header;
