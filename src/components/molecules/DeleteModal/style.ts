import Styled from 'styled-components';

export const Wrapper = Styled.div`
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin:auto;
  border-radius: 16px;
  background-color: #FFFFFF;
  width: 500px;
  height: 312px;

  .delete {
    &__notice{
      padding: 0px 80px 0px 80px;
    }

    &__img{
      display:flex;
      margin:auto;
      margin-top:-40px;

    }
    &__title{
      padding:20px 0px 20px 0px;
      text-align: center;
      line-height: 1.42;
      letter-spacing: -0.5px;
      color: #000000;
      font-size: 48px;
      font-weight: bold;
    }
    &__detail{
      text-align: center;
      line-height: 1.5;
      letter-spacing: -0.5px;
      color: var(--colors-grayscale-0-d-black);
      font-size: 16px;
    }
    &__button{
      padding-top:50px;
      text-align: center;

    }
    &__delete{
      padding-left:170px;
      line-height: 1.33;
      letter-spacing: -0.5px;
      color: #E04747;
      font-size: 18px;
      font-weight: bold;;

    }
    &__cancel{
      line-height: 1.33;
      letter-spacing: -0.5px;
      color: #C1C1C1;
      font-size: 18px;
      font-weight: bold;
    }
  }
`;
