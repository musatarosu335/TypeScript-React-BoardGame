import * as React from 'react';
import styled from '../theme';

import Game from './Game';

const App = () => (
  <Container>
    <h1>TypeScript React!!</h1>
    <Game />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
