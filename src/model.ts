class Ship {
  length: number
  hits: number
  sunken: boolean

  constructor(length: number) {
    this.length = length
    this.hits = 0
    this.sunken = false
  }

  hit() {
    this.hits++
    this.isSunk()
  }

  isSunk() {
    this.sunken = this.hits >= this.length
    return this.sunken
  }
}

class ShipDatum{
  ship: Ship
  wasHit: boolean

  constructor(ship: Ship) {
    this.ship = ship
    this.wasHit = false
  }
}

class GameBoard {
  board: (boolean | ShipDatum)[][]
  navy: Set<Ship> | undefined

  constructor(size = 10) {
    this.board = Array.from({length: size}, () => Array.from({length: size}, () => false))
  }

  public buildNavy(lengths = [2, 3, 3, 4, 5]) {
    const production: Ship[] = []
    
    for (const length of lengths) {
      const model = new Ship(length)

      for (const [row, col] of this.generatePositions(length, model)) {
        this.board[row][col] = new ShipDatum(model)
      }

      production.push(model)
    }

    this.navy = new Set(production)
  }

  private generatePositions (length: number, ship: Ship): number[][] {
    let positions: number[][] = []
    let [row, col] = Array.from({length: 2}, () => Math.floor(Math.random() * 10))
    const horizontal = Math.floor(Math.random() * 2) == 0
    const size = this.board.length

    while(positions.length < length) {
      const outOfBounds = col >= size || row >= size
      const neighbors = [[-1, 0], [0, -1], [0, 0], [0, 1], [1, 0]].map(([offsetX, offsetY]) => {
        const [r, c] = [row + offsetX, col + offsetY]
        if(r >= 0 && r < size && c >= 0 && c < size) {
          return this.board[r][c]
        }
      })
      const shipNearby = neighbors.some(neighbor => neighbor instanceof ShipDatum && neighbor.ship !== ship)

      if(shipNearby || outOfBounds) return this.generatePositions(length, ship)
      positions.push([row, col])
      horizontal ? col++ : row++
    }

    return positions
  }

  public receiveAttack(row: number, col: number) {
    if(row >= 0 && row < this.board.length && col >=0 && col < this.board.length) {
      const cell = this.board[row][col]
      
      if(cell instanceof ShipDatum) {
        if(cell.wasHit == false) cell.ship.hit()
        cell.wasHit = true
        return
      }

      this.board[row][col] = true
    }
  }

  public allSunk() {
    if(!this.navy) throw new Error("There is no navy. Call this.buildNavy()")
    return [...this.navy].every(ship => ship.sunken)
  }
}

class Player{
  name: string
  board: GameBoard
  enemy: Player | undefined

  constructor(name: string) {
    this.name = name
    this.board = new GameBoard()
    this.board.buildNavy()
  }

  setEnemy(player: Player) {
    this.enemy = player
    this.enemy.enemy = this // reciprocal relationship
  }

  makeMove(coordinates: number[]) {
    const [guessRow, guessCol] = coordinates
    if(!this.enemy) throw new Error("cannot makeMove without enemy")
    this.enemy.board.receiveAttack(guessRow, guessCol)
  }
}

class Computer extends Player{
  history: number[][]

  constructor() {
    super("Computer")
    this.history = []
  }

  automaticPlay(): void {
    const [randomRow, randomCol] = Array.from({length: 2}, () => Math.floor(Math.random() * 10))
    if(this.history.includes([randomRow, randomCol])) return this.automaticPlay() // try again
    this.history.push([randomRow, randomCol])
    this.makeMove([randomRow, randomCol])
  }
}

export { Ship, ShipDatum, GameBoard, Player, Computer }