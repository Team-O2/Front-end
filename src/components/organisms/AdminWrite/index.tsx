import { postConcertWrite, postNoticeWrite } from 'apis';
import { AdminWriteForm } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { PageLabel, Title, Wrapper, WriteButton } from './style';

interface IProps {
  menu: string;
}
function AdminWrite({ menu }: IProps): React.ReactElement {
  const history = useHistory();
  const userStatusData = useRecoilValue(userStatusState);
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
  const handleBtnOnClick = () => {
    if (writeData.menu === '공지사항') {
      postNoticeHandler();
    } else {
      postConcertHandler();
    }
  };
  const postConcertHandler = async () => {
    if (userStatusData) {
      const isSuccess = await postConcertWrite(userStatusData.token, {
        videoLink: writeData.video,
        imgThumbnail: writeData.thumbnail,
        title: writeData.title,
        text: writeData.content,
        interest: writeData.category,
        hashtag: writeData.hashtag,
        authorNickname: writeData.nickname,
      });
      isSuccess && history.goBack();
    } else {
      alert('로그인 후 이용하세요');
    }
  };
  const postNoticeHandler = async () => {
    if (userStatusData) {
      const isSuccess = await postNoticeWrite(userStatusData.token, {
        title: writeData.title,
        text: writeData.content,
        interest: writeData.category,
        hashtag: writeData.hashtag,
      });
      isSuccess && history.goBack();
    } else {
      alert('로그인 후 이용하세요');
    }
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
  }, [isConditionMet, writeData.menu]);

  return (
    <Wrapper>
      <PageLabel>관리자 페이지</PageLabel>
      <Title>글 올리기</Title>
      <AdminWriteForm
        isConditionMet={isConditionMet}
        setIsConditionMet={setIsConditionMet}
        writeData={writeData}
        setWriteData={setWriteData}
        menuProps={menu}
      />
      <WriteButton disabled={isButtonDisabled} isButtonDisabled={isButtonDisabled} onClick={handleBtnOnClick}>
        등록하기
      </WriteButton>
    </Wrapper>
  );
}

export default AdminWrite;
