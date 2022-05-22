import ChannelButton from '../ChannelButton/ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles';

export default function ChannelList() {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName='chat-livre' />
      <ChannelButton channelName='trabalho' selected />
      <ChannelButton channelName='csgo' />
      <ChannelButton channelName='apex-legends' />
    </Container>
  );
}
