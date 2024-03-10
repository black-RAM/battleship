import { getUserName, getUserCoordinates, updateBoards, announce } from "./view"
import { Computer, Player } from "./model"
import "./style.css"

// this software uses the MVC architecture
// Here is the control module

async function Game() {
  const human = new Player(await getUserName())
  const computer = new Computer()
  human.setEnemy(computer)
  let humanTurn = true

  const mainLoop = async() => {
    while(!(human.board.allSunk() || computer.board.allSunk())) {
      updateBoards(human.board, computer.board)
      if(humanTurn) {
        human.makeMove(await getUserCoordinates())
      } else {
        computer.automaticPlay()
      }
      changeTurn()
    }
    endGame()
  }

  const changeTurn = () => humanTurn = !humanTurn

  const endGame = () => {
    const winnerIsHuman = !humanTurn
    const winner = winnerIsHuman ? human : computer
    announce(winner.name + " has won!")
  }

  return { mainLoop }
}

const game = await Game()
game.mainLoop()