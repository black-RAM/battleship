import { Computer, GameBoard, Player } from "./model"

interface InitialParameters{
  userName: string
  humanStarts: boolean
}

interface FunctionParameters {
  getter: () => Promise<number[]>
  viewUpdater: (human: GameBoard, computer: GameBoard) => void
  announcer: (message: string) => Promise<boolean>
}

class GameController {
  human: Player
  computer: Computer
  humanTurn: boolean
  rounds: number

  constructor(p: InitialParameters) {
    this.human = new Player(p.userName)
    this.computer = new Computer()
    this.human.setEnemy(this.computer)
    this.humanTurn = p.humanStarts
    this.rounds = 0
  }

  public async mainLoop(functions: FunctionParameters) { 
    const { viewUpdater, getter, announcer} = functions
    viewUpdater(this.human.board, this.computer.board) // initialize view

    while(!(this.human.board.allSunk() || this.computer.board.allSunk())) {
      if(this.humanTurn) {
        this.human.makeMove(await getter())
        this.rounds++
      } else {
        this.computer.automaticPlay()
      }
      viewUpdater(this.human.board, this.computer.board)
      this.changeTurn()
    }
    return await this.endGame(announcer)
  }

  private async endGame(announcer: (message: string) => Promise<boolean>) {
    const winner = this.humanTurn ? this.computer : this.human
    const gameData = {
      playAgain: await announcer(winner.name + " has won!"),
      winner: winner.name,
      rounds: this.rounds,
    }
    return gameData
  }

  private changeTurn() {
    this.humanTurn = !this.humanTurn
  }
}

export default GameController
export {InitialParameters}