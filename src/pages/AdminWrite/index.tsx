import { AdminWrite as CAdminWrite } from 'components/organisms';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import Styled from 'styled-components';

interface MatchParams {
  menu: string;
}
function AdminWrite({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const menu = match.params.menu;
  return (
    <SAdminWrite>
      <CAdminWrite menu={menu} />
    </SAdminWrite>
  );
}

const SAdminWrite = Styled.div`

  `;

export default AdminWrite;
