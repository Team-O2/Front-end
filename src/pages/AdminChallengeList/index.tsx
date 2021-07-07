import React from 'react';
import Styled from 'styled-components';
import CAdminChallengeList from 'components/organisms/AdminChallengeList';

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
