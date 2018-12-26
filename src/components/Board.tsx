import * as React from 'react';
import styled from '../theme';

import Square from './Square';

interface IBoardProps {
  squares: string[];
  onClick: (i: number) => void;
}

class Board extends React.Component<IBoardProps> {
  renderSquare(i: number) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    /*
    const { xIsNext } = this.state;
    const winner = calcWinner(this.state.squares);
    let status = xIsNext ? 'Next player: X' : 'Next player: O';

    if (winner) {
      status = `Winner: ${winner}`;
    }
    */

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
