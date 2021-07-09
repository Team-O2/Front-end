import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import Label from 'components/atoms/Label';
import Button from 'components/atoms/Button';
import AdminWriteForm from 'components/molecules/AdminWriteForm';

function AdminWrite(): React.ReactElement {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isConditionMet, setIsConditionMet] = useState({
    title: false,
    category: false,
    menu: false,
    content: false,
    hashtag: false,
  });
  const [writeData, setWriteData] = useState({
    title: '',
    category: [''],
    menu: '',
    content: '',
    hashtag: [''],
  });
  useEffect(() => {
    if (
      isConditionMet.title &&
      isConditionMet.category &&
      isConditionMet.menu &&
      isConditionMet.content &&
      isConditionMet.hashtag
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [isConditionMet]);

  return (
    <SAdminWrite isButtonDisabled={isButtonDisabled}>
      <Label className="admin__label--page" name="관리자 페이지" />
      <Label className="admin__label--title" name="글 올리기" />
      <AdminWriteForm setIsConditionMet={setIsConditionMet} writeData={writeData} setWriteData={setWriteData} />
      <Button className="admin__button--fin" disabled={isButtonDisabled}>
        등록하기
      </Button>
    </SAdminWrite>
  );
}

const SAdminWrite = Styled.div<{ isButtonDisabled?: boolean }>`
    display : flex;
    flex-direction: column;
    align-items: center;
    .admin{
        &__label{
            &--page{
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: -0.5px;
                color : #3d3d3d;
                margin-top : 60px;
            }
            &--title{
                font-size: 48px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.42;
                letter-spacing: -0.5px;
                color:#3d3d3d;
                margin-top:10px;
                margin-bottom : 110px;
            }
        }
        &__button{
            &--fin{
                width: 406px;
                height: 60px;
                border-radius: 4px;
                font-size : 16px;
                font-weight : bold;  
                line-height: 1.38;
                      letter-spacing: -0.5px;   
                color : #ffffff; 
                background-color : ${(props) => (props.isButtonDisabled ? '#dfdfdf' : undefined)};
                background-image : ${(props) =>
                  !props.isButtonDisabled ? 'linear-gradient(to right, #36c8f5,#13e2dd )' : undefined};        
                margin-bottom : 304px;
            }
        }
    }
  `;

export default AdminWrite;
