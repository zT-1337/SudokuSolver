import { expect } from "chai";
import { SudokuImpl } from "../src/SudokuImpl";

describe("SudokuImpl solveAndGetResult", function () {

    const firstEasySudoku = [
        9,2,6, 3,4,0, 7,0,1,
        0,5,0, 0,2,6, 4,0,9,
        0,7,0, 8,0,1, 0,0,0,

        0,0,0, 9,0,0, 2,0,7,
        3,4,2, 0,0,0, 0,0,5,
        1,0,0, 0,0,0, 8,0,0,

        6,8,5, 4,0,0, 0,1,2,
        0,0,4, 0,0,2, 9,0,0,
        0,1,0, 5,3,8, 0,7,0
    ];

    const firstMediumSudoku = [
        0,0,0, 6,7,0, 9,0,8,
        0,7,0, 0,3,9, 0,0,0,
        0,9,2, 0,0,0, 6,7,0,

        4,0,5, 3,0,0, 0,0,0,
        0,0,0, 5,0,0, 0,0,0,
        0,0,0, 7,2,6, 5,3,4,

        0,5,0, 0,0,0, 8,0,0,
        0,4,0, 9,0,7, 0,1,5,
        0,0,3, 0,5,0, 7,0,2
    ];

    const firstHardSudoku = [
        3,0,0, 0,2,8, 0,6,0,
        0,8,5, 0,6,0, 4,0,0,
        0,6,0, 0,0,0, 0,7,0,

        0,0,7, 0,0,0, 6,0,0,
        6,4,0, 8,0,1, 0,0,0,
        5,3,0, 0,7,2, 0,8,0,

        0,0,0, 1,5,7, 0,0,0,
        0,0,0, 0,0,0, 1,9,0,
        0,0,0, 3,0,0, 0,4,0
    ];

    const firstInvalidSudoku = [
        3,0,0, 0,2,8, 0,6,0,
        9,8,5, 0,6,0, 4,0,0,
        0,6,0, 0,0,0, 0,7,0,

        0,0,7, 0,0,0, 6,0,0,
        6,4,0, 8,0,1, 0,0,0,
        5,3,0, 0,7,2, 0,8,0,

        0,0,0, 1,5,7, 0,0,0,
        0,0,0, 0,0,0, 1,9,0,
        0,0,0, 3,0,0, 0,4,0
    ]

    it("should successfully solve firstEasySudoku", function () {
        let sudokuImpl = new SudokuImpl(firstEasySudoku);
        let result = sudokuImpl.solveAndGetResult();
        let expectedResult = 
        "9,2,6,3,4,5,7,8,1\n" +
        "8,5,1,7,2,6,4,3,9\n" +
        "4,7,3,8,9,1,5,2,6\n" +
        "5,6,8,9,1,3,2,4,7\n" +
        "3,4,2,6,8,7,1,9,5\n" +
        "1,9,7,2,5,4,8,6,3\n" +
        "6,8,5,4,7,9,3,1,2\n" +
        "7,3,4,1,6,2,9,5,8\n" +
        "2,1,9,5,3,8,6,7,4\n";

        expect(result?.toString()).to.be.equal(expectedResult);
    });

    it("should successfully solve firstMediumSudoku", function () {
        let sudokuImpl = new SudokuImpl(firstMediumSudoku);
        let result = sudokuImpl.solveAndGetResult();
        let expectedResult = 
        "1,3,4,6,7,2,9,5,8\n" +
        "5,7,6,8,3,9,4,2,1\n" +
        "8,9,2,1,4,5,6,7,3\n" +
        "4,6,5,3,9,1,2,8,7\n" +
        "3,2,7,5,8,4,1,6,9\n" +
        "9,8,1,7,2,6,5,3,4\n" +
        "7,5,9,2,1,3,8,4,6\n" +
        "2,4,8,9,6,7,3,1,5\n" +
        "6,1,3,4,5,8,7,9,2\n";

        expect(result?.toString()).to.be.equal(expectedResult);
    });

    it("should successfully solve firstHardSudoku", function () {
        let sudokuImpl = new SudokuImpl(firstHardSudoku);
        let result = sudokuImpl.solveAndGetResult();
        let expectedResult = 
        "3,7,4,9,2,8,5,6,1\n" +
        "1,8,5,7,6,3,4,2,9\n" +
        "9,6,2,4,1,5,3,7,8\n" +
        "8,2,7,5,4,9,6,1,3\n" +
        "6,4,9,8,3,1,2,5,7\n" +
        "5,3,1,6,7,2,9,8,4\n" +
        "4,9,6,1,5,7,8,3,2\n" +
        "7,5,3,2,8,4,1,9,6\n" +
        "2,1,8,3,9,6,7,4,5\n";

        expect(result?.toString()).to.be.equal(expectedResult);
    });

    it("should return null, because the sudoku is invalid", function () {
        let sudokuImpl = new SudokuImpl(firstInvalidSudoku);
        let result = sudokuImpl.solveAndGetResult();
        expect(result).to.be.null;
    });
});