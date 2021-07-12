import Button from 'components/atoms/Button';
import Label from 'components/atoms/Label';
import AdminWriteForm from 'components/molecules/AdminWriteForm';
import { postConcertWrite, postNoticeWrite } from 'libs/axios';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';

function AdminWrite(): React.ReactElement {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isConditionMet, setIsConditionMet] = useState({
    title: false,
    category: false,
    menu: false,
    content: false,
    hashtag: false,
    video: false,
    thumbnail: false,
    nickname: false,
  });
  const [writeData, setWriteData] = useState<{
    title: string;
    category: string[];
    menu: string;
    content: string;
    hashtag: string[];
    video: File | null;
    thumbnail: File | null;
    nickname: string;
  }>({
    title: '',
    category: [''],
    menu: '',
    content: '',
    hashtag: [''],
    video: null,
    thumbnail: null,
    nickname: '',
  });
  const buttonHandler = () => {
    console.log(writeData);
    if (writeData.menu === '공지사항') {
      postNoticeHandler();
    } else {
      postConcertHandler();
    }
  };
  const postConcertHandler = () => {
    postConcertWrite(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlYjI3Y2ZjZmY1NTkyNmM0M2NlN2ZmIn0sImlhdCI6MTYyNjA4ODY1NiwiZXhwIjoxNjI3Mjk4MjU2fQ.uxM51YrnEf6qZsq9tjPbkvRS587g_8xclrC0zxAN0IU',
      {
        videoLink: writeData.video,
        imgThumbnail: writeData.thumbnail,
        title: writeData.title,
        text: writeData.content,
        interest: writeData.category,
        hashtag: writeData.hashtag,
        authorNickname: writeData.nickname,
      },
    );
  };
  const postNoticeHandler = () => {
    postNoticeWrite(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlYjI3Y2ZjZmY1NTkyNmM0M2NlN2ZmIn0sImlhdCI6MTYyNjA4ODY1NiwiZXhwIjoxNjI3Mjk4MjU2fQ.uxM51YrnEf6qZsq9tjPbkvRS587g_8xclrC0zxAN0IU',
      {
        title: writeData.title,
        text: writeData.content,
        interest: writeData.category,
        hashtag: writeData.hashtag,
      },
    );
  };

  useEffect(() => {
    if (writeData.menu === 'Share Together') {
      if (
        isConditionMet.title &&
        isConditionMet.category &&
        isConditionMet.menu &&
        isConditionMet.content &&
        isConditionMet.hashtag &&
        isConditionMet.video &&
        isConditionMet.thumbnail &&
        isConditionMet.nickname
      ) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    } else {
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
    }
  }, [isConditionMet]);

  return (
    <SAdminWrite isButtonDisabled={isButtonDisabled}>
      <Label className="admin__label--page">관리자 페이지</Label>
      <Label className="admin__label--title">글 올리기</Label>
      <AdminWriteForm setIsConditionMet={setIsConditionMet} writeData={writeData} setWriteData={setWriteData} />
      <Button className="admin__button--fin" disabled={isButtonDisabled} onClick={buttonHandler}>
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
