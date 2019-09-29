/**
 * Java HashSet Solution from Discuss
public boolean isValidSudoku(char[][] board) {
	Set seen = new HashSet();
	for (int i=0; i<9; ++i) {
		for (int j=0; j<9; ++j) {
			if (board[i][j] != '.') {
				String b = "(" + board[i][j] + ")";
				if (!seen.add(b + i) || !seen.add(j + b) || !seen.add(i/3 + b + j/3))
					return false;
			}
		}
	}
	return true;
}
 */

/**
 * @param {character[]} character
 * @return {boolean}
 */
//var isValidSudokuCell = function(character) {
//	var map = {};
//	if (character.length !== 9) {
//		return false;
//	}
//	for (var i = 0; i < 9; i++) {
//		if (character[i] === '.') {
//			continue;
//		}
//		if (character[i] > '9' || character[i] < '1' || map[character[i]] !== undefined) {
//			return false;
//		}
//		map[character[i]] = i;
//	}
//	return true;
//}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
//var isValidSudoku = function(board) {
//	if (board.length !== 9) {
//		return false;
//	}
//	
//	var row, column, cube, rowIndex, colIndex;
//	for (var i = 0; i < 9; i++) {
//		row = column = cube = "";
//		for (var j = 0; j < 9; j++) {
//			row += board[i][j];
//			column += board[j][i];
//			rowIndex = 3*Math.floor(i/3) + Math.floor(j/3);
//			colIndex = 3*(i%3) + j%3;
//			cube += board[rowIndex][colIndex];
//		}
//		if (isValidSudokuCell(row) === false || isValidSudokuCell(column) === false || isValidSudokuCell(cube) === false) {
//			return false;
//		}
//	}
//	return true;
//};

/**
 * @param {character} character
 * @param {Object} map
 * @return {boolean}
 */
var isValidSudokuCharacter = function(character, map) {
	if (character !== '.' && (character > '9' || character < '1' || map[character] !== undefined)) {
		return false;
	}
	else {
		map[character] = 0;
		return true;
	}
}

var isValidSudoku = function(board) {
	if (board.length !== 9) {
		return false;
	}
	
	var row, column, cube, rowIndex, colIndex;
	for (var i = 0; i < 9; i++) {
		row = {};
		column= {};
		cube = {};
		for (var j = 0; j < 9; j++) {
			rowIndex = 3*Math.floor(i/3) + Math.floor(j/3);
			colIndex = 3*(i%3) + j%3;
			
			if (isValidSudokuCharacter(board[i][j], row) === false) {
				return false;
			}
			if (isValidSudokuCharacter(board[j][i], column) === false) {
				return false;
			}
			if (isValidSudokuCharacter(board[rowIndex][colIndex], cube) === false) {
				return false;
			}
		}
	}
	return true;
};

var characters = ["187654329",".........","3........","4........","5........","6........","7........","8........","9........"];
//var characters = ["123456789","abcdefghi","ABCDEFGHI","jklmnopqr","JKLMNOPQR","stuvwxyz0","STUVWXYZ+","963852741","ADGJMPSVY"];
console.log(characters);
console.log(isValidSudoku(characters));