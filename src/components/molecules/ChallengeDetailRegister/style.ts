import Styled from 'styled-components';

const SRegister = Styled.div`
.header{
  &__title{
      padding-top:25px;
      height: 70px;
      text-align: center;
      line-height: 1.56;
      letter-spacing: -0.5px;
      color: var(--colors-grayscale-0-d-black);
      font-size: 18px;
  }
  &__line{
      display: inline-block;
      opacity: 0.4;
      background-color: #c4c4c4;
      width: 100%;
      height: 2px;
  }
  &__fixed{
      position: sticky;
      top: 60px;
      background-color: #FFFFFF;
      width: 100%;
  }
}
  .container{
    margin: 0 auto;
    text-align: center;
  }
    .register{
        margin-bottom:30px;
        border-radius: 10px;
        box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
        background-color: var(--colors-grayscale-ff);
        padding: 50px 30px;
        width: 354px;
        height: 487px;
        &__img{
            display:inline-block;
            padding-top:60px;
            width: 677px;
            height: 1414px;
        }
        &__date{
          margin: 0 243px 4px 0;
          width: 51px;
          height: 21px;
          text-align: center;
          line-height: 1.5;
          letter-spacing: -0.5px;
          color: var(--colors-grayscale-3-d-dark-gray);
          font-size: 14px;
        }
        &__remain{
            margin: 4px 0 0;
            width: 294px;
            height: 44px;
            text-align: left;
            line-height: 1.22;
            letter-spacing: -0.5px;
            color: var(--colors-grayscale-3-d-dark-gray);
            font-size: 36px;
            font-weight: bold;
        }
    }
    .img{
      display:inline-block;
      padding-right:20px;
    }
    .challenge{
        margin-top:40px;
        width: 62px;
        height: 21px;
        line-height: 1.5;
        letter-spacing: -0.5px;
        color: var(--colors-grayscale-3-d-dark-gray);
        font-size: 14px;
        
        &__minus-plus{
          border:none;
          background-color: #FFFFFF;
          cursor: pointer;
        }
        &__setting{
          display:inline-block;
        }
        &__mainbox{
          display:inline-block;
          padding-top:30px;
          padding-left:25px;
        }
        &__box{
          box-sizing: border-box;
          display:inline-block;
          display: flex;
          float:right;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-top: 60px;
          border: solid 1px #dfdfdf;
          border-radius: 4px;
          padding: 0 16px;
          width: 119px;
          height: 36px;
          font-size: 16px;
          font-weight: bold;
        }
        &__detail{
            margin: 4px 0 0;
            width: 294px;
            height: 44px;
            text-align: left;
            line-height: 1.22;
            letter-spacing: -0.5px;
            color: var(--colors-grayscale-3-d-dark-gray);
            font-size: 36px;
            font-weight: bold;
        }
        &__count-set{
            margin: 0 37px 0 0;
            margin-top:60px;
            width: 89px;
            height: 21px;
            text-align: center;
            line-height: 1.5;
            letter-spacing: -0.5px;
            color: var(--colors-grayscale-3-d-dark-gray);
            font-size: 14px;
        }
        &__notice{
            width: 126px;
            height: 18px;
            line-height: 1.5;
            letter-spacing: -0.5px;
            color: #c1c1c1;
            font-size: 12px;
        }
    }
    .card{
      display:inline-block;
      padding:60px 0px 0px 20px;
      vertical-align: top;
    }

    .button{
      margin-top:50px;

        &__register{
          border:none;
          border-radius: 4px;
          background: linear-gradient(91.91deg, #36C8F5 7.34%, #13E2DD 90.35%);
          width:294px;
          height:60px;
          line-height: 22px;
          letter-spacing: -0.5px;
          color: #FFFFFF;
          font-size: 16px;
          font-weight: bold;
        }
    }
    .card__notice{
        border-radius: 10px;
        box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
        background-color: var(--colors-grayscale-ff);
        padding: 30px 30px 30px 28px;
        width: 354px;
        height: 282px;
    }
    .o2__notice{
      text-align: left;
      line-height: 28px;
      letter-spacing: -0.5px;
      color: #3D3D3D;
      font-size: 18px;
    }
    .notice{
      &__img{
        float:right;
      }
      &__num{
        margin-top:20px;
        text-align: left;
        line-height: 20px;
        color: #A5A5A5;
        font-size: 16px;
        font-weight: bold;
      }
      &__detail{
        text-align: left;
        line-height: 24px;
        letter-spacing: -0.5px;
        color: #8B8B8B;
        font-size: 16px;
      }
    }

    .modal{
      &__main{
      position: fixed;
      top:0;
      right:0;
      bottom:0;
      left:0;
      margin:auto;
      border-radius: 16px;
      background-color: #FFFFFF;
      width: 500px;
      height: 613px;

      &-card{
        padding: 80px 80px 80px;
      }
    }


    &__notice{
      line-height: 1.36;
      letter-spacing: -0.5px;
      color: var(--colors-grayscale-3-d-dark-gray);
      font-size: 28px;
      font-weight: bold;

      &-detail{
        padding-top:10px;
        padding-bottom:30px;
        line-height: 1.5;
        letter-spacing: -0.5px;
        color: var(--colors-grayscale-8-b-gray);
        font-size: 16px;
      }
    }

    .modal__button{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border:none;
      border-radius: 0px 0px 16px 16px;
      background: linear-gradient(91.91deg, #36C8F5 7.34%, #13E2DD 90.35%);
      width:500px;
      height:64px;
    }
    .modal__img{
      display:inline-block;
      margin-right: 10px;
    }
    .modal__register-button{
        display:inline-block;
        border:none;
        border-radius: 0px 0px 16px 16px;
        background: linear-gradient(91.91deg, #36C8F5 7.34%, #13E2DD 90.35%);
        line-height: 1.38;
        letter-spacing: -0.5px;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: bold;
    }

    &__detail{
      border-radius: 30px;
      background-color: #f9f9f9;
      padding: 20px 40px 40px 40px;
      height:192px;
      text-align:left;
    }

      &__title{
        display:inline-block;
        padding-top:20px;
        width: calc(100% - 150px);
        text-align:left;
        line-height: 1.5;
        letter-spacing: -0.5px;
        color: var(--colors-grayscale-3-d-dark-gray);
        font-size: 16px;
      }

      &__content{
        display:inline-block;
        text-align:left;
        line-height: 1.38;
        letter-spacing: -0.5px;
        color: var(--colors-grayscale-3-d-dark-gray);
        font-size: 16px;
        font-weight: bold;
      }
      &__icon{ 
        margin-right: 8px;
      }

      &__caution{
        text-align: center;
        letter-spacing: -0.5px;
        color: #3d3d3d;
        font-size: 14px;

        &-detail{
          padding-top:12px;
          text-align: center;
          line-height: 1.5;
          letter-spacing: -0.5px;
          color: #F66436;
          font-size: 14px;
        }
      }

      .submit{
        position: fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        margin:auto;
        border-width: 1px;
        border-style: solid;
        border-radius: 16px;
        border-color:#36C8F5;
        background-color: #FFFFFF;
        width: 500px;
        height: 273px;

        &__icon{
          display:flex;
          margin:auto;
          margin-top:-40px;
        }

        &__title{
          background: linear-gradient(to right, #36c8f5, #13e2dd);
          -webkit-background-clip: text;
          background-clip: text;
          padding-top:20px;
          padding-bottom:40px;
          text-align: center;
          line-height: 68px;
          line-height: 1.42;
          font-size: 48px;
          font-weight: bold;
          -webkit-text-fill-color: transparent;
        }
        &__detail{
          text-align: center;
          line-height: 1.5;
          letter-spacing: -0.5px;
          font-size: 16px;
        }
      }
}`;

export default SRegister;
