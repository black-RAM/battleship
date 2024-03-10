import { getInitialParameters, getUserCoordinates, updateBoards, announce } from "./view"
import { Computer, Player } from "./model"
import "./style.css"

// this software uses the MVC architecture
// Here is the control module

interface initialParameters{
  userName: string
  humanStarts: boolean
}

const defaultFunctionParameters = {
  getter: getUserCoordinates,
  viewUpdater: updateBoards,
  announcer: announce
}

class GameController {
  human: Player
  computer: Computer
  humanTurn: boolean
  rounds: number

  constructor(p: initialParameters) {
    this.human = new Player(p.userName)
    this.computer = new Computer()
    this.human.setEnemy(this.computer)
    this.humanTurn = p.humanStarts
    this.rounds = 0
  }

  public async mainLoop(f = defaultFunctionParameters) { 
    while(!(this.human.board.allSunk() || this.computer.board.allSunk())) {
      f.viewUpdater(this.human.board, this.computer.board)
      if(this.humanTurn) {
        this.human.makeMove(await f.getter())
        this.rounds++
      } else {
        this.computer.automaticPlay()
      }
      this.changeTurn()
    }
    return this.endGame(f.announcer)
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