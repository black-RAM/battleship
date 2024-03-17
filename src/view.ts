import { GameBoard } from "./model"

async function getInitialParameters() {
  const name = "Bob"
  const wantsToStart = true
  return { userName: name, humanStarts: wantsToStart }
}

function getUserCoordinates(): Promise<number[]> {
  const opponentGrid = document.querySelector<HTMLTableElement>("#opponent-table")
  if(opponentGrid == null) throw new Error("no opponent grid")

  return new Promise((resolve) => {
    opponentGrid.addEventListener(("click"), (event) => {
      const target = event.target as HTMLTableCellElement
      const coordinates = [target.dataset.row, target.dataset.col].map(coordinate => Number(coordinate))
      resolve(coordinates)
    })
  })
}

function updateBoards(player: GameBoard, opponent: GameBoard) {
  // render player's board
  const board1 = document.getElementById("player-board")
  const table1 = document.querySelector<HTMLTableElement>("player-table") || document.createElement("table")
  table1.id = "player-table"

  colHeaders(table1, player.board[0].length)
  createRows(table1, player)

  // render opponent board
  const board2 = document.getElementById("opponent-board")
  const table2 = document.querySelector<HTMLTableElement>("opponent-table") || document.createElement("table")
  table2.id = "opponent-table"

  colHeaders(table2, opponent.board[0].length)
  createRows(table2, opponent)
  
  // append
  if(board1 && board2) {
    board1.innerHTML = ""
    board2.innerHTML = ""
    board1.appendChild(table1)
    board2.appendChild(table2)
  }

}

function colHeaders(table: HTMLTableElement, count: number) {
  table.innerHTML = ""
  const alphabet = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  
  for (let index = 0; index <= count; index++) {
    const letter = alphabet[index]
    const tableHeader = document.createElement("th")
    tableHeader.innerText = letter
    table.appendChild(tableHeader)
  }
}

function createRows(table: HTMLTableElement, gameBoard: GameBoard) {
  for (let rowIndex = 0; rowIndex < gameBoard.board.length; rowIndex++) {
    const row = gameBoard.board[rowIndex]
    const tableRow = document.createElement("tr")
    const rowHeader = document.createElement("th")
    rowHeader.innerText = String(rowIndex + 1)
    tableRow.appendChild(rowHeader)
    
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const cell = row[colIndex]
      const tableCell = document.createElement("td")
      tableCell.dataset.row = String(rowIndex)
      tableCell.dataset.col = String(colIndex)
      tableCell.classList.add("board-cell")
      let hit: boolean
      
      if(typeof cell == "boolean") {
        tableCell.classList.add("sea")
        hit = cell
      } else {
        tableCell.classList.add("ship")
        hit = cell.wasHit
      }

      if(hit) {
        const dot = document.createElement("div")
        dot.classList.add("hit-dot")
        tableCell.appendChild(dot)
      }

      tableRow.appendChild(tableCell)   
    }

    table.appendChild(tableRow)
  }
}

function announce(message: string) {
  // console.log(message)
}

export { getInitialParameters, getUserCoordinates, updateBoards, announce }