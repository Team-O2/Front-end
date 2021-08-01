import Styled from 'styled-components';

export const SFindPWDWrap = Styled.div<{ isBtnDisabled: boolean }>`
    display : flex;
    flex-direction : column;
    align-items : center;
    margin-top : 230px;
    margin-bottom : 250px;
    .modal{
      &__container{
        
      }
      &__iconBack{

      }
    }
    .findPwd{
        &__label{
            &--title{
                font-size: 36px;
                font-weight: bold;
                line-height: 1.22;
                letter-spacing: -0.5px;
                color : #0d0d0d;
                margin-bottom : 60px;
            }
            &--subtitle{
                font-size: 18px;
                font-weight: bold;
                line-height: 1.33;
                letter-spacing: -0.5px;
                color : #0d0d0d;
            }
        }
        &__button{
            margin-top : 14px;
            width : 406px;
            height : 60px;
            border-radius : 4px;
            color : #ffffff;
            font-size: 16px;
            font-weight: bold;
            line-height: 1.38;
            letter-spacing: -0.5px;
            background-image : ${(props) => props.isBtnDisabled && 'linear-gradient(to right , #36c8f5, #13e2dd)'};
            background-color : ${(props) => !props.isBtnDisabled && '#dfdfdf'};
        }
    }
`;
