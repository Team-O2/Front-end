import Styled from 'styled-components';

export const SStyledInput = Styled.div<{
  isConditionMet: boolean;
  isFocused: boolean;
  width: string;
  height: string;
  margin?: string;
}>`
  display : flex;
  flex-direction : column;
  margin : ${(props) => props.margin};
  .input{
    border : none;
    font-size : 16px;
    color : #0d0d0d;
    letter-spacing: -0.5px;
    text-align: left;
    width : 100%;
    height : 100%;
    padding: 18px 20px;
    border-radius: 4px;
    font-style: AppleSDGothicNeo;
    
    :placeholder{
      color : #c1c1c1;
    }
    :focus{
      outline : none;
    }
    &__container{
      border-radius : 4px;   
      display : flex;    
      align-items : center;  
      width : ${(props) => props.width};
      height : ${(props) => props.height};
      margin-bottom : 5px;
    }
    &__image--error{
      width : 24px;
      height : 24px;
      margin-right : 15px;
    }
    &__msg--error{
      text-align : left;
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: -0.5px;
      text-align: left;
      color: #f66436;
    }
  }
`;
