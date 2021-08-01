import Styled from 'styled-components';

export const Wrapper = Styled.div`
  position: relative;

  span {
    display: inline-block;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
    width: 254px;
    height: 259px;
  }

  .card {

    &__icon-wrapper {
      display: flex;
      position: absolute;
      top: 24px;
      right: 24px;
      align-items: center;
      justify-content: center;
      z-index: 1;
      width: 24px;
      height: 24px;
    }
    
    &__img {
      margin: 30px 0 10px 0;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      object-fit: cover;
    }

    &__name {
      margin-bottom: 23px;
    }

    &__content {
      display: box;
      width: 225px;
      height: 3em;
      overflow: hidden;
      text-align: left;
      text-overflow: ellipsis;
      word-break: break-word;
      color: #838383;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;
