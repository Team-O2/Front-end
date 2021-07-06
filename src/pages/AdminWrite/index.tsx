import React from 'react';
import Styled from 'styled-components';
import CAdminWrite from 'components/organisms/AdminWrite';

function AdminWrite(): React.ReactElement {
  return (
    <SAdminWrite>
      <CAdminWrite />
    </SAdminWrite>
  );
}

const SAdminWrite = Styled.div`

  `;

export default AdminWrite;
