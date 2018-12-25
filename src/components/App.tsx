import * as React from 'react';
import styled from '../theme';

import Board from './Board';

const App = () => (
  <Container>
    <h1>TypeScript React!!</h1>
    <Board />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
