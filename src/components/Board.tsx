import * as React from 'react';
import styled from '../theme';

import Square from './Square';

class Board extends React.Component {
  renderSquare(i: number) {
    return <Square value={i} />;
  }

  render() {
    return (
      <div>
        <Status>Status</Status>
        <BoardRow>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </BoardRow>
      </div>
    );
  }
}

const Status = styled.div`
  margin-bottom: 10px;
`;

const BoardRow = styled.div`
  &:after {
    clear: both;
    content: '';
    display: table;
  }
`;

export default Board;
