import React from 'react';

import Logo from '../../assets/logo.svg';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

export default function ServerButton({
  selected,
  isHome,
  hasNotifications,
  mentions,
}: Props) {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected && 'active'}
    >
      {isHome && <img src={Logo} alt='Rocketseat' />}
    </Button>
  );
}
