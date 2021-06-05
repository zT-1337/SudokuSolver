import { SudokuImpl } from "./SudokuImpl";

const sudokuToSolve = [
    9,0,0, 0,0,0, 0,6,0,
    0,0,0, 0,8,0, 1,9,0,
    0,0,7, 0,1,0, 0,0,0,

    0,0,0, 0,0,6, 0,7,3,
    0,0,0, 3,0,9, 0,0,0,
    3,4,5, 0,0,0, 0,0,0,

    4,0,0, 0,0,2, 6,8,0,
    0,0,2, 5,0,0, 0,0,0,
    0,3,0, 7,0,0, 0,0,0
];

const sudokuField = new SudokuImpl(sudokuToSolve);

console.log(`Field to solve:\n${sudokuField.toString()}`);
console.log("------------------------------------");

console.time("Solved field in: ");
let solvedSudokuField = sudokuField.solveAndGetResult();
console.timeEnd("Solved field in: ");

if(solvedSudokuField != null) {
    console.log(`Solved field:\n${solvedSudokuField.toString()}`);
} else {
    console.error("Could not solve field");
}