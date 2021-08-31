import { ChallengeEditCard } from 'components/organisms';
import { useRouter } from 'next/router';
import React from 'react';

function ChallengeWrite(): React.ReactElement {
  const router = useRouter();
  const { id } = router.query;
  return <ChallengeEditCard id={id} />;
}

export default ChallengeWrite;
