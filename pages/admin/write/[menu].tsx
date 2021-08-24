import { postConcertWrite, postNoticeWrite } from 'apis';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IAdminWrite } from 'types/admin.type';
import AdminWriteTemplate from './template';

function AdminWrite(): React.ReactElement {
  const router = useRouter();
  const { menu } = router.query;
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
  const [writeData, setWriteData] = useState<IAdminWrite>({
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
    <AdminWriteTemplate
      menu={typeof menu === 'string' ? menu : ''}
      setIsConditionMet={setIsConditionMet}
      writeData={writeData}
      setWriteData={setWriteData}
      isConditionMet={isConditionMet}
      isButtonDisabled={isButtonDisabled}
      handleBtnOnClick={handleBtnOnClick}
    />
  );
}

export default AdminWrite;
