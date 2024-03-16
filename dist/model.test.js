/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   GameBoard: () => (/* binding */ GameBoard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   ShipDatum: () => (/* binding */ ShipDatum)
/* harmony export */ });
class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunken = false;
    }
    hit() {
        this.hits++;
        this.isSunk();
    }
    isSunk() {
        this.sunken = this.hits >= this.length;
        return this.sunken;
    }
}
class ShipDatum {
    constructor(ship) {
        this.ship = ship;
        this.wasHit = false;
    }
}
class GameBoard {
    constructor(size = 10) {
        this.board = Array.from({ length: size }, () => Array.from({ length: size }, () => false));
    }
    buildNavy(lengths = [2, 3, 3, 4, 5]) {
        const production = [];
        for (const length of lengths) {
            const model = new Ship(length);
            for (const [row, col] of this.generatePositions(length, model)) {
                this.board[row][col] = new ShipDatum(model);
            }
            production.push(model);
        }
        this.navy = new Set(production);
    }
    generatePositions(length, ship) {
        let positions = [];
        let [row, col] = Array.from({ length: 2 }, () => Math.floor(Math.random() * 10));
        const horizontal = Math.floor(Math.random() * 2) == 0;
        const size = this.board.length;
        while (positions.length < length) {
            const outOfBounds = col >= size || row >= size;
            const neighbors = [[-1, 0], [0, -1], [0, 0], [0, 1], [1, 0]].map(([offsetX, offsetY]) => {
                const [r, c] = [row + offsetX, col + offsetY];
                if (r >= 0 && r < size && c >= 0 && c < size) {
                    return this.board[r][c];
                }
            });
            const shipNearby = neighbors.some(neighbor => neighbor instanceof ShipDatum && neighbor.ship !== ship);
            if (shipNearby || outOfBounds)
                return this.generatePositions(length, ship);
            positions.push([row, col]);
            horizontal ? col++ : row++;
        }
        return positions;
    }
    receiveAttack(row, col) {
        if (row >= 0 && row < this.board.length && col >= 0 && col < this.board.length) {
            const cell = this.board[row][col];
            if (cell instanceof ShipDatum) {
                cell.wasHit = true;
                cell.ship.hit();
                return true;
            }
            this.board[row][col] = true;
        }
    }
    allSunk() {
        if (!this.navy)
            throw new Error("There is no navy. Call this.buildNavy()");
        return [...this.navy].every(ship => ship.sunken);
    }
}
class Player {
    constructor(name) {
        this.name = name;
        this.board = new GameBoard();
        this.board.buildNavy();
    }
    setEnemy(player) {
        this.enemy = player;
        this.enemy.enemy = this; // reciprocal relationship
    }
    makeMove(coordinates) {
        const [guessRow, guessCol] = coordinates;
        if (!this.enemy)
            throw new Error("cannot makeMove without enemy");
        return !!this.enemy.board.receiveAttack(guessRow, guessCol);
    }
}
class Computer extends Player {
    constructor() {
        super("Computer");
        this.history = [];
    }
    automaticPlay() {
        const [randomRow, randomCol] = Array.from({ length: 2 }, () => Math.floor(Math.random() * 10));
        if (this.history.includes([randomRow, randomCol]))
            return this.automaticPlay(); // try again
        this.history.push([randomRow, randomCol]);
        this.makeMove([randomRow, randomCol]);
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./tests/model.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/model */ "./src/model.ts");

describe("Ship class", () => {
    const ship = new _src_model__WEBPACK_IMPORTED_MODULE_0__.Ship(5);
    it("initializes length, hits, and sunken properties", () => {
        expect(ship.length).toBe(5);
        expect(ship.hits).toBe(0);
        expect(ship.sunken).toBe(false);
    });
    it(".hit() method increments hits", () => {
        ship.hit();
        expect(ship.hits).toBe(1);
    });
    it(".hit() invokes .isSunk()", () => {
        const mock = jest.spyOn(ship, "isSunk");
        ship.hit();
        expect(mock).toHaveBeenCalled();
    });
    it(".isSunk() returns false if hits are less than length", () => {
        expect(ship.isSunk()).toBe(false);
    });
    it(".isSunk() returns true if hits are equal to its length", () => {
        while (ship.length - ship.hits >= 0)
            ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
    it(".isSunk() updates .sunken property", () => {
        expect(ship.sunken).toBe(true);
    });
});
describe("GameBoard class", () => {
    const size = 10;
    const game = new _src_model__WEBPACK_IMPORTED_MODULE_0__.GameBoard(size);
    it("initializes the board property as a square matrix of falsy values", () => {
        expect(game.board.length).toEqual(size);
        game.board.forEach(row => {
            expect(row.length).toEqual(size);
            row.forEach(cell => expect(cell).toBeFalsy());
        });
    });
    it("buildNavy method assigns a set of Ship objects to navy parameter", () => {
        game.buildNavy();
        expect(game.navy).toBeTruthy();
    });
    it("buildNavy method populates .board with ship datums of expected length", () => {
        if (!game.navy)
            throw new Error("no navy to test!");
        const positionLengths = new Map();
        for (const row of game.board) {
            for (const cell of row) {
                if (cell instanceof _src_model__WEBPACK_IMPORTED_MODULE_0__.ShipDatum) {
                    expect(cell.wasHit).toBeFalsy();
                    const value = positionLengths.get(cell.ship) || 0;
                    positionLengths.set(cell.ship, value + 1);
                    continue;
                }
            }
        }
        for (const ship of game.navy) {
            const positionLength = positionLengths.get(ship) || 0;
            expect(ship.length).toBe(positionLength);
        }
    });
    it("receiveAttack() mutates board to truthy value (and calls .hit on ShipDatum)", () => {
        if (game.board[0][0] instanceof _src_model__WEBPACK_IMPORTED_MODULE_0__.ShipDatum) {
            const mock = jest.spyOn(game.board[0][0].ship, "hit");
            game.receiveAttack(0, 0);
            expect(mock).toHaveBeenCalled();
            expect(game.board[0][0].wasHit).toBeTruthy();
        }
        else {
            game.receiveAttack(0, 0);
            expect(game.board[0][0]).toBeTruthy();
        }
    });
    it("allSunk() returns true if all the ships on the board are sunk", () => {
        if (!game.navy)
            throw new Error("no navy to test!");
        // collect coordinates of each ship
        const coordinates = new Map();
        for (let i = 0; i < game.board.length; i++) {
            for (let j = 0; j < game.board[i].length; j++) {
                const cell = game.board[i][j];
                if (cell instanceof _src_model__WEBPACK_IMPORTED_MODULE_0__.ShipDatum) {
                    const oldCoordinates = coordinates.get(cell.ship) || [];
                    coordinates.set(cell.ship, oldCoordinates.concat([[i, j]]));
                }
            }
        }
        // sink all ships
        for (const ship of game.navy) {
            const placement = coordinates.get(ship) || [];
            for (const [row, col] of placement) {
                game.receiveAttack(row, col);
            }
        }
        // check if allSunk() works
        expect(game.allSunk()).toBe(true);
    });
});
describe("Player class", () => {
    const humanPlayer = new _src_model__WEBPACK_IMPORTED_MODULE_0__.Player("Bob");
    const computerPlayer = new _src_model__WEBPACK_IMPORTED_MODULE_0__.Computer();
    it("initializes a board property", () => {
        expect(humanPlayer.board).toBeInstanceOf(_src_model__WEBPACK_IMPORTED_MODULE_0__.GameBoard);
        expect(computerPlayer.board).toBeInstanceOf(_src_model__WEBPACK_IMPORTED_MODULE_0__.GameBoard);
    });
    it("player1.setEnemy(player2) method creates a reciprocal 'enemy' relationship", () => {
        humanPlayer.setEnemy(computerPlayer);
        expect(humanPlayer.enemy).toBe(computerPlayer);
        expect(computerPlayer.enemy).toBe(humanPlayer);
    });
    it("makeMove calls receiveAttack on enemy board", () => {
        const enemyBoard = jest.spyOn(computerPlayer.board, "receiveAttack");
        humanPlayer.makeMove([0, 0]);
        expect(enemyBoard).toHaveBeenCalled();
    });
});
describe("Computer class", () => {
    const dummyPlayer = new _src_model__WEBPACK_IMPORTED_MODULE_0__.Player("Bob");
    const computer = new _src_model__WEBPACK_IMPORTED_MODULE_0__.Computer();
    computer.setEnemy(dummyPlayer);
    it("inherits from Player class", () => {
        expect(computer).toBeInstanceOf(_src_model__WEBPACK_IMPORTED_MODULE_0__.Player);
    });
    it("automaticPlay calls makeMove with random coordinates", () => {
        const makeMoveMock = jest.spyOn(computer, "makeMove");
        computer.automaticPlay();
        expect(makeMoveMock).toHaveBeenCalled();
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akM7QUFDQTtBQUNBLHdDQUF3Qyw4Q0FBTTtBQUM5QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi90ZXN0cy9tb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgICAgIHRoaXMuc3Vua2VuID0gZmFsc2U7XG4gICAgfVxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgdGhpcy5zdW5rZW4gPSB0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0aGlzLnN1bmtlbjtcbiAgICB9XG59XG5jbGFzcyBTaGlwRGF0dW0ge1xuICAgIGNvbnN0cnVjdG9yKHNoaXApIHtcbiAgICAgICAgdGhpcy5zaGlwID0gc2hpcDtcbiAgICAgICAgdGhpcy53YXNIaXQgPSBmYWxzZTtcbiAgICB9XG59XG5jbGFzcyBHYW1lQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHNpemUgPSAxMCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2l6ZSB9LCAoKSA9PiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzaXplIH0sICgpID0+IGZhbHNlKSk7XG4gICAgfVxuICAgIGJ1aWxkTmF2eShsZW5ndGhzID0gWzIsIDMsIDMsIDQsIDVdKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBsZW5ndGggb2YgbGVuZ3Rocykge1xuICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBuZXcgU2hpcChsZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBbcm93LCBjb2xdIG9mIHRoaXMuZ2VuZXJhdGVQb3NpdGlvbnMobGVuZ3RoLCBtb2RlbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IG5ldyBTaGlwRGF0dW0obW9kZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvZHVjdGlvbi5wdXNoKG1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hdnkgPSBuZXcgU2V0KHByb2R1Y3Rpb24pO1xuICAgIH1cbiAgICBnZW5lcmF0ZVBvc2l0aW9ucyhsZW5ndGgsIHNoaXApIHtcbiAgICAgICAgbGV0IHBvc2l0aW9ucyA9IFtdO1xuICAgICAgICBsZXQgW3JvdywgY29sXSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDIgfSwgKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09IDA7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmJvYXJkLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKHBvc2l0aW9ucy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG91dE9mQm91bmRzID0gY29sID49IHNpemUgfHwgcm93ID49IHNpemU7XG4gICAgICAgICAgICBjb25zdCBuZWlnaGJvcnMgPSBbWy0xLCAwXSwgWzAsIC0xXSwgWzAsIDBdLCBbMCwgMV0sIFsxLCAwXV0ubWFwKChbb2Zmc2V0WCwgb2Zmc2V0WV0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbciwgY10gPSBbcm93ICsgb2Zmc2V0WCwgY29sICsgb2Zmc2V0WV07XG4gICAgICAgICAgICAgICAgaWYgKHIgPj0gMCAmJiByIDwgc2l6ZSAmJiBjID49IDAgJiYgYyA8IHNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcl1bY107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBzaGlwTmVhcmJ5ID0gbmVpZ2hib3JzLnNvbWUobmVpZ2hib3IgPT4gbmVpZ2hib3IgaW5zdGFuY2VvZiBTaGlwRGF0dW0gJiYgbmVpZ2hib3Iuc2hpcCAhPT0gc2hpcCk7XG4gICAgICAgICAgICBpZiAoc2hpcE5lYXJieSB8fCBvdXRPZkJvdW5kcylcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVBvc2l0aW9ucyhsZW5ndGgsIHNoaXApO1xuICAgICAgICAgICAgcG9zaXRpb25zLnB1c2goW3JvdywgY29sXSk7XG4gICAgICAgICAgICBob3Jpem9udGFsID8gY29sKysgOiByb3crKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zaXRpb25zO1xuICAgIH1cbiAgICByZWNlaXZlQXR0YWNrKHJvdywgY29sKSB7XG4gICAgICAgIGlmIChyb3cgPj0gMCAmJiByb3cgPCB0aGlzLmJvYXJkLmxlbmd0aCAmJiBjb2wgPj0gMCAmJiBjb2wgPCB0aGlzLmJvYXJkLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuICAgICAgICAgICAgaWYgKGNlbGwgaW5zdGFuY2VvZiBTaGlwRGF0dW0pIHtcbiAgICAgICAgICAgICAgICBjZWxsLndhc0hpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbC5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFsbFN1bmsoKSB7XG4gICAgICAgIGlmICghdGhpcy5uYXZ5KVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgaXMgbm8gbmF2eS4gQ2FsbCB0aGlzLmJ1aWxkTmF2eSgpXCIpO1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMubmF2eV0uZXZlcnkoc2hpcCA9PiBzaGlwLnN1bmtlbik7XG4gICAgfVxufVxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgICAgIHRoaXMuYm9hcmQuYnVpbGROYXZ5KCk7XG4gICAgfVxuICAgIHNldEVuZW15KHBsYXllcikge1xuICAgICAgICB0aGlzLmVuZW15ID0gcGxheWVyO1xuICAgICAgICB0aGlzLmVuZW15LmVuZW15ID0gdGhpczsgLy8gcmVjaXByb2NhbCByZWxhdGlvbnNoaXBcbiAgICB9XG4gICAgbWFrZU1vdmUoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgY29uc3QgW2d1ZXNzUm93LCBndWVzc0NvbF0gPSBjb29yZGluYXRlcztcbiAgICAgICAgaWYgKCF0aGlzLmVuZW15KVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IG1ha2VNb3ZlIHdpdGhvdXQgZW5lbXlcIik7XG4gICAgICAgIHJldHVybiAhIXRoaXMuZW5lbXkuYm9hcmQucmVjZWl2ZUF0dGFjayhndWVzc1JvdywgZ3Vlc3NDb2wpO1xuICAgIH1cbn1cbmNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJDb21wdXRlclwiKTtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgfVxuICAgIGF1dG9tYXRpY1BsYXkoKSB7XG4gICAgICAgIGNvbnN0IFtyYW5kb21Sb3csIHJhbmRvbUNvbF0gPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAyIH0sICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICAgIGlmICh0aGlzLmhpc3RvcnkuaW5jbHVkZXMoW3JhbmRvbVJvdywgcmFuZG9tQ29sXSkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aWNQbGF5KCk7IC8vIHRyeSBhZ2FpblxuICAgICAgICB0aGlzLmhpc3RvcnkucHVzaChbcmFuZG9tUm93LCByYW5kb21Db2xdKTtcbiAgICAgICAgdGhpcy5tYWtlTW92ZShbcmFuZG9tUm93LCByYW5kb21Db2xdKTtcbiAgICB9XG59XG5leHBvcnQgeyBTaGlwLCBTaGlwRGF0dW0sIEdhbWVCb2FyZCwgUGxheWVyLCBDb21wdXRlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBTaGlwLCBHYW1lQm9hcmQsIFNoaXBEYXR1bSwgUGxheWVyLCBDb21wdXRlciB9IGZyb20gXCIuLi9zcmMvbW9kZWxcIjtcbmRlc2NyaWJlKFwiU2hpcCBjbGFzc1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKDUpO1xuICAgIGl0KFwiaW5pdGlhbGl6ZXMgbGVuZ3RoLCBoaXRzLCBhbmQgc3Vua2VuIHByb3BlcnRpZXNcIiwgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2hpcC5sZW5ndGgpLnRvQmUoNSk7XG4gICAgICAgIGV4cGVjdChzaGlwLmhpdHMpLnRvQmUoMCk7XG4gICAgICAgIGV4cGVjdChzaGlwLnN1bmtlbikudG9CZShmYWxzZSk7XG4gICAgfSk7XG4gICAgaXQoXCIuaGl0KCkgbWV0aG9kIGluY3JlbWVudHMgaGl0c1wiLCAoKSA9PiB7XG4gICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgIGV4cGVjdChzaGlwLmhpdHMpLnRvQmUoMSk7XG4gICAgfSk7XG4gICAgaXQoXCIuaGl0KCkgaW52b2tlcyAuaXNTdW5rKClcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2NrID0gamVzdC5zcHlPbihzaGlwLCBcImlzU3Vua1wiKTtcbiAgICAgICAgc2hpcC5oaXQoKTtcbiAgICAgICAgZXhwZWN0KG1vY2spLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICB9KTtcbiAgICBpdChcIi5pc1N1bmsoKSByZXR1cm5zIGZhbHNlIGlmIGhpdHMgYXJlIGxlc3MgdGhhbiBsZW5ndGhcIiwgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2hpcC5pc1N1bmsoKSkudG9CZShmYWxzZSk7XG4gICAgfSk7XG4gICAgaXQoXCIuaXNTdW5rKCkgcmV0dXJucyB0cnVlIGlmIGhpdHMgYXJlIGVxdWFsIHRvIGl0cyBsZW5ndGhcIiwgKCkgPT4ge1xuICAgICAgICB3aGlsZSAoc2hpcC5sZW5ndGggLSBzaGlwLmhpdHMgPj0gMClcbiAgICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgIGV4cGVjdChzaGlwLmlzU3VuaygpKS50b0JlKHRydWUpO1xuICAgIH0pO1xuICAgIGl0KFwiLmlzU3VuaygpIHVwZGF0ZXMgLnN1bmtlbiBwcm9wZXJ0eVwiLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChzaGlwLnN1bmtlbikudG9CZSh0cnVlKTtcbiAgICB9KTtcbn0pO1xuZGVzY3JpYmUoXCJHYW1lQm9hcmQgY2xhc3NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHNpemUgPSAxMDtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWVCb2FyZChzaXplKTtcbiAgICBpdChcImluaXRpYWxpemVzIHRoZSBib2FyZCBwcm9wZXJ0eSBhcyBhIHNxdWFyZSBtYXRyaXggb2YgZmFsc3kgdmFsdWVzXCIsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KGdhbWUuYm9hcmQubGVuZ3RoKS50b0VxdWFsKHNpemUpO1xuICAgICAgICBnYW1lLmJvYXJkLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGV4cGVjdChyb3cubGVuZ3RoKS50b0VxdWFsKHNpemUpO1xuICAgICAgICAgICAgcm93LmZvckVhY2goY2VsbCA9PiBleHBlY3QoY2VsbCkudG9CZUZhbHN5KCkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpdChcImJ1aWxkTmF2eSBtZXRob2QgYXNzaWducyBhIHNldCBvZiBTaGlwIG9iamVjdHMgdG8gbmF2eSBwYXJhbWV0ZXJcIiwgKCkgPT4ge1xuICAgICAgICBnYW1lLmJ1aWxkTmF2eSgpO1xuICAgICAgICBleHBlY3QoZ2FtZS5uYXZ5KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG4gICAgaXQoXCJidWlsZE5hdnkgbWV0aG9kIHBvcHVsYXRlcyAuYm9hcmQgd2l0aCBzaGlwIGRhdHVtcyBvZiBleHBlY3RlZCBsZW5ndGhcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoIWdhbWUubmF2eSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vIG5hdnkgdG8gdGVzdCFcIik7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uTGVuZ3RocyA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCByb3cgb2YgZ2FtZS5ib2FyZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIHJvdykge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsIGluc3RhbmNlb2YgU2hpcERhdHVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChjZWxsLndhc0hpdCkudG9CZUZhbHN5KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcG9zaXRpb25MZW5ndGhzLmdldChjZWxsLnNoaXApIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uTGVuZ3Rocy5zZXQoY2VsbC5zaGlwLCB2YWx1ZSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBzaGlwIG9mIGdhbWUubmF2eSkge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25MZW5ndGggPSBwb3NpdGlvbkxlbmd0aHMuZ2V0KHNoaXApIHx8IDA7XG4gICAgICAgICAgICBleHBlY3Qoc2hpcC5sZW5ndGgpLnRvQmUocG9zaXRpb25MZW5ndGgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaXQoXCJyZWNlaXZlQXR0YWNrKCkgbXV0YXRlcyBib2FyZCB0byB0cnV0aHkgdmFsdWUgKGFuZCBjYWxscyAuaGl0IG9uIFNoaXBEYXR1bSlcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoZ2FtZS5ib2FyZFswXVswXSBpbnN0YW5jZW9mIFNoaXBEYXR1bSkge1xuICAgICAgICAgICAgY29uc3QgbW9jayA9IGplc3Quc3B5T24oZ2FtZS5ib2FyZFswXVswXS5zaGlwLCBcImhpdFwiKTtcbiAgICAgICAgICAgIGdhbWUucmVjZWl2ZUF0dGFjaygwLCAwKTtcbiAgICAgICAgICAgIGV4cGVjdChtb2NrKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgICAgICAgICBleHBlY3QoZ2FtZS5ib2FyZFswXVswXS53YXNIaXQpLnRvQmVUcnV0aHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdhbWUucmVjZWl2ZUF0dGFjaygwLCAwKTtcbiAgICAgICAgICAgIGV4cGVjdChnYW1lLmJvYXJkWzBdWzBdKS50b0JlVHJ1dGh5KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpdChcImFsbFN1bmsoKSByZXR1cm5zIHRydWUgaWYgYWxsIHRoZSBzaGlwcyBvbiB0aGUgYm9hcmQgYXJlIHN1bmtcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoIWdhbWUubmF2eSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vIG5hdnkgdG8gdGVzdCFcIik7XG4gICAgICAgIC8vIGNvbGxlY3QgY29vcmRpbmF0ZXMgb2YgZWFjaCBzaGlwXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gbmV3IE1hcCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWUuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZS5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBnYW1lLmJvYXJkW2ldW2pdO1xuICAgICAgICAgICAgICAgIGlmIChjZWxsIGluc3RhbmNlb2YgU2hpcERhdHVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZENvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXMuZ2V0KGNlbGwuc2hpcCkgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnNldChjZWxsLnNoaXAsIG9sZENvb3JkaW5hdGVzLmNvbmNhdChbW2ksIGpdXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBzaW5rIGFsbCBzaGlwc1xuICAgICAgICBmb3IgKGNvbnN0IHNoaXAgb2YgZ2FtZS5uYXZ5KSB7XG4gICAgICAgICAgICBjb25zdCBwbGFjZW1lbnQgPSBjb29yZGluYXRlcy5nZXQoc2hpcCkgfHwgW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtyb3csIGNvbF0gb2YgcGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgZ2FtZS5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBpZiBhbGxTdW5rKCkgd29ya3NcbiAgICAgICAgZXhwZWN0KGdhbWUuYWxsU3VuaygpKS50b0JlKHRydWUpO1xuICAgIH0pO1xufSk7XG5kZXNjcmliZShcIlBsYXllciBjbGFzc1wiLCAoKSA9PiB7XG4gICAgY29uc3QgaHVtYW5QbGF5ZXIgPSBuZXcgUGxheWVyKFwiQm9iXCIpO1xuICAgIGNvbnN0IGNvbXB1dGVyUGxheWVyID0gbmV3IENvbXB1dGVyKCk7XG4gICAgaXQoXCJpbml0aWFsaXplcyBhIGJvYXJkIHByb3BlcnR5XCIsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KGh1bWFuUGxheWVyLmJvYXJkKS50b0JlSW5zdGFuY2VPZihHYW1lQm9hcmQpO1xuICAgICAgICBleHBlY3QoY29tcHV0ZXJQbGF5ZXIuYm9hcmQpLnRvQmVJbnN0YW5jZU9mKEdhbWVCb2FyZCk7XG4gICAgfSk7XG4gICAgaXQoXCJwbGF5ZXIxLnNldEVuZW15KHBsYXllcjIpIG1ldGhvZCBjcmVhdGVzIGEgcmVjaXByb2NhbCAnZW5lbXknIHJlbGF0aW9uc2hpcFwiLCAoKSA9PiB7XG4gICAgICAgIGh1bWFuUGxheWVyLnNldEVuZW15KGNvbXB1dGVyUGxheWVyKTtcbiAgICAgICAgZXhwZWN0KGh1bWFuUGxheWVyLmVuZW15KS50b0JlKGNvbXB1dGVyUGxheWVyKTtcbiAgICAgICAgZXhwZWN0KGNvbXB1dGVyUGxheWVyLmVuZW15KS50b0JlKGh1bWFuUGxheWVyKTtcbiAgICB9KTtcbiAgICBpdChcIm1ha2VNb3ZlIGNhbGxzIHJlY2VpdmVBdHRhY2sgb24gZW5lbXkgYm9hcmRcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBlbmVteUJvYXJkID0gamVzdC5zcHlPbihjb21wdXRlclBsYXllci5ib2FyZCwgXCJyZWNlaXZlQXR0YWNrXCIpO1xuICAgICAgICBodW1hblBsYXllci5tYWtlTW92ZShbMCwgMF0pO1xuICAgICAgICBleHBlY3QoZW5lbXlCb2FyZCkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgIH0pO1xufSk7XG5kZXNjcmliZShcIkNvbXB1dGVyIGNsYXNzXCIsICgpID0+IHtcbiAgICBjb25zdCBkdW1teVBsYXllciA9IG5ldyBQbGF5ZXIoXCJCb2JcIik7XG4gICAgY29uc3QgY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKTtcbiAgICBjb21wdXRlci5zZXRFbmVteShkdW1teVBsYXllcik7XG4gICAgaXQoXCJpbmhlcml0cyBmcm9tIFBsYXllciBjbGFzc1wiLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChjb21wdXRlcikudG9CZUluc3RhbmNlT2YoUGxheWVyKTtcbiAgICB9KTtcbiAgICBpdChcImF1dG9tYXRpY1BsYXkgY2FsbHMgbWFrZU1vdmUgd2l0aCByYW5kb20gY29vcmRpbmF0ZXNcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBtYWtlTW92ZU1vY2sgPSBqZXN0LnNweU9uKGNvbXB1dGVyLCBcIm1ha2VNb3ZlXCIpO1xuICAgICAgICBjb21wdXRlci5hdXRvbWF0aWNQbGF5KCk7XG4gICAgICAgIGV4cGVjdChtYWtlTW92ZU1vY2spLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9