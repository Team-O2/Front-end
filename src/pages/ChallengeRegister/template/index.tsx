import { getRegistPeriod } from 'apis';
import { ChallengeImg } from 'assets/images';
import { RegisterHeader } from 'components/molecules';
import { RegisterDetailCard } from 'components/organisms';
import React, { useEffect, useState } from 'react';
import { IAdminChallengePeriod } from 'types/admin.type';
import { Container, Header, RegisterImg } from './style';

function ChallengeRegister(): React.ReactElement {
  const [periodData, setPeriodData] = useState<IAdminChallengePeriod | null>(null);

  const getChallengePeriod = async () => {
    const data = await getRegistPeriod();
    data && setPeriodData(data);
  };
  useEffect(() => {
    getChallengePeriod();
  }, []);

  return periodData ? (
    <Container>
      <RegisterHeader title={periodData.title} generation={periodData.generation} img={periodData.img} />
      <Header>
        <p>챌린지 설명</p>
        <span></span>
      </Header>
      <RegisterImg>
        <img src={ChallengeImg} alt="" />
      </RegisterImg>
      <RegisterDetailCard />
    </Container>
  ) : (
    <p> 챌린지 신청기간이 아닙니다</p>
  );
}
export default ChallengeRegister;
