import { getChallengeList } from 'apis';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IAdminChallenge } from 'types/admin.type';
import AdminChallengeListTemplate from './template';

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
  return <AdminChallengeListTemplate challengeDataList={challengeDataList} />;
}

export default AdminChallengeList;
