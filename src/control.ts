import { Computer, GameBoard, Player } from "./model"

interface InitialParameters{
  userName: string
  humanStarts: boolean
}

interface FunctionParameters {
  getter: () => Promise<number[]>
  viewUpdater: (human: GameBoard, computer: GameBoard) => void
  announcer: (message: string) => void
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
    while(!(this.human.board.allSunk() || this.computer.board.allSunk())) {
      viewUpdater(this.human.board, this.computer.board)
      if(this.humanTurn) {
        this.human.makeMove(await getter())
        this.rounds++
      } else {
        this.computer.automaticPlay()
      }
      this.changeTurn()
    }
    return this.endGame(announcer)
  }

  private endGame(announcer: (message: string) => void) {
    const winner = this.humanTurn ? this.computer : this.human
    announcer(winner.name + "has won!")
    return this.rounds
  }

  private changeTurn() {
    this.humanTurn = !this.humanTurn
  }
}

export default GameController