import * as React from 'react';
import styled from '../theme';
import { calcWinner } from '../functions/calcWinner';

import Board from './Board';

interface IHistoryData {
  squares: string[];
}

interface IState {
  history: IHistoryData[];
  xIsNext: boolean;
  stepNumber: number;
}

class Game extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(''),
        },
      ],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.history.length + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calcWinner(squares);

    if (winner || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{ squares }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  render() {
    const { history, stepNumber } = this.state;
    return (
      <Container>
        <GameBoard>
          <Board
            squares={history[stepNumber].squares}
            onClick={(i: number) => this.handleClick(i)}
          />
        </GameBoard>
        <GameInfo>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </GameInfo>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const GameBoard = styled.div``;

const GameInfo = styled.div`
  margin-left: 20px;
`;

export default Game;
