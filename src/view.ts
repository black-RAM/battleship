import { Table } from "console-table-printer"
import { GameBoard } from "./model"

async function getUserName() {
  return ""
}

async function getUserCoordinates(): Promise<number[]> {
  return []
}

function updateBoards(humanBoard: GameBoard, computerBoard: GameBoard) {}

function announce(message: string) {}

export { getUserName, getUserCoordinates, updateBoards, announce }