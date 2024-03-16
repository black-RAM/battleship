import { getInitialParameters, getUserCoordinates, updateBoards, announce } from "./view"
import GameController from "./control"
import "./style.css"

const viewModuleFunctions = {
  getter: getUserCoordinates,
  viewUpdater: updateBoards,
  announcer: announce
}

const game = new GameController(await getInitialParameters())
await game.mainLoop(viewModuleFunctions)