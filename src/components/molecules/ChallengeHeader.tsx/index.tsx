import CategoryList from 'components/organisms/CategoryList';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import AllFeedIcon from '../../../assets/images/allfeedIcon.svg';
import MyFeedIcon from '../../../assets/images/myfeedIcon.svg';
import WriteIcon from '../../../assets/images/writeIcon.svg';
import SearchForm from '../../organisms/SearchForm';

export interface IProps {
  className?: string;
}

//user상태 :
// 0: 비회원,
// 1: 챌린지안하는유저,
// 2: 챌린지하는유저,
// 3: 챌린지하는유저&챌린지종료,
// 4: 관리자

function ChallengeHeader({ ...props }: IProps) {
  const [userState, setUserState] = useState(2);
  return (
    <SChallengeHeader {...props}>
      <div className="title">
        <p className="title__text">Learn Myself 2nd</p>
      </div>
      <CategoryList />
      <SearchForm />
      {userState === 1 || userState === 0 ? null : (
        <div>
          <button className="button__icon">
            <Link to="/write">
              <img className="write__icon" src={WriteIcon}></img>
            </Link>
          </button>
          <button className="button__icon2">
            <img className="allfeed__icon" src={AllFeedIcon}></img>
          </button>
          <button className="button__icon3">
            <img className="myfeed__icon" src={MyFeedIcon}></img>
          </button>
        </div>
      )}
    </SChallengeHeader>
  );
}

const SChallengeHeader = Styled.div`
    width: 844px;
    margin:0 auto;

    .title{
      font-size: 46px;
      font-family: 'HomepageBaukasten';
      font-weight: bold;
      color: #3d3d3d;
      margin: 100px auto 110px;
      &__text{
        text-align:center;
      }
    }
    .header{
        display: inline-block;

        &__icon{
            padding-top:300px;
            display:inline-block;
        }

        &__category{
            display: inline-block;
            font-family: AppleSDGothicNeo;
            font-size: 32px;
            font-weight: bold;
            line-height: 1.31;
            letter-spacing: -0.5px;
            padding-left:10px;
        }
    }
    .icon{
        width:24px;
        height:24px;
    }
    .button__icon{
        position: fixed;
        margin-top:60px;
        right: 40px;
        border-radius:100%;
        height:64px;
        background-color:#FFFFFF;
        border:none;
    }

    .button__icon2{
        position: fixed;
        padding-bottom: 40px;
        right: 40px;
        border-radius:100%;
        height:64px;
        background-color:#FFFFFF;
        border:none;

    }
    .button__icon3{
        position: fixed;
        right: 40px;
        border-radius:100%;
        height:64px;
        background-color:#FFFFFF;
        border:none;

    }
    
    .write__icon{
        width:64px;
        height:64px;
        align-items:center;
    }
    .allfeed__icon{
        width:64px;
        height:64px;
        align-items:center;
    }
    .myfeed__icon{
        width:64px;
        height:64px;
        align-items:center;
    }

`;

export default ChallengeHeader;
