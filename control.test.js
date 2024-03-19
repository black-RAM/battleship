/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/control.ts":
/*!************************!*\
  !*** ./src/control.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.ts");

class GameController {
    constructor(p) {
        this.human = new _model__WEBPACK_IMPORTED_MODULE_0__.Player(p.userName);
        this.computer = new _model__WEBPACK_IMPORTED_MODULE_0__.Computer();
        this.human.setEnemy(this.computer);
        this.humanTurn = p.humanStarts;
        this.rounds = 0;
    }
    async mainLoop(functions) {
        const { viewUpdater, getter, announcer } = functions;
        viewUpdater(this.human.board, this.computer.board); // initialize view
        while (!(this.human.board.allSunk() || this.computer.board.allSunk())) {
            if (this.humanTurn) {
                this.human.makeMove(await getter());
                this.rounds++;
            }
            else {
                this.computer.automaticPlay();
            }
            viewUpdater(this.human.board, this.computer.board);
            this.changeTurn();
        }
        return await this.endGame(announcer);
    }
    async endGame(announcer) {
        const winner = this.humanTurn ? this.computer : this.human;
        const gameData = {
            playAgain: await announcer(winner.name + " has won!"),
            winner: winner.name,
            rounds: this.rounds,
        };
        return gameData;
    }
    changeTurn() {
        this.humanTurn = !this.humanTurn;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);


/***/ }),

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
/*!**************************!*\
  !*** ./tests/control.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/model */ "./src/model.ts");
/* harmony import */ var _src_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/control */ "./src/control.ts");
// import modules to test


