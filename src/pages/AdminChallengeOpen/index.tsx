import { AdminChallengeOpen as CAdminChallengeOpen } from 'components/organisms';
import React from 'react';
import Styled from 'styled-components';

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
