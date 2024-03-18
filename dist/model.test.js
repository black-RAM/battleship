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
                if (cell.wasHit == false)
                    cell.ship.hit();
                cell.wasHit = true;
                return;
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
        this.enemy.board.receiveAttack(guessRow, guessCol);
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
    it("Does not repeat the same coordinates", () => {
        const computerMoveMakerSpy = jest.spyOn(computer, "makeMove");
        const attackedCoordinates = [];
        for (let hits = 0; hits < 100; hits++) {
            computer.automaticPlay();
            const target = computerMoveMakerSpy.mock.calls[hits];
            expect(attackedCoordinates).not.toContain(target);
            attackedCoordinates.push(target.flat());
        }
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwudGVzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGNBQWMscUJBQXFCLGNBQWM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxXQUFXO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFdBQVc7QUFDL0Q7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDd0Q7Ozs7Ozs7VUN6R3hEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONEU7QUFDNUU7QUFDQSxxQkFBcUIsNENBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHFCQUFxQixpREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlEQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx3Q0FBd0MsaURBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQSxvQ0FBb0MsaURBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSw0QkFBNEIsOENBQU07QUFDbEMsK0JBQStCLGdEQUFRO0FBQ3ZDO0FBQ0EsaURBQWlELGlEQUFTO0FBQzFELG9EQUFvRCxpREFBUztBQUM3RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EsNEJBQTRCLDhDQUFNO0FBQ2xDLHlCQUF5QixnREFBUTtBQUNqQztBQUNBO0FBQ0Esd0NBQXdDLDhDQUFNO0FBQzlDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vdGVzdHMvbW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLnN1bmtlbiA9IGZhbHNlO1xuICAgIH1cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cysrO1xuICAgICAgICB0aGlzLmlzU3VuaygpO1xuICAgIH1cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHRoaXMuc3Vua2VuID0gdGhpcy5oaXRzID49IHRoaXMubGVuZ3RoO1xuICAgICAgICByZXR1cm4gdGhpcy5zdW5rZW47XG4gICAgfVxufVxuY2xhc3MgU2hpcERhdHVtIHtcbiAgICBjb25zdHJ1Y3RvcihzaGlwKSB7XG4gICAgICAgIHRoaXMuc2hpcCA9IHNoaXA7XG4gICAgICAgIHRoaXMud2FzSGl0ID0gZmFsc2U7XG4gICAgfVxufVxuY2xhc3MgR2FtZUJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplID0gMTApIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHNpemUgfSwgKCkgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2l6ZSB9LCAoKSA9PiBmYWxzZSkpO1xuICAgIH1cbiAgICBidWlsZE5hdnkobGVuZ3RocyA9IFsyLCAzLCAzLCA0LCA1XSkge1xuICAgICAgICBjb25zdCBwcm9kdWN0aW9uID0gW107XG4gICAgICAgIGZvciAoY29uc3QgbGVuZ3RoIG9mIGxlbmd0aHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3JvdywgY29sXSBvZiB0aGlzLmdlbmVyYXRlUG9zaXRpb25zKGxlbmd0aCwgbW9kZWwpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBuZXcgU2hpcERhdHVtKG1vZGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2R1Y3Rpb24ucHVzaChtb2RlbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYXZ5ID0gbmV3IFNldChwcm9kdWN0aW9uKTtcbiAgICB9XG4gICAgZ2VuZXJhdGVQb3NpdGlvbnMobGVuZ3RoLCBzaGlwKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAyIH0sICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICAgIGNvbnN0IGhvcml6b250YWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PSAwO1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5ib2FyZC5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChwb3NpdGlvbnMubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBvdXRPZkJvdW5kcyA9IGNvbCA+PSBzaXplIHx8IHJvdyA+PSBzaXplO1xuICAgICAgICAgICAgY29uc3QgbmVpZ2hib3JzID0gW1stMSwgMF0sIFswLCAtMV0sIFswLCAwXSwgWzAsIDFdLCBbMSwgMF1dLm1hcCgoW29mZnNldFgsIG9mZnNldFldKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3IsIGNdID0gW3JvdyArIG9mZnNldFgsIGNvbCArIG9mZnNldFldO1xuICAgICAgICAgICAgICAgIGlmIChyID49IDAgJiYgciA8IHNpemUgJiYgYyA+PSAwICYmIGMgPCBzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3JdW2NdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2hpcE5lYXJieSA9IG5laWdoYm9ycy5zb21lKG5laWdoYm9yID0+IG5laWdoYm9yIGluc3RhbmNlb2YgU2hpcERhdHVtICYmIG5laWdoYm9yLnNoaXAgIT09IHNoaXApO1xuICAgICAgICAgICAgaWYgKHNoaXBOZWFyYnkgfHwgb3V0T2ZCb3VuZHMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVQb3NpdGlvbnMobGVuZ3RoLCBzaGlwKTtcbiAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgICAgICAgaG9yaXpvbnRhbCA/IGNvbCsrIDogcm93Kys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgICB9XG4gICAgcmVjZWl2ZUF0dGFjayhyb3csIGNvbCkge1xuICAgICAgICBpZiAocm93ID49IDAgJiYgcm93IDwgdGhpcy5ib2FyZC5sZW5ndGggJiYgY29sID49IDAgJiYgY29sIDwgdGhpcy5ib2FyZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgICAgIGlmIChjZWxsIGluc3RhbmNlb2YgU2hpcERhdHVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGwud2FzSGl0ID09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICBjZWxsLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICAgICAgY2VsbC53YXNIaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbGxTdW5rKCkge1xuICAgICAgICBpZiAoIXRoaXMubmF2eSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGlzIG5vIG5hdnkuIENhbGwgdGhpcy5idWlsZE5hdnkoKVwiKTtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLm5hdnldLmV2ZXJ5KHNoaXAgPT4gc2hpcC5zdW5rZW4pO1xuICAgIH1cbn1cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgICAgICB0aGlzLmJvYXJkLmJ1aWxkTmF2eSgpO1xuICAgIH1cbiAgICBzZXRFbmVteShwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5lbmVteSA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5lbmVteS5lbmVteSA9IHRoaXM7IC8vIHJlY2lwcm9jYWwgcmVsYXRpb25zaGlwXG4gICAgfVxuICAgIG1ha2VNb3ZlKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGNvbnN0IFtndWVzc1JvdywgZ3Vlc3NDb2xdID0gY29vcmRpbmF0ZXM7XG4gICAgICAgIGlmICghdGhpcy5lbmVteSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbm5vdCBtYWtlTW92ZSB3aXRob3V0IGVuZW15XCIpO1xuICAgICAgICB0aGlzLmVuZW15LmJvYXJkLnJlY2VpdmVBdHRhY2soZ3Vlc3NSb3csIGd1ZXNzQ29sKTtcbiAgICB9XG59XG5jbGFzcyBDb21wdXRlciBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFwiQ29tcHV0ZXJcIik7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xuICAgIH1cbiAgICBhdXRvbWF0aWNQbGF5KCkge1xuICAgICAgICBjb25zdCBbcmFuZG9tUm93LCByYW5kb21Db2xdID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMiB9LCAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgICAgICBpZiAodGhpcy5oaXN0b3J5LmluY2x1ZGVzKFtyYW5kb21Sb3csIHJhbmRvbUNvbF0pKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGljUGxheSgpOyAvLyB0cnkgYWdhaW5cbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2goW3JhbmRvbVJvdywgcmFuZG9tQ29sXSk7XG4gICAgICAgIHRoaXMubWFrZU1vdmUoW3JhbmRvbVJvdywgcmFuZG9tQ29sXSk7XG4gICAgfVxufVxuZXhwb3J0IHsgU2hpcCwgU2hpcERhdHVtLCBHYW1lQm9hcmQsIFBsYXllciwgQ29tcHV0ZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgU2hpcCwgR2FtZUJvYXJkLCBTaGlwRGF0dW0sIFBsYXllciwgQ29tcHV0ZXIgfSBmcm9tIFwiLi4vc3JjL21vZGVsXCI7XG5kZXNjcmliZShcIlNoaXAgY2xhc3NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcCg1KTtcbiAgICBpdChcImluaXRpYWxpemVzIGxlbmd0aCwgaGl0cywgYW5kIHN1bmtlbiBwcm9wZXJ0aWVzXCIsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNoaXAubGVuZ3RoKS50b0JlKDUpO1xuICAgICAgICBleHBlY3Qoc2hpcC5oaXRzKS50b0JlKDApO1xuICAgICAgICBleHBlY3Qoc2hpcC5zdW5rZW4pLnRvQmUoZmFsc2UpO1xuICAgIH0pO1xuICAgIGl0KFwiLmhpdCgpIG1ldGhvZCBpbmNyZW1lbnRzIGhpdHNcIiwgKCkgPT4ge1xuICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICBleHBlY3Qoc2hpcC5oaXRzKS50b0JlKDEpO1xuICAgIH0pO1xuICAgIGl0KFwiLmhpdCgpIGludm9rZXMgLmlzU3VuaygpXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9jayA9IGplc3Quc3B5T24oc2hpcCwgXCJpc1N1bmtcIik7XG4gICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgIGV4cGVjdChtb2NrKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgfSk7XG4gICAgaXQoXCIuaXNTdW5rKCkgcmV0dXJucyBmYWxzZSBpZiBoaXRzIGFyZSBsZXNzIHRoYW4gbGVuZ3RoXCIsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNoaXAuaXNTdW5rKCkpLnRvQmUoZmFsc2UpO1xuICAgIH0pO1xuICAgIGl0KFwiLmlzU3VuaygpIHJldHVybnMgdHJ1ZSBpZiBoaXRzIGFyZSBlcXVhbCB0byBpdHMgbGVuZ3RoXCIsICgpID0+IHtcbiAgICAgICAgd2hpbGUgKHNoaXAubGVuZ3RoIC0gc2hpcC5oaXRzID49IDApXG4gICAgICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICBleHBlY3Qoc2hpcC5pc1N1bmsoKSkudG9CZSh0cnVlKTtcbiAgICB9KTtcbiAgICBpdChcIi5pc1N1bmsoKSB1cGRhdGVzIC5zdW5rZW4gcHJvcGVydHlcIiwgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2hpcC5zdW5rZW4pLnRvQmUodHJ1ZSk7XG4gICAgfSk7XG59KTtcbmRlc2NyaWJlKFwiR2FtZUJvYXJkIGNsYXNzXCIsICgpID0+IHtcbiAgICBjb25zdCBzaXplID0gMTA7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lQm9hcmQoc2l6ZSk7XG4gICAgaXQoXCJpbml0aWFsaXplcyB0aGUgYm9hcmQgcHJvcGVydHkgYXMgYSBzcXVhcmUgbWF0cml4IG9mIGZhbHN5IHZhbHVlc1wiLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChnYW1lLmJvYXJkLmxlbmd0aCkudG9FcXVhbChzaXplKTtcbiAgICAgICAgZ2FtZS5ib2FyZC5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBleHBlY3Qocm93Lmxlbmd0aCkudG9FcXVhbChzaXplKTtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKGNlbGwgPT4gZXhwZWN0KGNlbGwpLnRvQmVGYWxzeSgpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaXQoXCJidWlsZE5hdnkgbWV0aG9kIGFzc2lnbnMgYSBzZXQgb2YgU2hpcCBvYmplY3RzIHRvIG5hdnkgcGFyYW1ldGVyXCIsICgpID0+IHtcbiAgICAgICAgZ2FtZS5idWlsZE5hdnkoKTtcbiAgICAgICAgZXhwZWN0KGdhbWUubmF2eSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuICAgIGl0KFwiYnVpbGROYXZ5IG1ldGhvZCBwb3B1bGF0ZXMgLmJvYXJkIHdpdGggc2hpcCBkYXR1bXMgb2YgZXhwZWN0ZWQgbGVuZ3RoXCIsICgpID0+IHtcbiAgICAgICAgaWYgKCFnYW1lLm5hdnkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJubyBuYXZ5IHRvIHRlc3QhXCIpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbkxlbmd0aHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3Qgcm93IG9mIGdhbWUuYm9hcmQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiByb3cpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbCBpbnN0YW5jZW9mIFNoaXBEYXR1bSkge1xuICAgICAgICAgICAgICAgICAgICBleHBlY3QoY2VsbC53YXNIaXQpLnRvQmVGYWxzeSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBvc2l0aW9uTGVuZ3Rocy5nZXQoY2VsbC5zaGlwKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkxlbmd0aHMuc2V0KGNlbGwuc2hpcCwgdmFsdWUgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgc2hpcCBvZiBnYW1lLm5hdnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uTGVuZ3RoID0gcG9zaXRpb25MZW5ndGhzLmdldChzaGlwKSB8fCAwO1xuICAgICAgICAgICAgZXhwZWN0KHNoaXAubGVuZ3RoKS50b0JlKHBvc2l0aW9uTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGl0KFwicmVjZWl2ZUF0dGFjaygpIG11dGF0ZXMgYm9hcmQgdG8gdHJ1dGh5IHZhbHVlIChhbmQgY2FsbHMgLmhpdCBvbiBTaGlwRGF0dW0pXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGdhbWUuYm9hcmRbMF1bMF0gaW5zdGFuY2VvZiBTaGlwRGF0dW0pIHtcbiAgICAgICAgICAgIGNvbnN0IG1vY2sgPSBqZXN0LnNweU9uKGdhbWUuYm9hcmRbMF1bMF0uc2hpcCwgXCJoaXRcIik7XG4gICAgICAgICAgICBnYW1lLnJlY2VpdmVBdHRhY2soMCwgMCk7XG4gICAgICAgICAgICBleHBlY3QobW9jaykudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICAgICAgZXhwZWN0KGdhbWUuYm9hcmRbMF1bMF0ud2FzSGl0KS50b0JlVHJ1dGh5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBnYW1lLnJlY2VpdmVBdHRhY2soMCwgMCk7XG4gICAgICAgICAgICBleHBlY3QoZ2FtZS5ib2FyZFswXVswXSkudG9CZVRydXRoeSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaXQoXCJhbGxTdW5rKCkgcmV0dXJucyB0cnVlIGlmIGFsbCB0aGUgc2hpcHMgb24gdGhlIGJvYXJkIGFyZSBzdW5rXCIsICgpID0+IHtcbiAgICAgICAgaWYgKCFnYW1lLm5hdnkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJubyBuYXZ5IHRvIHRlc3QhXCIpO1xuICAgICAgICAvLyBjb2xsZWN0IGNvb3JkaW5hdGVzIG9mIGVhY2ggc2hpcFxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWUuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZ2FtZS5ib2FyZFtpXVtqXTtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbCBpbnN0YW5jZW9mIFNoaXBEYXR1bSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzLmdldChjZWxsLnNoaXApIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5zZXQoY2VsbC5zaGlwLCBvbGRDb29yZGluYXRlcy5jb25jYXQoW1tpLCBqXV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2luayBhbGwgc2hpcHNcbiAgICAgICAgZm9yIChjb25zdCBzaGlwIG9mIGdhbWUubmF2eSkge1xuICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gY29vcmRpbmF0ZXMuZ2V0KHNoaXApIHx8IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBbcm93LCBjb2xdIG9mIHBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgIGdhbWUucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgaWYgYWxsU3VuaygpIHdvcmtzXG4gICAgICAgIGV4cGVjdChnYW1lLmFsbFN1bmsoKSkudG9CZSh0cnVlKTtcbiAgICB9KTtcbn0pO1xuZGVzY3JpYmUoXCJQbGF5ZXIgY2xhc3NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGh1bWFuUGxheWVyID0gbmV3IFBsYXllcihcIkJvYlwiKTtcbiAgICBjb25zdCBjb21wdXRlclBsYXllciA9IG5ldyBDb21wdXRlcigpO1xuICAgIGl0KFwiaW5pdGlhbGl6ZXMgYSBib2FyZCBwcm9wZXJ0eVwiLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChodW1hblBsYXllci5ib2FyZCkudG9CZUluc3RhbmNlT2YoR2FtZUJvYXJkKTtcbiAgICAgICAgZXhwZWN0KGNvbXB1dGVyUGxheWVyLmJvYXJkKS50b0JlSW5zdGFuY2VPZihHYW1lQm9hcmQpO1xuICAgIH0pO1xuICAgIGl0KFwicGxheWVyMS5zZXRFbmVteShwbGF5ZXIyKSBtZXRob2QgY3JlYXRlcyBhIHJlY2lwcm9jYWwgJ2VuZW15JyByZWxhdGlvbnNoaXBcIiwgKCkgPT4ge1xuICAgICAgICBodW1hblBsYXllci5zZXRFbmVteShjb21wdXRlclBsYXllcik7XG4gICAgICAgIGV4cGVjdChodW1hblBsYXllci5lbmVteSkudG9CZShjb21wdXRlclBsYXllcik7XG4gICAgICAgIGV4cGVjdChjb21wdXRlclBsYXllci5lbmVteSkudG9CZShodW1hblBsYXllcik7XG4gICAgfSk7XG4gICAgaXQoXCJtYWtlTW92ZSBjYWxscyByZWNlaXZlQXR0YWNrIG9uIGVuZW15IGJvYXJkXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgZW5lbXlCb2FyZCA9IGplc3Quc3B5T24oY29tcHV0ZXJQbGF5ZXIuYm9hcmQsIFwicmVjZWl2ZUF0dGFja1wiKTtcbiAgICAgICAgaHVtYW5QbGF5ZXIubWFrZU1vdmUoWzAsIDBdKTtcbiAgICAgICAgZXhwZWN0KGVuZW15Qm9hcmQpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICB9KTtcbn0pO1xuZGVzY3JpYmUoXCJDb21wdXRlciBjbGFzc1wiLCAoKSA9PiB7XG4gICAgY29uc3QgZHVtbXlQbGF5ZXIgPSBuZXcgUGxheWVyKFwiQm9iXCIpO1xuICAgIGNvbnN0IGNvbXB1dGVyID0gbmV3IENvbXB1dGVyKCk7XG4gICAgY29tcHV0ZXIuc2V0RW5lbXkoZHVtbXlQbGF5ZXIpO1xuICAgIGl0KFwiaW5oZXJpdHMgZnJvbSBQbGF5ZXIgY2xhc3NcIiwgKCkgPT4ge1xuICAgICAgICBleHBlY3QoY29tcHV0ZXIpLnRvQmVJbnN0YW5jZU9mKFBsYXllcik7XG4gICAgfSk7XG4gICAgaXQoXCJhdXRvbWF0aWNQbGF5IGNhbGxzIG1ha2VNb3ZlIHdpdGggcmFuZG9tIGNvb3JkaW5hdGVzXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFrZU1vdmVNb2NrID0gamVzdC5zcHlPbihjb21wdXRlciwgXCJtYWtlTW92ZVwiKTtcbiAgICAgICAgY29tcHV0ZXIuYXV0b21hdGljUGxheSgpO1xuICAgICAgICBleHBlY3QobWFrZU1vdmVNb2NrKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgfSk7XG4gICAgaXQoXCJEb2VzIG5vdCByZXBlYXQgdGhlIHNhbWUgY29vcmRpbmF0ZXNcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wdXRlck1vdmVNYWtlclNweSA9IGplc3Quc3B5T24oY29tcHV0ZXIsIFwibWFrZU1vdmVcIik7XG4gICAgICAgIGNvbnN0IGF0dGFja2VkQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaGl0cyA9IDA7IGhpdHMgPCAxMDA7IGhpdHMrKykge1xuICAgICAgICAgICAgY29tcHV0ZXIuYXV0b21hdGljUGxheSgpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gY29tcHV0ZXJNb3ZlTWFrZXJTcHkubW9jay5jYWxsc1toaXRzXTtcbiAgICAgICAgICAgIGV4cGVjdChhdHRhY2tlZENvb3JkaW5hdGVzKS5ub3QudG9Db250YWluKHRhcmdldCk7XG4gICAgICAgICAgICBhdHRhY2tlZENvb3JkaW5hdGVzLnB1c2godGFyZ2V0LmZsYXQoKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9