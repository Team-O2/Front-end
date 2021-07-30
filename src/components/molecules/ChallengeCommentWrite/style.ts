import Styled from 'styled-components';

const SCommentWrite = Styled.div<{ isCommentt: boolean }>`
  .form{
    display: flex;
    flex-direction: column;
    align-items : flex-end;
  }
    font-family: 'AppleSDGothicNeo';
  .input {
    width: ${({ isCommentt }) => (isCommentt ? '724px' : '591px')};
    height: ${({ isCommentt }) => (isCommentt ? '110px' : '54px')};
    margin: 0 0 8px;
    font-size: 16px;
    padding: 15px 15px;
    opacity: 0.5;
    align-items:center;

  } 
  .comment__submit{
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.5px;
      color: #555555;
      border:none;
      background-color:#FFFFFF;
  }
  .button {
    font-size: ${({ isCommentt }) => (isCommentt ? '16px' : '14px')};
    font-weight: bold;
    color:#555555;
    margin-top: 8px;
    &:hover{
      cursor: pointer;
      opacity: 70%;
    }
`;

export default SCommentWrite;
