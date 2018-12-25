import * as React from 'react';
import styled from '../theme';

import Square from './Square';

interface IState {
  squares: string[];
}

class Board extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      squares: Array(9).fill(''),
    };
  }

  handleClick(i: number) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';

    this.setState({
      squares,
    });
  }

  renderSquare(i: number) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <Status>{status}</Status>
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
