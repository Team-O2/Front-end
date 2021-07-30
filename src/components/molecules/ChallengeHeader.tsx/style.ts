import Styled from 'styled-components';

const SChallengeHeader = Styled.div`
    margin:0 auto;
    width: 844px;

    .title{
      margin: 100px auto 110px;
      color: #3d3d3d;
      font-family: 'HomepageBaukasten';
      font-size: 46px;
      font-weight: bold;
      &__text{
        text-align:center;
      }
    }
    .header{
        display: inline-block;

        &__icon{
            display:inline-block;
            padding-top:300px;
        }

        &__category{
            display: inline-block;
            padding-left:10px;
            line-height: 1.31;
            letter-spacing: -0.5px;
            font-size: 32px;
            font-weight: bold;
        }
    }
    .icon{
        width:24px;
        height:24px;
    }
    .button__icon{
        position: fixed;
        right: 40px;
        margin-top:60px;
        border:none;
        border-radius:100%;
        background-color:#FFFFFF;
        height:64px;
    }

    .button__icon2{
        position: fixed;
        right: 40px;
        border:none;
        border-radius:100%;
        background-color:#FFFFFF;
        padding-bottom: 40px;
        height:64px;

    }
    .button__icon3{
        position: fixed;
        right: 40px;
        border:none;
        border-radius:100%;
        background-color:#FFFFFF;
        height:64px;
    }
    
    .write__icon{
        align-items:center;
        width:64px;
        height:64px;
    }
    .allfeed__icon{
        align-items:center;
        width:64px;
        height:64px;
    }
    .myfeed__icon{
        align-items:center;
        width:64px;
        height:64px;
    }
    .circle__ani1{
      position: fixed;
      top: 27px;
      left: 288px;
      opacity: 0.1;
      border-radius: 100%;
      background: #58E2FF;
      width: 206px;
      height: 206px;
    }
    
    .circle__ani2{
      position: fixed;
      top: 258px;
      left: 1505px;
      opacity: 0.1;
      border-radius: 100%;
      background: #03B6CE;
      width: 261px;
      height: 261px;
    }

    .circle__ani3{
      position: fixed;
      top: 445px;
      left: 153px;
      opacity: 0.1;
      border-radius: 100%;
      background: #03B6CE;
      width: 62px;
      height: 62px;
    }
    .circle__ani4{
      position: fixed;
      top: 783px;
      left: 1206px;
      opacity: 0.07;
      border-radius:100%;
      background: #03B6CE;
      width: 302px;
      height: 302px;
    }
    .circle__ani5{
      position: fixed;
      top: 807px;
      left: 180px;
      border-radius:100%;
      background: rgba(3, 182, 206, 0.07);
      width: 200px;
      height: 200px;
    }
    .circle__ani6{
      position: absolute;
      top: 1590px;
      left: 1600px;
      transform: matrix(1, 0, 0, -1, 0, 0);
      opacity: 0.1;
      background: rgba(3, 182, 206, 0.5);
      width: 99px;
      height: 99px;
    }
`;

export default SChallengeHeader;
