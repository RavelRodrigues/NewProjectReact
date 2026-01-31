import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Olá</small>
      </Title>
      <p>Lorem Ipsum dolor sit amet.</p>
      <button type="button">Entrar</button>
    </Container>
  );
}
