import React from 'react';
import Styled from 'styled-components';
import CAdminChallengeOpen from 'components/organisms/AdminChallengeOpen';

function AdminChallengeOpen(): React.ReactElement {
  return (
    <SAdminChallengeOpen>
      <CAdminChallengeOpen />
    </SAdminChallengeOpen>
  );
}

const SAdminChallengeOpen = Styled.div`

  `;

export default AdminChallengeOpen;
