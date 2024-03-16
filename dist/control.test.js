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
        while (!(this.human.board.allSunk() || this.computer.board.allSunk())) {
            viewUpdater(this.human.board, this.computer.board);
            if (this.humanTurn) {
                this.human.makeMove(await getter());
                this.rounds++;
            }
            else {
                this.computer.automaticPlay();
            }
            this.changeTurn();
        }
        return this.endGame(announcer);
    }
    endGame(announcer) {
        const winner = this.humanTurn ? this.computer : this.human;
        announcer(winner.name + "has won!");
        return this.rounds;
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
const announce = jest.fn();
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
        const rounds = await game.mainLoop(mockedFunctionParameters);
        expect(humanSpy).toHaveBeenCalledTimes(rounds);
        expect(computerSpy.mock.calls.length).toBeCloseTo(rounds, -1);
    });
    it("updates the user interface with each play", async () => {
        const game = new _src_control__WEBPACK_IMPORTED_MODULE_1__["default"](await getInitialParameters());
        const rounds = await game.mainLoop(mockedFunctionParameters);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC50ZXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUMzQztBQUNBO0FBQ0EseUJBQXlCLDBDQUFNO0FBQy9CLDRCQUE0Qiw0Q0FBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlDQUFpQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxjQUFjLHFCQUFxQixjQUFjO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsV0FBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsV0FBVztBQUMvRDtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUN3RDs7Ozs7OztVQ3hHeEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNnRDtBQUNKO0FBQzVDO0FBQ0Esb0RBQW9ELHNDQUFzQztBQUMxRiw0REFBNEQsV0FBVztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQWM7QUFDdkMsMENBQTBDLDhDQUFNO0FBQ2hELDZDQUE2QyxnREFBUTtBQUNyRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUJBQXlCLG9EQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsb0RBQWM7QUFDdkM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlCQUF5QixvREFBYztBQUN2QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250cm9sLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi90ZXN0cy9jb250cm9sLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXB1dGVyLCBQbGF5ZXIgfSBmcm9tIFwiLi9tb2RlbFwiO1xuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHApIHtcbiAgICAgICAgdGhpcy5odW1hbiA9IG5ldyBQbGF5ZXIocC51c2VyTmFtZSk7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKTtcbiAgICAgICAgdGhpcy5odW1hbi5zZXRFbmVteSh0aGlzLmNvbXB1dGVyKTtcbiAgICAgICAgdGhpcy5odW1hblR1cm4gPSBwLmh1bWFuU3RhcnRzO1xuICAgICAgICB0aGlzLnJvdW5kcyA9IDA7XG4gICAgfVxuICAgIGFzeW5jIG1haW5Mb29wKGZ1bmN0aW9ucykge1xuICAgICAgICBjb25zdCB7IHZpZXdVcGRhdGVyLCBnZXR0ZXIsIGFubm91bmNlciB9ID0gZnVuY3Rpb25zO1xuICAgICAgICB3aGlsZSAoISh0aGlzLmh1bWFuLmJvYXJkLmFsbFN1bmsoKSB8fCB0aGlzLmNvbXB1dGVyLmJvYXJkLmFsbFN1bmsoKSkpIHtcbiAgICAgICAgICAgIHZpZXdVcGRhdGVyKHRoaXMuaHVtYW4uYm9hcmQsIHRoaXMuY29tcHV0ZXIuYm9hcmQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaHVtYW5UdXJuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5odW1hbi5tYWtlTW92ZShhd2FpdCBnZXR0ZXIoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3VuZHMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXIuYXV0b21hdGljUGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUdXJuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kR2FtZShhbm5vdW5jZXIpO1xuICAgIH1cbiAgICBlbmRHYW1lKGFubm91bmNlcikge1xuICAgICAgICBjb25zdCB3aW5uZXIgPSB0aGlzLmh1bWFuVHVybiA/IHRoaXMuY29tcHV0ZXIgOiB0aGlzLmh1bWFuO1xuICAgICAgICBhbm5vdW5jZXIod2lubmVyLm5hbWUgKyBcImhhcyB3b24hXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3VuZHM7XG4gICAgfVxuICAgIGNoYW5nZVR1cm4oKSB7XG4gICAgICAgIHRoaXMuaHVtYW5UdXJuID0gIXRoaXMuaHVtYW5UdXJuO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEdhbWVDb250cm9sbGVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLnN1bmtlbiA9IGZhbHNlO1xuICAgIH1cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cysrO1xuICAgICAgICB0aGlzLmlzU3VuaygpO1xuICAgIH1cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHRoaXMuc3Vua2VuID0gdGhpcy5oaXRzID49IHRoaXMubGVuZ3RoO1xuICAgICAgICByZXR1cm4gdGhpcy5zdW5rZW47XG4gICAgfVxufVxuY2xhc3MgU2hpcERhdHVtIHtcbiAgICBjb25zdHJ1Y3RvcihzaGlwKSB7XG4gICAgICAgIHRoaXMuc2hpcCA9IHNoaXA7XG4gICAgICAgIHRoaXMud2FzSGl0ID0gZmFsc2U7XG4gICAgfVxufVxuY2xhc3MgR2FtZUJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplID0gMTApIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHNpemUgfSwgKCkgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2l6ZSB9LCAoKSA9PiBmYWxzZSkpO1xuICAgIH1cbiAgICBidWlsZE5hdnkobGVuZ3RocyA9IFsyLCAzLCAzLCA0LCA1XSkge1xuICAgICAgICBjb25zdCBwcm9kdWN0aW9uID0gW107XG4gICAgICAgIGZvciAoY29uc3QgbGVuZ3RoIG9mIGxlbmd0aHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3JvdywgY29sXSBvZiB0aGlzLmdlbmVyYXRlUG9zaXRpb25zKGxlbmd0aCwgbW9kZWwpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBuZXcgU2hpcERhdHVtKG1vZGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2R1Y3Rpb24ucHVzaChtb2RlbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYXZ5ID0gbmV3IFNldChwcm9kdWN0aW9uKTtcbiAgICB9XG4gICAgZ2VuZXJhdGVQb3NpdGlvbnMobGVuZ3RoLCBzaGlwKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAyIH0sICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICAgIGNvbnN0IGhvcml6b250YWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PSAwO1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5ib2FyZC5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChwb3NpdGlvbnMubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBvdXRPZkJvdW5kcyA9IGNvbCA+PSBzaXplIHx8IHJvdyA+PSBzaXplO1xuICAgICAgICAgICAgY29uc3QgbmVpZ2hib3JzID0gW1stMSwgMF0sIFswLCAtMV0sIFswLCAwXSwgWzAsIDFdLCBbMSwgMF1dLm1hcCgoW29mZnNldFgsIG9mZnNldFldKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3IsIGNdID0gW3JvdyArIG9mZnNldFgsIGNvbCArIG9mZnNldFldO1xuICAgICAgICAgICAgICAgIGlmIChyID49IDAgJiYgciA8IHNpemUgJiYgYyA+PSAwICYmIGMgPCBzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW3JdW2NdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2hpcE5lYXJieSA9IG5laWdoYm9ycy5zb21lKG5laWdoYm9yID0+IG5laWdoYm9yIGluc3RhbmNlb2YgU2hpcERhdHVtICYmIG5laWdoYm9yLnNoaXAgIT09IHNoaXApO1xuICAgICAgICAgICAgaWYgKHNoaXBOZWFyYnkgfHwgb3V0T2ZCb3VuZHMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVQb3NpdGlvbnMobGVuZ3RoLCBzaGlwKTtcbiAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKFtyb3csIGNvbF0pO1xuICAgICAgICAgICAgaG9yaXpvbnRhbCA/IGNvbCsrIDogcm93Kys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgICB9XG4gICAgcmVjZWl2ZUF0dGFjayhyb3csIGNvbCkge1xuICAgICAgICBpZiAocm93ID49IDAgJiYgcm93IDwgdGhpcy5ib2FyZC5sZW5ndGggJiYgY29sID49IDAgJiYgY29sIDwgdGhpcy5ib2FyZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgICAgIGlmIChjZWxsIGluc3RhbmNlb2YgU2hpcERhdHVtKSB7XG4gICAgICAgICAgICAgICAgY2VsbC53YXNIaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGwuc2hpcC5oaXQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbGxTdW5rKCkge1xuICAgICAgICBpZiAoIXRoaXMubmF2eSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGlzIG5vIG5hdnkuIENhbGwgdGhpcy5idWlsZE5hdnkoKVwiKTtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLm5hdnldLmV2ZXJ5KHNoaXAgPT4gc2hpcC5zdW5rZW4pO1xuICAgIH1cbn1cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgICAgICB0aGlzLmJvYXJkLmJ1aWxkTmF2eSgpO1xuICAgIH1cbiAgICBzZXRFbmVteShwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5lbmVteSA9IHBsYXllcjtcbiAgICAgICAgdGhpcy5lbmVteS5lbmVteSA9IHRoaXM7IC8vIHJlY2lwcm9jYWwgcmVsYXRpb25zaGlwXG4gICAgfVxuICAgIG1ha2VNb3ZlKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGNvbnN0IFtndWVzc1JvdywgZ3Vlc3NDb2xdID0gY29vcmRpbmF0ZXM7XG4gICAgICAgIGlmICghdGhpcy5lbmVteSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbm5vdCBtYWtlTW92ZSB3aXRob3V0IGVuZW15XCIpO1xuICAgICAgICByZXR1cm4gISF0aGlzLmVuZW15LmJvYXJkLnJlY2VpdmVBdHRhY2soZ3Vlc3NSb3csIGd1ZXNzQ29sKTtcbiAgICB9XG59XG5jbGFzcyBDb21wdXRlciBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFwiQ29tcHV0ZXJcIik7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xuICAgIH1cbiAgICBhdXRvbWF0aWNQbGF5KCkge1xuICAgICAgICBjb25zdCBbcmFuZG9tUm93LCByYW5kb21Db2xdID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMiB9LCAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpO1xuICAgICAgICBpZiAodGhpcy5oaXN0b3J5LmluY2x1ZGVzKFtyYW5kb21Sb3csIHJhbmRvbUNvbF0pKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGljUGxheSgpOyAvLyB0cnkgYWdhaW5cbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2goW3JhbmRvbVJvdywgcmFuZG9tQ29sXSk7XG4gICAgICAgIHRoaXMubWFrZU1vdmUoW3JhbmRvbVJvdywgcmFuZG9tQ29sXSk7XG4gICAgfVxufVxuZXhwb3J0IHsgU2hpcCwgU2hpcERhdHVtLCBHYW1lQm9hcmQsIFBsYXllciwgQ29tcHV0ZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IG1vZHVsZXMgdG8gdGVzdFxuaW1wb3J0IHsgUGxheWVyLCBDb21wdXRlciB9IGZyb20gXCIuLi9zcmMvbW9kZWxcIjtcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vc3JjL2NvbnRyb2xcIjtcbi8vIG1vY2tzIHJlZmxlY3Qgd2hhdCB2aWV3LnRzIG1vZHVsZSBmdW5jdGlvbnMgZG9cbmNvbnN0IGdldEluaXRpYWxQYXJhbWV0ZXJzID0gamVzdC5mbihhc3luYyAoKSA9PiAoeyB1c2VyTmFtZTogXCJIdW1hblwiLCBodW1hblN0YXJ0czogdHJ1ZSB9KSk7XG5jb25zdCBnZXRVc2VyQ29vcmRpbmF0ZXMgPSBqZXN0LmZuKGFzeW5jICgpID0+IEFycmF5LmZyb20oeyBsZW5ndGg6IDIgfSwgKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKSk7XG5jb25zdCB1cGRhdGVCb2FyZHMgPSBqZXN0LmZuKCk7XG5jb25zdCBhbm5vdW5jZSA9IGplc3QuZm4oKTtcbmNvbnN0IG1vY2tlZEZ1bmN0aW9uUGFyYW1ldGVycyA9IHtcbiAgICBnZXR0ZXI6IGdldFVzZXJDb29yZGluYXRlcyxcbiAgICB2aWV3VXBkYXRlcjogdXBkYXRlQm9hcmRzLFxuICAgIGFubm91bmNlcjogYW5ub3VuY2Vcbn07XG5kZXNjcmliZShcIkdhbWVDb250cm9sbGVyIGNsYXNzXCIsICgpID0+IHtcbiAgICBpdChcInNldHMgaHVtYW4gYW5kIGNvbXB1dGVyIHBsYXllciBvYmplY3RzIGFzIGVuZW1pZXNcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWVDb250cm9sbGVyKGF3YWl0IGdldEluaXRpYWxQYXJhbWV0ZXJzKCkpO1xuICAgICAgICBleHBlY3QoZ2FtZS5odW1hbikudG9CZUluc3RhbmNlT2YoUGxheWVyKTtcbiAgICAgICAgZXhwZWN0KGdhbWUuY29tcHV0ZXIpLnRvQmVJbnN0YW5jZU9mKENvbXB1dGVyKTtcbiAgICAgICAgZXhwZWN0KGdhbWUuaHVtYW4uZW5lbXkpLnRvQmUoZ2FtZS5jb21wdXRlcik7XG4gICAgICAgIGV4cGVjdChnYW1lLmNvbXB1dGVyLmVuZW15KS50b0JlKGdhbWUuaHVtYW4pO1xuICAgIH0pO1xuICAgIGl0KFwibWFrZXMgdGhlIGh1bWFuIGFuZCBjb21wdXRlciBwbGF5IGluIHR1cm5cIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWVDb250cm9sbGVyKGF3YWl0IGdldEluaXRpYWxQYXJhbWV0ZXJzKCkpO1xuICAgICAgICBjb25zdCBodW1hblNweSA9IGplc3Quc3B5T24oZ2FtZS5odW1hbiwgXCJtYWtlTW92ZVwiKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJTcHkgPSBqZXN0LnNweU9uKGdhbWUuY29tcHV0ZXIsIFwibWFrZU1vdmVcIik7XG4gICAgICAgIGNvbnN0IHJvdW5kcyA9IGF3YWl0IGdhbWUubWFpbkxvb3AobW9ja2VkRnVuY3Rpb25QYXJhbWV0ZXJzKTtcbiAgICAgICAgZXhwZWN0KGh1bWFuU3B5KS50b0hhdmVCZWVuQ2FsbGVkVGltZXMocm91bmRzKTtcbiAgICAgICAgZXhwZWN0KGNvbXB1dGVyU3B5Lm1vY2suY2FsbHMubGVuZ3RoKS50b0JlQ2xvc2VUbyhyb3VuZHMsIC0xKTtcbiAgICB9KTtcbiAgICBpdChcInVwZGF0ZXMgdGhlIHVzZXIgaW50ZXJmYWNlIHdpdGggZWFjaCBwbGF5XCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lQ29udHJvbGxlcihhd2FpdCBnZXRJbml0aWFsUGFyYW1ldGVycygpKTtcbiAgICAgICAgY29uc3Qgcm91bmRzID0gYXdhaXQgZ2FtZS5tYWluTG9vcChtb2NrZWRGdW5jdGlvblBhcmFtZXRlcnMpO1xuICAgICAgICBleHBlY3QodXBkYXRlQm9hcmRzLm1vY2suY2FsbHMubGVuZ3RoKS50b0JlR3JlYXRlclRoYW5PckVxdWFsKHJvdW5kcyk7XG4gICAgfSk7XG4gICAgaXQoXCJhbm5vdW5jZXMgdGhlIHdpbm5lciBhdCB0aGUgZW5kIG9mIHRoZSBnYW1lXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lQ29udHJvbGxlcihhd2FpdCBnZXRJbml0aWFsUGFyYW1ldGVycygpKTtcbiAgICAgICAgYXdhaXQgZ2FtZS5tYWluTG9vcChtb2NrZWRGdW5jdGlvblBhcmFtZXRlcnMpO1xuICAgICAgICBleHBlY3QoZ2FtZS5odW1hbi5ib2FyZC5hbGxTdW5rKCkgfHwgZ2FtZS5jb21wdXRlci5ib2FyZC5hbGxTdW5rKCkpLnRvQmUodHJ1ZSk7XG4gICAgICAgIGV4cGVjdChhbm5vdW5jZSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=