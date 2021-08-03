import { getChallengeList } from 'apis';
import { GreydfPlusIcon as PlusIcon } from 'assets/images';
import { AdminChallengeCard } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IAdminChallenge } from 'types/admin.type';
import { AddCard, AddExp, AddImage, ListContainer, PageLabel, Title, Wrapper } from './style';

function AdminChallengeList(): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);
  const [challengeDataList, setChallengeDataList] = useState<IAdminChallenge[] | null>(null);

  useEffect(() => {
    if (userStatusData) getChallengeDataList(userStatusData.token, 30, 0);
    else alert('로그인 후 이용하세요');
  }, [userStatusData]);

  const getChallengeDataList = async (token: string, limit: number, offset: number): Promise<void> => {
    const data = await getChallengeList(token, limit, offset);
    data && setChallengeDataList(data);
  };

  return (
    <Wrapper>
      <PageLabel>관리자 페이지</PageLabel>
      <Title>챌린지 정보</Title>
      <ListContainer>
        <Link to="/admin/challenge/open">
          <AddCard>
            <AddImage src={PlusIcon}></AddImage>
            <AddExp>챌린지 등록하기</AddExp>
          </AddCard>
        </Link>
        {challengeDataList?.map((data, id) => {
          return (
            data && (
              <Link to={`/challenge/${data.generation}`}>
                <AdminChallengeCard key={id} challengeData={data} />
              </Link>
            )
          );
        })}
      </ListContainer>
    </Wrapper>
  );
}

export default AdminChallengeList;
