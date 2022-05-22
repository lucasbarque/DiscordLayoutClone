import ChannelInfo from '../ChannelInfo/ChannelInfo';
import ChannelList from '../ChannelList/ChannelList';
import ServerList from '../ServerList/ServerList';
import ServerName from '../ServerName/ServerName';

import { Grid } from './styles';

export default function Layout() {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
    </Grid>
  );
}
