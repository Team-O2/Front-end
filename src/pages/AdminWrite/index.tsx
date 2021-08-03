import { AdminWrite as CAdminWrite } from 'components/organisms';
import React from 'react';
import { RouteComponentProps } from 'react-router';

interface MatchParams {
  menu: string;
}
function AdminWrite({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const menu = match.params.menu;
  return <CAdminWrite menu={menu} />;
}

export default AdminWrite;
