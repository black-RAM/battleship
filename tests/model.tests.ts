import { Ship, GameBoard, ShipDatum, Player, Computer } from "../src/model"

describe("Ship class", () => {
  const ship = new Ship(5)

  it("initializes length, hits, and sunken properties", () => {
    expect(ship.length).toBe(5)
    expect(ship.hits).toBe(0)
    expect(ship.sunken).toBe(false)
  })

  it(".hit() method increments hits", () =>{
    ship.hit()
    expect(ship.hits).toBe(1)
  })

  it(".hit() invokes .isSunk()", () => {
    const mock = jest.spyOn(ship, "isSunk")
    ship.hit()
    expect(mock).toHaveBeenCalled()
  })

  it(".isSunk() returns false if hits are less than length", () => {
    expect(ship.isSunk()).toBe(false)
  })

  it(".isSunk() returns true if hits are equal to its length", () => {
    while(ship.length - ship.hits >= 0) ship.hit()
    expect(ship.isSunk()).toBe(true)
  })

  it(".isSunk() updates .sunken property", () => {
    expect(ship.sunken).toBe(true)
  })
})

describe("GameBoard class", () => {
  const size = 10
  const game = new GameBoard(size)

  it("initializes the board property as a square matrix of falsy values", () => {
    expect(game.board.length).toEqual(size)
    game.board.forEach(row => {
      expect(row.length).toEqual(size)
      row.forEach(cell => expect(cell).toBeFalsy())
    })
  })

  it("buildNavy method assigns a set of Ship objects to navy parameter", () => {
    game.buildNavy()
    expect(game.navy).toBeTruthy()
  })

  it("buildNavy method populates .board with ship datums of expected length", () => {
    if(!game.navy) throw new Error("no navy to test!")
    
    const positionLengths: Map<Ship, number> = new Map()

    for (const row of game.board) {
      for (const cell of row) {
        if(cell instanceof ShipDatum) {
          expect(cell.wasHit).toBeFalsy()
          const value = positionLengths.get(cell.ship) || 0
          positionLengths.set(cell.ship, value + 1)
          continue
        }
      }
    }
    
    for (const ship of game.navy) {
      const positionLength = positionLengths.get(ship) || 0
      expect(ship.length).toBe(positionLength)
    }
  })

  it("receiveAttack() mutates board to truthy value (and calls .hit on ShipDatum)", () => {
    if(game.board[0][0] instanceof ShipDatum) {
      const mock = jest.spyOn(game.board[0][0].ship, "hit")
      game.receiveAttack(0, 0)
      expect(mock).toHaveBeenCalled()
      expect(game.board[0][0].wasHit).toBeTruthy()
    } else {
      game.receiveAttack(0, 0)
      expect(game.board[0][0]).toBeTruthy()
    }
  })

  it("allSunk() returns true if all the ships on the board are sunk", () => {
    if(!game.navy) throw new Error("no navy to test!")

    // collect coordinates of each ship
    const coordinates: Map<Ship, number[][]> = new Map()
    for (let i = 0; i < game.board.length; i++) {
      for (let j = 0; j < game.board[i].length; j++) {
        const cell  = game.board[i][j]
        if(cell instanceof ShipDatum){
          const oldCoordinates = coordinates.get(cell.ship) || []
          coordinates.set(cell.ship, oldCoordinates.concat([[i, j]]))
        }
      }
    }
    // sink all ships
    for (const ship of game.navy) {
      const placement = coordinates.get(ship) || []
      for (const [row, col] of placement) {
        game.receiveAttack(row, col)
      }
    }
    // check if allSunk() works
    expect(game.allSunk()).toBe(true)
  })
})

describe("Player class", () => {
  const humanPlayer = new Player("Bob")
  const computerPlayer = new Computer()

  it("initializes a board property", () => {
    expect(humanPlayer.board).toBeInstanceOf(GameBoard)
    expect(computerPlayer.board).toBeInstanceOf(GameBoard)
  })

  it("player1.setEnemy(player2) method creates a reciprocal 'enemy' relationship", () => {
    humanPlayer.setEnemy(computerPlayer)
    expect(humanPlayer.enemy).toBe(computerPlayer)
    expect(computerPlayer.enemy).toBe(humanPlayer)
  })

  it("makeMove calls receiveAttack on enemy board", () => {
    const enemyBoard = jest.spyOn(computerPlayer.board, "receiveAttack")
    humanPlayer.makeMove([0, 0])
    expect(enemyBoard).toHaveBeenCalled()
  })
})

describe("Computer class", () => {
  const dummyPlayer = new Player("Bob")
  const computer = new Computer()
  computer.setEnemy(dummyPlayer)

  it("inherits from Player class", () => {
    expect(computer).toBeInstanceOf(Player)
  })

  it("automaticPlay calls makeMove with random coordinates", () => {
    const makeMoveMock = jest.spyOn(computer, "makeMove")
    computer.automaticPlay()
    expect(makeMoveMock).toHaveBeenCalled()
  })
})