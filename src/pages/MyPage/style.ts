import Styled from 'styled-components';
import { ifProp, palette } from 'styled-tools';

export const LearnMyselfModalWrapper = Styled.div<{ isFolded: boolean }>`
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin:auto;
  border-radius: 18px;
  width: 844px;
  height: 607px;

  .wrapper {
    width: 100%;
    height: 544px;
    border-radius: 18px 18px 0 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
  }

  .userInfo {
    display: flex;
    margin: 40px 30px 20px 30px;
    width: calc(100% - 60px);
    height: 80px;
    &__img {
      margin-right: 15px;
      border-radius: 50%;
      width: 80px;
      height: 80px;
    }
    &__infoWrapper {
      display: flex;
      justify-content: center;
      flex-direction: column;

      &--top {
        display: flex;
        align-items: center;
        color: ${palette('grayscale', 7)};
      }

      &--date {
        margin: auto 10px;
        color: ${palette('grayscale', 4)};
      }

      &--tags {
        color: ${palette('grayscale', 5)}
      }
    }
  }

  .textArea {
    margin: 0 60px;
    width: calc(100% - 120px);
    h3 {
      margin: 30px 0 6px 0;
      color: ${palette('grayscale', 7)};
    }
    p {
      color: ${palette('grayscale', 6)};
      word-wrap: break-word;
      overflow: ${ifProp('isFolded', 'hidden')};
      text-overflow: ${ifProp('isFolded', 'ellipsis')};
      white-space: ${ifProp('isFolded', 'nowrap')};
    }
  }

  .comment {
    margin: 0 60px;
    width: calc(100% - 120px);
  }

  .button {
    &__more {
      color: ${palette('primary', 5)};
      margin: 50px 0;
    }

    &__close {
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 63px;
      color: #fff;
      background-color: ${palette('grayscale', 7)};
      border-radius: 0 0 18px 18px;
      
    }
  }
`;

export const SwitchRadio = Styled.input`
  display: none;

  + label {
    cursor: pointer;
    color: ${palette('grayscale', 3)};
  }
  :checked + label {
    color: ${palette('grayscale', 6)};
    padding-bottom: 2px;
    background: 
      linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)})
      left 
      bottom
      #fff
      no-repeat; 
    background-size: 100% 2px;
}
`;

export const Switch = Styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  li {
    margin: 0 20px;
}
`;

export const Wrapper = Styled.div`
  .mypage {
    &__top, &__bottom, &__header {
      display: flex;
      justify-content: center;
      width: 100vw;
    }
    &__header {
      height: 581px;
      background-color: ${palette('grayscale', -2)};
    }
    &__body {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__top {
      margin: 120px 0 150px 0;
    }
    &__bottom {
      padding: 150px 0;
      background-color: #f7f7f7;
    }
  }
`;
