import ChannelInfo from '../ChannelInfo/ChannelInfo';
import ChannelList from '../ChannelList/ChannelList';
import ServerList from '../ServerList/ServerList';
import ServerName from '../ServerName/ServerName';
import UserInfo from '../UserInfo/UserInfo';
import UserList from '../UserList/UserList';

import { Grid } from './styles';

export default function Layout() {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <div></div>
      <UserList />
    </Grid>
  );
}
