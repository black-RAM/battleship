import { GameBoard, ShipDatum } from "./model"
import { Table } from "console-table-printer"

async function getInitialParameters(): Promise<object> {
  return {}
}

async function getUserCoordinates(): Promise<number[]> {
  return []
}

function updateBoards(humanBoard: GameBoard, computerBoard: GameBoard) {
    // console.clear()
    // const parse = (cells: (boolean | ShipDatum)[]) => {
    //   return cells.map(cell => cell == false ? 0 : cell == true ? 1 : !cell.wasHit ? 2 : 3)
    // }
    
    // const humanTable = new Table()
    // for (const row of humanBoard.board) {
    //   humanTable.addRow(parse(row))
    // }

    // console.log("Human board: ")
    // humanTable.printTable()

    // const computerTable = new Table()
    // for (const row of computerBoard.board) {
    //   computerTable.addRow(parse(row))
    // }

    // console.log("Computer board: ")
    // computerTable.printTable()
}

function announce(message: string) {
  // console.log(message)
}

export { getInitialParameters, getUserCoordinates, updateBoards, announce }