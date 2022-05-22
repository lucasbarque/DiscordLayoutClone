import ServerButton from '../ServerButton/ServerButton';

import { Container, Separator } from './styles';

export default function ServerList() {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={35} />
      <ServerButton />
      <ServerButton mentions={532} />
    </Container>
  );
}
