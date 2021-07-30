import Styled from 'styled-components';

const SFindPWDFormWrap = Styled.div<{ isConditionMet: { email: boolean; certifiNum: boolean } }>`
    width : 406px;
    display :flex;
    flex-direction : column;
    span{
      font-weight : bold;
    }
    .modal{
      &__container{
        position : fixed;
        top : 0;
        left : 0;
        right : 0;
        bottom : 0;
        margin : auto;
        width: 500px;
        height: 273px;
        display : flex;
        flex-direction : column;
        align-items : center;
        border-radius: 16px;
        border-style: solid;
        border-width: 1px;
        border-image-source: linear-gradient(to right, #36c8f5, #13e2dd);
        border-image-slice: 1;
        background-image: linear-gradient(to right, #ffffff, #ffffff), linear-gradient(to top, #36c8f5, #13e2dd);
        background-origin: border-box;
        background-clip: content-box, border-box;
      }
      &__iconBack{
        display:flex;
        align-items : center;
        justify-content : center;
        margin-top:-40px;
        background-image: linear-gradient(to right, #36c8f5, #13e2dd);
        width: 90px;
        height: 90px;
        border-radius :50px;
      }
      &__title{
        margin-top : 20px;
        margin-bottom : 20px;
        background-image: linear-gradient(to right, #36c8f5, #13e2dd);
        line-height: 1.42;
        letter-spacing: -0.5px;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &__exp{
        text-align : center;
      }
    }

    .findPwd{
        &__label{
            &--subtitle{
                font-size: 18px;
                font-weight: bold;
                line-height: 1.33;
                letter-spacing: -0.5px;
                color : #0d0d0d;
                margin-bottom : 8px;
            }
        }
        &__button{
            &--sendNum{
                background-image : ${(props) =>
                  props.isConditionMet.email && 'linear-gradient(to right , #36c8f5, #13e2dd)'};
                background-color : ${(props) => !props.isConditionMet.email && '#dfdfdf'};
                width : 134px;
                height 60px;
                border-radius : 4px;
                color : #ffffff;
                font-size : 16px;
                font-weight : bold;
                line-height: 1.38;
                letter-spacing: -0.5px;
                
            }
        }
        &__container{
            &--emailFlex{
                display : flex;
                justify-content : space-between;
                margin-bottom : 40px;
            }
        }
    }
`;

export default SFindPWDFormWrap;
