import { GameBoard } from "./model"

async function getInitialParameters() {
  const name = "Bob"
  const wantsToStart = true
  return { userName: name, humanStarts: wantsToStart }
}

async function getUserCoordinates(): Promise<number[]> {
  await new Promise(resolve => setTimeout(resolve, 1000)) // wait a second
  return Array.from({length: 2}, () => Math.floor(Math.random() * 10))
}

function updateBoards(player: GameBoard, opponent: GameBoard) {
  // render player's board
  const board1 = document.getElementById("player-board")
  const table1 = document.querySelector<HTMLTableElement>("player-table") || document.createElement("table")
  table1.id = "player-table"

  colHeaders(table1, player.board[0].length)
  createRows(table1, player)
  editBoard(board1, table1)

  // render opponent board
  const board2 = document.getElementById("opponent-board")
  const table2 = document.querySelector<HTMLTableElement>("opponent-table") || document.createElement("table")
  table2.id = "opponent-table"

  colHeaders(table2, opponent.board[0].length)
  createRows(table2, opponent)
  editBoard(board2, table2)
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
  for (let index = 0; index < gameBoard.board.length; index++) {
    const row = gameBoard.board[index]
    const tableRow = document.createElement("tr")
    const rowHeader = document.createElement("th")
    rowHeader.innerText = String(index + 1)
    tableRow.appendChild(rowHeader)

    for (const cell of row) {
      const tableCell = document.createElement("td")
      tableCell.classList.add("board-cell")
      let hit: boolean
      
      if(typeof cell == "boolean") {
        tableCell.classList.add("sea")
        hit = cell
      } else {
        tableCell.classList.add("ship")
        hit = cell.wasHit
      }

      hit = true

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

function editBoard(board: HTMLElement | null, table: HTMLElement) {
  if(board && !board.hasChildNodes()) board.appendChild(table)
}

function announce(message: string) {
  // console.log(message)
}

export { getInitialParameters, getUserCoordinates, updateBoards, announce }