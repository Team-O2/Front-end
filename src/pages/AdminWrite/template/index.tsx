import { AdminWriteForm, HashTagAddForm } from 'components/organisms';
import React from 'react';
import { IAdminWriteConditionMet } from 'types/admin.type';
import { IUserData } from 'types/user.type';
import { PageLabel, Title, Wrapper, WriteButton, WriteLabel } from './style';

interface IProps {
  menu: string;
  isConditionMet: IAdminWriteConditionMet;
  setIsConditionMet: (value: IAdminWriteConditionMet) => void;
  writeData: IUserData;
  setWriteData: (value: IUserData) => void;
  isButtonDisabled: boolean;
  handleBtnOnClick: () => void;
}
function AdminWriteTemplate({
  menu,
  setIsConditionMet,
  writeData,
  setWriteData,
  isConditionMet,
  isButtonDisabled,
  handleBtnOnClick,
}: IProps): React.ReactElement {
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
      <WriteLabel>해시태그</WriteLabel>
      <HashTagAddForm writeData={writeData} setWriteData={setWriteData} />
      <WriteButton disabled={isButtonDisabled} isButtonDisabled={isButtonDisabled} onClick={handleBtnOnClick}>
        등록하기
      </WriteButton>
    </Wrapper>
  );
}

export default AdminWriteTemplate;
