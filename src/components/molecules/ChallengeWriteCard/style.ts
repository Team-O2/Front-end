import Styled from 'styled-components';

const SWriteCard = Styled.div`
    .header{
      padding-top:100px;
      text-align:center;
      line-height: 1.22;
      letter-spacing: -0.5px;
      font-family: HomepageBaukasten;
      font-size: 46px;
      font-weight: bold;
}
    .challenge-card{
        margin: 0 auto;
        padding-top:60px;
        width:844px;

        &__title{
            line-height:38px;
            letter-spacing: -0.5px;
            color: #3D3D3D;
            font-size:22px;
            font-weight: bold;
        }
        &__restriction{
            padding-bottom: 30px;
            text-align: right;
            line-height: 18px;
            color: #B1B1B1;
            font-size: 14px;
            font-weight: bold;
        }
    }
    .textarea{
        box-sizing: border-box;
        align-items: center;
        border: 1px solid #DFDFDF;
        padding: 40px 60px 40px 60px;
        width: 844px;
        height:369px;
        resize:none;
        font-size: 18px;
    }

    .button{
        align-items: center;
        margin: 0 auto;
        width:844px;
    }
    .write__button-color{
        margin: 0 auto;
        margin-top:60px;
        border:none;
        border-radius: 4px;
        width:844px;
        height: 60px;
        text-align: center;
        color: #FFFFFF;
        background: linear-gradient(91.91deg, #36C8F5 7.34%, #13E2DD 90.35%);
    }
    .write__button-black{
        margin: 0 auto;
        margin-top:60px;
        border:none;
        border-radius: 4px;
        width:844px;
        height: 60px;
        text-align: center;
        color: #FFFFFF;
        background: #DFDFDF;
    }
    .character{
      position:sticky;
      top:20px;
      margin: 0 auto;
      background-color:white;
      padding-top:60px;
      width:844px;

      &__black{
        padding-top:29px;
        padding-right:50px;
    }

      &__color-step1{
          padding-top:29px;
          padding-left:200px;
      }
      &__detail-step1{
        padding-left:60px;
      }

      &__color-step2{
          padding-left:450px;
      }
      &__detail-step2{
        padding-left:50px;
      }

      &__color-step3{
          text-align:end;
      }
        &__message{
            padding-top:12.32px;
            padding-bottom: 12px;
            line-height: 1.43;
            letter-spacing: -0.5px;
            font-size: 14px;
            font-weight: bold;
        }
    }   
    .progressbar{
        display: inline-block;
        background-color: #d6d3d3;
        width: 844px;
        height: 5px;
    }
    .gauge__initial{
        display: inline-block;
        background-color: #3abff7;
        width: 1%;
        height: 5px;
    }

    .gauge__quarter{
            display: inline-block;
            background-color: #3abff7;
            width: 34%;
            height: 5px;
        }
    .gauge__half{
            display: inline-block;
            background-color: #3abff7;
            width: 67%;
            height: 5px;
        }
    .gauge__whole{
            display: inline-block;
            background-color: #3abff7;
            width: 100%;
            height: 5px;
        }

    .tag{
      align-items:center;
      margin:0 auto;
      padding-top:60px;
      width:844px;
      text-align: left;
      line-height: 1.33;
      letter-spacing: -0.5px;
      color: var(--colors-grayscale-6-f);
      font-size: 24px;
      font-weight: bold;

      &__moreIcon{
        padding-bottom:5px;
        vertical-align : middle;
      }
  
      &__interest{
          margin : 12px 5px;
          border: solid 1px #8b8b8b;
          border-radius: 60px;
          background-color:#FFFFFF;
          padding : 12px 30px;
          height : 48px;
          line-height: 1.33;
          letter-spacing: -0.5px;
          color : #8b8b8b;
          font-size: 18px;
          font-weight: bold;
        }
        .tag__group{
          padding-top:20px;
        }
        .tag__group-detail{
          box-sizing: border-box;
          border: 1px solid rgba(223, 223, 223, 0.5);
          border-radius: 16px;
          box-shadow: 0px 0px 15px rgba(23, 22, 91, 0.08);
          background: #FFFFFF;
          padding: 20px 30px 30px 30px;
        }
}`;

export default SWriteCard;
