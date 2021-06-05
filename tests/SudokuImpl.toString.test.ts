import { expect } from "chai";
import { SudokuImpl } from "../src/SudokuImpl";
import { createNumberArrayWithCertainNumber } from "./utilities/CreateArrays";

describe("SudokuImpl toString", function () {
    it("should print a sudoku field filled with 0", function () {
        let sudoku = new SudokuImpl(createNumberArrayWithCertainNumber(81, 0));
        let expectedString = " , , , , , , , , \n".repeat(9);
        expect(sudoku.toString()).to.be.equal(expectedString);
    });

    it("should print an example sudoku field", function () {
        let exampleSudokuField = [
            8,0,0, 0,0,7, 6,0,3, 
            1,0,0, 3,5,0, 0,0,2,
            3,0,0, 0,0,0, 0,0,0,

            0,1,0, 0,0,5, 0,3,0,
            0,4,3, 0,0,0, 0,0,0,
            6,8,5, 0,3,9, 1,0,0,
            
            0,0,0, 0,4,0, 3,0,0,
            5,0,0, 9,8,0, 7,0,0,
            4,0,8, 0,2,0, 0,6,0
        ]
        let sudoku = new SudokuImpl(exampleSudokuField);
        let expectedString = 
        "8, , , , ,7,6, ,3\n" +
        "1, , ,3,5, , , ,2\n" + 
        "3, , , , , , , , \n" + 
        " ,1, , , ,5, ,3, \n" + 
        " ,4,3, , , , , , \n" + 
        "6,8,5, ,3,9,1, , \n" +
        " , , , ,4, ,3, , \n" +
        "5, , ,9,8, ,7, , \n" +
        "4, ,8, ,2, , ,6, \n";

        expect(sudoku.toString()).to.be.equal(expectedString);
    });
});