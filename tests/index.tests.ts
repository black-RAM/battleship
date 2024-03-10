// import other test suites
import "./model.tests"

// import modules to test
import { Player, Computer } from "../src/model"
import GameController from "../src"

// fail-safe, easy manual implementations of mocks
// jest.mock("../src/view") was being ignored in bundled dist/test.js
const getInitialParameters = jest.fn(async() => ({userName: "Human", humanStarts: true}))
const getUserCoordinates = jest.fn(async() => Array.from({length: 2}, () => Math.floor(Math.random() * 10)))
const updateBoards = jest.fn()
const announce = jest.fn()

const mockedFunctionParameters = {
  getter: getUserCoordinates,
  viewUpdater: updateBoards,
  announcer: announce
}

describe("GameController class", () => {
  it("sets human and computer player objects as enemies", async() => {
    const game = new GameController(await getInitialParameters())
    expect(game.human).toBeInstanceOf(Player)
    expect(game.computer).toBeInstanceOf(Computer)
    expect(game.human.enemy).toBe(game.computer)
    expect(game.computer.enemy).toBe(game.human)
  })

  it("makes the human and computer play in turn", async() => {
    const game = new GameController(await getInitialParameters())
    const humanSpy = jest.spyOn(game.human, "makeMove")
    const computerSpy = jest.spyOn(game.computer, "makeMove")
    const rounds = await game.mainLoop(mockedFunctionParameters)
    expect(humanSpy).toHaveBeenCalledTimes(rounds)
    expect(computerSpy.mock.calls.length).toBeCloseTo(rounds, -1)
  })

  it("updates the user interface with each play", async() => {
    const game = new GameController(await getInitialParameters())
    const rounds = await game.mainLoop(mockedFunctionParameters)
    expect(updateBoards.mock.calls.length).toBeGreaterThanOrEqual(rounds)
  })

  it("announces the winner at the end of the game", async() => {
    const game = new GameController(await getInitialParameters())
    await game.mainLoop(mockedFunctionParameters)
    expect(game.human.board.allSunk() || game.computer.board.allSunk()).toBe(true)
    expect(announce).toHaveBeenCalled()
  })
})