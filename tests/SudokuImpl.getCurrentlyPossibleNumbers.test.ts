import { expect } from "chai";
import { SudokuImpl } from "../src/SudokuImpl";

describe("SudokuImpl getCurrentlyPossibleNumbers", function() {
    let sudokuImpl: SudokuImpl;

    beforeEach(function () {
        let testField = [
            0,7,0, 9,0,4, 3,0,1, 
            0,3,0, 0,5,7, 0,0,0,
            0,0,9, 6,1,0, 0,8,0,

            1,0,0, 0,3,2, 9,0,6,
            0,0,6, 0,4,5, 1,0,8,
            2,8,4, 0,0,0, 0,7,0,
            
            4,0,5, 0,7,8, 0,0,2,
            0,0,3, 0,0,0, 0,0,0,
            9,0,0, 5,6,1, 7,0,4
        ]

        sudokuImpl = new SudokuImpl(testField);
    });

    it("should throw errror because index is too big", function () {
        expect(() => sudokuImpl.getCurrentlyPossibleNumbers(81)).to.throw(Error, "index is out of bounce");
    });

    it("should throw errror because index is too small", function () {
        expect(() => sudokuImpl.getCurrentlyPossibleNumbers(-1)).to.throw(Error, "index is out of bounce");
    });

    it("should throw error because index is not an integer", function () {
        expect(() => sudokuImpl.getCurrentlyPossibleNumbers(1.5)).to.throw(Error, "index is not an integer");
    });

    it("should return the numbers 5, 6, 8 for index 0", function () {
        let result = sudokuImpl.getCurrentlyPossibleNumbers(0);
        let expectedResult = [5, 6, 8];
        expect(result.length).to.be.equal(expectedResult.length);
        expect(result).to.have.members(expectedResult);
    });

    it("should return the numbers 7, 8, for index 30", function () {
        let result = sudokuImpl.getCurrentlyPossibleNumbers(30);
        let expectedResult = [7, 8];
        expect(result.length).to.be.equal(expectedResult.length);
        expect(result).to.have.members(expectedResult);
    });

    it("should return the numbers 2, 3 for index 43", function () {
        let result = sudokuImpl.getCurrentlyPossibleNumbers(43);
        let expectedResult = [2, 3];
        expect(result.length).to.be.equal(expectedResult.length);
        expect(result).to.have.members(expectedResult);
    });

});