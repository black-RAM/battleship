import { getInitialParameters, getUserCoordinates, updateBoards, announce } from "./view"
import GameController from "./control"
import "./style.css"

const viewModuleFunctions = {
  getter: getUserCoordinates,
  viewUpdater: updateBoards,
  announcer: announce
}

let playRound = true
while(playRound) {
  const game = new GameController(await getInitialParameters())
  const { playAgain } = await game.mainLoop(viewModuleFunctions)
  playRound = playAgain
}