// mocks reflect what view.ts module functions do
const getInitialParameters = jest.fn(async () => ({ userName: "Human", humanStarts: true }));
const getUserCoordinates = jest.fn(async () => Array.from({ length: 2 }, () => Math.floor(Math.random() * 10)));
const updateBoards = jest.fn();
const announce = jest.fn(async () => false);
const mockedFunctionParameters = {
    getter: getUserCoordinates,
    viewUpdater: updateBoards,
    announcer: announce
};
describe("GameController class", () => {
    it("sets human and computer player objects as enemies", async () => {
        const game = new _src_control__WEBPACK_IMPORTED_MODULE_1__["default"](await getInitialParameters());
        expect(game.human).toBeInstanceOf(_src_model__WEBPACK_IMPORTED_MODULE_0__.Player);
        expect(game.computer).toBeInstanceOf(_src_model__WEBPACK_IMPORTED_MODULE_0__.Computer);
        expect(game.human.enemy).toBe(game.computer);
        expect(game.computer.enemy).toBe(game.human);
    });
    it("makes the human and computer play in turn", async () => {
        const game = new _src_control__WEBPACK_IMPORTED_MODULE_1__["default"](await getInitialParameters());
        const humanSpy = jest.spyOn(game.human, "makeMove");
        const computerSpy = jest.spyOn(game.computer, "makeMove");
        const { rounds } = await game.mainLoop(mockedFunctionParameters);
        expect(humanSpy).toHaveBeenCalledTimes(rounds);
        expect(computerSpy.mock.calls.length).toBeCloseTo(rounds, -1);
    });
    it("updates the user interface with each play", async () => {
        const game = new _src_control__WEBPACK_IMPORTED_MODULE_1__["default"](await getInitialParameters());
        const { rounds } = await game.mainLoop(mockedFunctionParameters);
        expect(updateBoards.mock.calls.length).toBeGreaterThanOrEqual(rounds);
    });
    it("announces the winner at the end of the game", async () => {
        const game = new _src_control__WEBPACK_IMPORTED_MODULE_1__["default"](await getInitialParameters());
        await game.mainLoop(mockedFunctionParameters);
        expect(game.human.board.allSunk() || game.computer.board.allSunk()).toBe(true);
        expect(announce).toHaveBeenCalled();
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC50ZXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUMzQztBQUNBO0FBQ0EseUJBQXlCLDBDQUFNO0FBQy9CLDRCQUE0Qiw0Q0FBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlDQUFpQztBQUNqRCw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxjQUFjLHFCQUFxQixjQUFjO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsV0FBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxXQUFXO0FBQy9EO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ3dEOzs7Ozs7O1VDekd4RDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ2dEO0FBQ0o7QUFDNUM7QUFDQSxvREFBb0Qsc0NBQXNDO0FBQzFGLDREQUE0RCxXQUFXO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBYztBQUN2QywwQ0FBMEMsOENBQU07QUFDaEQsNkNBQTZDLGdEQUFRO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsb0RBQWM7QUFDdkM7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsb0RBQWM7QUFDdkMsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsb0RBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vdGVzdHMvY29udHJvbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wdXRlciwgUGxheWVyIH0gZnJvbSBcIi4vbW9kZWxcIjtcbmNsYXNzIEdhbWVDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwKSB7XG4gICAgICAgIHRoaXMuaHVtYW4gPSBuZXcgUGxheWVyKHAudXNlck5hbWUpO1xuICAgICAgICB0aGlzLmNvbXB1dGVyID0gbmV3IENvbXB1dGVyKCk7XG4gICAgICAgIHRoaXMuaHVtYW4uc2V0RW5lbXkodGhpcy5jb21wdXRlcik7XG4gICAgICAgIHRoaXMuaHVtYW5UdXJuID0gcC5odW1hblN0YXJ0cztcbiAgICAgICAgdGhpcy5yb3VuZHMgPSAwO1xuICAgIH1cbiAgICBhc3luYyBtYWluTG9vcChmdW5jdGlvbnMpIHtcbiAgICAgICAgY29uc3QgeyB2aWV3VXBkYXRlciwgZ2V0dGVyLCBhbm5vdW5jZXIgfSA9IGZ1bmN0aW9ucztcbiAgICAgICAgdmlld1VwZGF0ZXIodGhpcy5odW1hbi5ib2FyZCwgdGhpcy5jb21wdXRlci5ib2FyZCk7IC8vIGluaXRpYWxpemUgdmlld1xuICAgICAgICB3aGlsZSAoISh0aGlzLmh1bWFuLmJvYXJkLmFsbFN1bmsoKSB8fCB0aGlzLmNvbXB1dGVyLmJvYXJkLmFsbFN1bmsoKSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmh1bWFuVHVybikge1xuICAgICAgICAgICAgICAgIHRoaXMuaHVtYW4ubWFrZU1vdmUoYXdhaXQgZ2V0dGVyKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91bmRzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVyLmF1dG9tYXRpY1BsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZpZXdVcGRhdGVyKHRoaXMuaHVtYW4uYm9hcmQsIHRoaXMuY29tcHV0ZXIuYm9hcmQpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUdXJuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZW5kR2FtZShhbm5vdW5jZXIpO1xuICAgIH1cbiAgICBhc3luYyBlbmRHYW1lKGFubm91bmNlcikge1xuICAgICAgICBjb25zdCB3aW5uZXIgPSB0aGlzLmh1bWFuVHVybiA/IHRoaXMuY29tcHV0ZXIgOiB0aGlzLmh1bWFuO1xuICAgICAgICBjb25zdCBnYW1lRGF0YSA9IHtcbiAgICAgICAgICAgIHBsYXlBZ2FpbjogYXdhaXQgYW5ub3VuY2VyKHdpbm5lci5uYW1lICsgXCIgaGFzIHdvbiFcIiksXG4gICAgICAgICAgICB3aW5uZXI6IHdpbm5lci5uYW1lLFxuICAgICAgICAgICAgcm91bmRzOiB0aGlzLnJvdW5kcyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGdhbWVEYXRhO1xuICAgIH1cbiAgICBjaGFuZ2VUdXJuKCkge1xuICAgICAgICB0aGlzLmh1bWFuVHVybiA9ICF0aGlzLmh1bWFuVHVybjtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udHJvbGxlcjtcbiIsImNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5zdW5rZW4gPSBmYWxzZTtcbiAgICB9XG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMrKztcbiAgICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICB9XG4gICAgaXNTdW5rKCkge1xuICAgICAgICB0aGlzLnN1bmtlbiA9IHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Vua2VuO1xuICAgIH1cbn1cbmNsYXNzIFNoaXBEYXR1bSB7XG4gICAgY29uc3RydWN0b3Ioc2hpcCkge1xuICAgICAgICB0aGlzLnNoaXAgPSBzaGlwO1xuICAgICAgICB0aGlzLndhc0hpdCA9IGZhbHNlO1xuICAgIH1cbn1cbmNsYXNzIEdhbWVCb2FyZCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSA9IDEwKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzaXplIH0sICgpID0+IEFycmF5LmZyb20oeyBsZW5ndGg6IHNpemUgfSwgKCkgPT4gZmFsc2UpKTtcbiAgICB9XG4gICAgYnVpbGROYXZ5KGxlbmd0aHMgPSBbMiwgMywgMywgNCwgNV0pIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdGlvbiA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGxlbmd0aCBvZiBsZW5ndGhzKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RlbCA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtyb3csIGNvbF0gb2YgdGhpcy5nZW5lcmF0ZVBvc2l0aW9ucyhsZW5ndGgsIG1vZGVsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gbmV3IFNoaXBEYXR1bShtb2RlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9kdWN0aW9uLnB1c2gobW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmF2eSA9IG5ldyBTZXQocHJvZHVjdGlvbik7XG4gICAgfVxuICAgIGdlbmVyYXRlUG9zaXRpb25zKGxlbmd0aCwgc2hpcCkge1xuICAgICAgICBsZXQgcG9zaXRpb25zID0gW107XG4gICAgICAgIGxldCBbcm93LCBjb2xdID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMiB9LCAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgICAgICBjb25zdCBob3Jpem9udGFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT0gMDtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuYm9hcmQubGVuZ3RoO1xuICAgICAgICB3aGlsZSAocG9zaXRpb25zLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgb3V0T2ZCb3VuZHMgPSBjb2wgPj0gc2l6ZSB8fCByb3cgPj0gc2l6ZTtcbiAgICAgICAgICAgIGNvbnN0IG5laWdoYm9ycyA9IFtbLTEsIDBdLCBbMCwgLTFdLCBbMCwgMF0sIFswLCAxXSwgWzEsIDBdXS5tYXAoKFtvZmZzZXRYLCBvZmZzZXRZXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtyLCBjXSA9IFtyb3cgKyBvZmZzZXRYLCBjb2wgKyBvZmZzZXRZXTtcbiAgICAgICAgICAgICAgICBpZiAociA+PSAwICYmIHIgPCBzaXplICYmIGMgPj0gMCAmJiBjIDwgc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZFtyXVtjXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBOZWFyYnkgPSBuZWlnaGJvcnMuc29tZShuZWlnaGJvciA9PiBuZWlnaGJvciBpbnN0YW5jZW9mIFNoaXBEYXR1bSAmJiBuZWlnaGJvci5zaGlwICE9PSBzaGlwKTtcbiAgICAgICAgICAgIGlmIChzaGlwTmVhcmJ5IHx8IG91dE9mQm91bmRzKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlUG9zaXRpb25zKGxlbmd0aCwgc2hpcCk7XG4gICAgICAgICAgICBwb3NpdGlvbnMucHVzaChbcm93LCBjb2xdKTtcbiAgICAgICAgICAgIGhvcml6b250YWwgPyBjb2wrKyA6IHJvdysrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NpdGlvbnM7XG4gICAgfVxuICAgIHJlY2VpdmVBdHRhY2socm93LCBjb2wpIHtcbiAgICAgICAgaWYgKHJvdyA+PSAwICYmIHJvdyA8IHRoaXMuYm9hcmQubGVuZ3RoICYmIGNvbCA+PSAwICYmIGNvbCA8IHRoaXMuYm9hcmQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG4gICAgICAgICAgICBpZiAoY2VsbCBpbnN0YW5jZW9mIFNoaXBEYXR1bSkge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLndhc0hpdCA9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgICAgIGNlbGwud2FzSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxsU3VuaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5hdnkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBpcyBubyBuYXZ5LiBDYWxsIHRoaXMuYnVpbGROYXZ5KClcIik7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5uYXZ5XS5ldmVyeShzaGlwID0+IHNoaXAuc3Vua2VuKTtcbiAgICB9XG59XG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICAgICAgdGhpcy5ib2FyZC5idWlsZE5hdnkoKTtcbiAgICB9XG4gICAgc2V0RW5lbXkocGxheWVyKSB7XG4gICAgICAgIHRoaXMuZW5lbXkgPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMuZW5lbXkuZW5lbXkgPSB0aGlzOyAvLyByZWNpcHJvY2FsIHJlbGF0aW9uc2hpcFxuICAgIH1cbiAgICBtYWtlTW92ZShjb29yZGluYXRlcykge1xuICAgICAgICBjb25zdCBbZ3Vlc3NSb3csIGd1ZXNzQ29sXSA9IGNvb3JkaW5hdGVzO1xuICAgICAgICBpZiAoIXRoaXMuZW5lbXkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYW5ub3QgbWFrZU1vdmUgd2l0aG91dCBlbmVteVwiKTtcbiAgICAgICAgdGhpcy5lbmVteS5ib2FyZC5yZWNlaXZlQXR0YWNrKGd1ZXNzUm93LCBndWVzc0NvbCk7XG4gICAgfVxufVxuY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcIkNvbXB1dGVyXCIpO1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICB9XG4gICAgYXV0b21hdGljUGxheSgpIHtcbiAgICAgICAgY29uc3QgW3JhbmRvbVJvdywgcmFuZG9tQ29sXSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDIgfSwgKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICAgICAgaWYgKHRoaXMuaGlzdG9yeS5pbmNsdWRlcyhbcmFuZG9tUm93LCByYW5kb21Db2xdKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG9tYXRpY1BsYXkoKTsgLy8gdHJ5IGFnYWluXG4gICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKFtyYW5kb21Sb3csIHJhbmRvbUNvbF0pO1xuICAgICAgICB0aGlzLm1ha2VNb3ZlKFtyYW5kb21Sb3csIHJhbmRvbUNvbF0pO1xuICAgIH1cbn1cbmV4cG9ydCB7IFNoaXAsIFNoaXBEYXR1bSwgR2FtZUJvYXJkLCBQbGF5ZXIsIENvbXB1dGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBtb2R1bGVzIHRvIHRlc3RcbmltcG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfSBmcm9tIFwiLi4vc3JjL21vZGVsXCI7XG5pbXBvcnQgR2FtZUNvbnRyb2xsZXIgZnJvbSBcIi4uL3NyYy9jb250cm9sXCI7XG4vLyBtb2NrcyByZWZsZWN0IHdoYXQgdmlldy50cyBtb2R1bGUgZnVuY3Rpb25zIGRvXG5jb25zdCBnZXRJbml0aWFsUGFyYW1ldGVycyA9IGplc3QuZm4oYXN5bmMgKCkgPT4gKHsgdXNlck5hbWU6IFwiSHVtYW5cIiwgaHVtYW5TdGFydHM6IHRydWUgfSkpO1xuY29uc3QgZ2V0VXNlckNvb3JkaW5hdGVzID0gamVzdC5mbihhc3luYyAoKSA9PiBBcnJheS5mcm9tKHsgbGVuZ3RoOiAyIH0sICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkpO1xuY29uc3QgdXBkYXRlQm9hcmRzID0gamVzdC5mbigpO1xuY29uc3QgYW5ub3VuY2UgPSBqZXN0LmZuKGFzeW5jICgpID0+IGZhbHNlKTtcbmNvbnN0IG1vY2tlZEZ1bmN0aW9uUGFyYW1ldGVycyA9IHtcbiAgICBnZXR0ZXI6IGdldFVzZXJDb29yZGluYXRlcyxcbiAgICB2aWV3VXBkYXRlcjogdXBkYXRlQm9hcmRzLFxuICAgIGFubm91bmNlcjogYW5ub3VuY2Vcbn07XG5kZXNjcmliZShcIkdhbWVDb250cm9sbGVyIGNsYXNzXCIsICgpID0+IHtcbiAgICBpdChcInNldHMgaHVtYW4gYW5kIGNvbXB1dGVyIHBsYXllciBvYmplY3RzIGFzIGVuZW1pZXNcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWVDb250cm9sbGVyKGF3YWl0IGdldEluaXRpYWxQYXJhbWV0ZXJzKCkpO1xuICAgICAgICBleHBlY3QoZ2FtZS5odW1hbikudG9CZUluc3RhbmNlT2YoUGxheWVyKTtcbiAgICAgICAgZXhwZWN0KGdhbWUuY29tcHV0ZXIpLnRvQmVJbnN0YW5jZU9mKENvbXB1dGVyKTtcbiAgICAgICAgZXhwZWN0KGdhbWUuaHVtYW4uZW5lbXkpLnRvQmUoZ2FtZS5jb21wdXRlcik7XG4gICAgICAgIGV4cGVjdChnYW1lLmNvbXB1dGVyLmVuZW15KS50b0JlKGdhbWUuaHVtYW4pO1xuICAgIH0pO1xuICAgIGl0KFwibWFrZXMgdGhlIGh1bWFuIGFuZCBjb21wdXRlciBwbGF5IGluIHR1cm5cIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWVDb250cm9sbGVyKGF3YWl0IGdldEluaXRpYWxQYXJhbWV0ZXJzKCkpO1xuICAgICAgICBjb25zdCBodW1hblNweSA9IGplc3Quc3B5T24oZ2FtZS5odW1hbiwgXCJtYWtlTW92ZVwiKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJTcHkgPSBqZXN0LnNweU9uKGdhbWUuY29tcHV0ZXIsIFwibWFrZU1vdmVcIik7XG4gICAgICAgIGNvbnN0IHsgcm91bmRzIH0gPSBhd2FpdCBnYW1lLm1haW5Mb29wKG1vY2tlZEZ1bmN0aW9uUGFyYW1ldGVycyk7XG4gICAgICAgIGV4cGVjdChodW1hblNweSkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKHJvdW5kcyk7XG4gICAgICAgIGV4cGVjdChjb21wdXRlclNweS5tb2NrLmNhbGxzLmxlbmd0aCkudG9CZUNsb3NlVG8ocm91bmRzLCAtMSk7XG4gICAgfSk7XG4gICAgaXQoXCJ1cGRhdGVzIHRoZSB1c2VyIGludGVyZmFjZSB3aXRoIGVhY2ggcGxheVwiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZUNvbnRyb2xsZXIoYXdhaXQgZ2V0SW5pdGlhbFBhcmFtZXRlcnMoKSk7XG4gICAgICAgIGNvbnN0IHsgcm91bmRzIH0gPSBhd2FpdCBnYW1lLm1haW5Mb29wKG1vY2tlZEZ1bmN0aW9uUGFyYW1ldGVycyk7XG4gICAgICAgIGV4cGVjdCh1cGRhdGVCb2FyZHMubW9jay5jYWxscy5sZW5ndGgpLnRvQmVHcmVhdGVyVGhhbk9yRXF1YWwocm91bmRzKTtcbiAgICB9KTtcbiAgICBpdChcImFubm91bmNlcyB0aGUgd2lubmVyIGF0IHRoZSBlbmQgb2YgdGhlIGdhbWVcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWVDb250cm9sbGVyKGF3YWl0IGdldEluaXRpYWxQYXJhbWV0ZXJzKCkpO1xuICAgICAgICBhd2FpdCBnYW1lLm1haW5Mb29wKG1vY2tlZEZ1bmN0aW9uUGFyYW1ldGVycyk7XG4gICAgICAgIGV4cGVjdChnYW1lLmh1bWFuLmJvYXJkLmFsbFN1bmsoKSB8fCBnYW1lLmNvbXB1dGVyLmJvYXJkLmFsbFN1bmsoKSkudG9CZSh0cnVlKTtcbiAgICAgICAgZXhwZWN0KGFubm91bmNlKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==