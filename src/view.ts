import { GameBoard } from "./model"

async function getInitialParameters() {
  const name = "Bob"
  const wantsToStart = true
  return { userName: name, humanStarts: wantsToStart }
}

async function getUserCoordinates(): Promise<number[]> {
  return []
}

function updateBoards(human: GameBoard, computer: GameBoard) {
  let board = document.getElementById("player-board")
  let table = document.querySelector<HTMLTableElement>("player-table") || document.createElement("table")
  table.id = "player-table"
  table.innerHTML = ""

  for (const row of human.board) {
    const tableRow = document.createElement("tr")
    for (const cell of row) {
      const tableCell = document.createElement("td")
      tableCell.classList.add("board-cell")

      if(typeof cell == "boolean") {
        tableCell.classList.add("bg-blue-200")
      } else {
        tableCell.classList.add("bg-blue-400")
      }

      tableRow.appendChild(tableCell) 
    }
    table.appendChild(tableRow)
  }

  if(board && !board.hasChildNodes()) {
    board.appendChild(table)
  }
}

function announce(message: string) {
  // console.log(message)
}

export { getInitialParameters, getUserCoordinates, updateBoards, announce }