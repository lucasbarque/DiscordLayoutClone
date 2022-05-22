import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage/ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

export default function ChannelData() {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author='Lucas Barque'
          content='Hoje é meu aniversário'
          date='28/10/2022'
        />
        <ChannelMessage
          author='Paula Flávia'
          content='Esse cara é ponta firme'
          date='28/10/2022'
        />
        <ChannelMessage
          author='Fernando Augusto'
          content={
            <>
              <Mention>@Lucas Barque</Mention>, iae
            </>
          }
          date='28/10/2022'
          hasMention
          isBot
        />
        <ChannelMessage author='Thiago Silva' content='😶' date='28/10/2022' />
        <ChannelMessage
          author='Hemily Silva'
          content='Olá, tudo bem?'
          date='28/10/2022'
        />
        <ChannelMessage
          author='Alexandre Ximenez'
          content={
            <>
              <Mention>@Lucas Barque</Mention>, me carrega no Apex de novo, por
              favor?
            </>
          }
          date='28/10/2022'
          hasMention
          isBot
        />
        <ChannelMessage
          author='Victor'
          content='Aí galera, pq a aranha é o animais mais carente do mundo?
          (Pq ela é um aracneedyou)
          '
          date='28/10/2022'
        />
        <ChannelMessage
          author='Aristofênio'
          content='Esses cara são virado no track'
          date='28/10/2022'
        />
        <ChannelMessage
          author='Lucas Barque'
          content='Hoje é meu aniversário'
          date='28/10/2022'
        />
        <ChannelMessage
          author='Paula Flávia'
          content='Esse cara é ponta firme'
          date='28/10/2022'
        />
        <ChannelMessage
          author='Fernando Augusto'
          content={
            <>
              <Mention>@Lucas Barque</Mention>, iae
            </>
          }
          date='28/10/2022'
          hasMention
          isBot
        />
        <ChannelMessage author='Thiago Silva' content='😶' date='28/10/2022' />
        <ChannelMessage
          author='Hemily Silva'
          content='Olá, tudo bem?'
          date='28/10/2022'
        />
        <ChannelMessage
          author='Alexandre Ximenez'
          content={
            <>
              <Mention>@Lucas Barque</Mention>, me carrega no Apex de novo, por
              favor?
            </>
          }
          date='28/10/2022'
          hasMention
          isBot
        />
        <ChannelMessage
          author='Victor'
          content='Aí galera, pq a aranha é o animais mais carente do mundo?
          (Pq ela é um aracneedyou)
          '
          date='28/10/2022'
        />
        <ChannelMessage
          author='Aristofênio'
          content='Esses cara são virado no track'
          date='28/10/2022'
        />
      </Messages>

      <InputWrapper>
        <Input type='text' placeholder='Conversar em #chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}
