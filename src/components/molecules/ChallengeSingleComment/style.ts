import Styled from 'styled-components';

const SSingleComment = Styled.div`
  display: flex;
  flex-direction: column;
  .comment {
    display: flex;
    align-items:flex-start;
    justify-content: space-between;
    margin: 0 auto ;
    width: 724px;
    line-height: 1.43;
    font-family: 'AppleSDGothicNeo';   
    &__profile {
      border-radius : 100%;
      width: 28px;
      height: 28px;
    }
    &__writer {
      margin: 0 13px;
      width : 86px;
      font-size: 16px;
      font-weight: bold;
    }
    &__text {
      margin-right : 8px;
      width : 585px;
      white-space : normal;
      word-break:break-all;
      color: #6f6f6f;
      font-size: 16px;
    }
    &__toggle {
      cursor : pointer;
      width: 50px;
      text-align : right;
      white-space : nowrap;
      color: #36c8f5;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .reply {
    display: flex;
    flex-direction: column;
    align-items : flex-end;
    margin: 8px 0 31px;
    &__write {
      margin-bottom:20px;
    }
  }
`;

export default SSingleComment;
