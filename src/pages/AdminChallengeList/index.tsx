import { AdminChallengeList as CAdminChallengeList } from 'components/organisms';
import React from 'react';
import Styled from 'styled-components';

function AdminChallengeList(): React.ReactElement {
  return (
    <SAdminChallengeList>
      <CAdminChallengeList />
    </SAdminChallengeList>
  );
}

const SAdminChallengeList = Styled.div`

  `;

export default AdminChallengeList;
