import { expect } from "chai";
import { SudokuImpl } from "../src/SudokuImpl"

describe("Sudoku Impl setNumber", function () {

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
        expect(() => sudokuImpl.setNumber(81, 1)).to.throw(Error, "index is out of bounce");
    });

    it("should throw errror because index is too small", function () {
        expect(() => sudokuImpl.setNumber(-1, 1)).to.throw(Error, "index is out of bounce");
    });

    it("should throw error because index is not an integer", function () {
        expect(() => sudokuImpl.setNumber(1.5, 1)).to.throw(Error, "index is not an integer");
    });

    it("should throw error because value is too big", function() {
        expect(() => sudokuImpl.setNumber(0, 10)).to.throw(Error, "value is out of bounce");
    });

    it("should throw error because value is too small", function() {
        expect(() => sudokuImpl.setNumber(0, -1)).to.throw(Error, "value is out of bounce");
    });

    it("should throw error because value is not an integer", function() {
        expect(() => sudokuImpl.setNumber(0, 1.5)).to.throw(Error, "value is not an integer");
    });

    it("should throw error because 7 is inserted, but 7 is already used in the same horizontal line to the left", function () {
        expect(() => sudokuImpl.setNumber(2, 7)).to.throw(Error, "7 is already set in horizontal line");
    });

    it("should throw error because 5 is inserted, but 5 is already used in the same horizontal line to the right", function () {
        expect(() => sudokuImpl.setNumber(9, 5)).to.throw(Error, "5 is already set in horizontal line");
    });

    it("should throw error because 8 is inserted, but 8 is already used in the same horizontal line to the left", function () {
        expect(() => sudokuImpl.setNumber(58, 8)).to.throw(Error, "8 is already set in horizontal line");
    });

    it("should throw error because 2 is inserted, but 2 is already used in the same vertical line to the bottom", function () {
        expect(() => sudokuImpl.setNumber(0, 2)).to.throw(Error, "2 is already set in vertical line");
    });

    it("should throw error because 9 is inserted, but 9 is already used in the same vertical line to the top", function () {
        expect(() => sudokuImpl.setNumber(60, 9)).to.throw(Error, "9 is already set in vertical line");
    });

    it("should throw error because 7 is inserted, but 7 is already used in the same block", function () {
        expect(() => sudokuImpl.setNumber(18, 7)).to.throw(Error, "7 is already set in block");
    });

    it("should throw error because 9 is inserted, but 9 is already used in the same block", function () {
        expect(() => sudokuImpl.setNumber(43, 9)).to.throw(Error, "9 is already set in block");
    });

    it("should successfully set 0 everywhere", function() {

        for(let i = 0; i < 81; ++i) {
            sudokuImpl.setNumber(i, 0);
            expect(sudokuImpl.getNumber(i)).to.be.equal(0);
        }
    });

    it("should successfully set 5 at 0", function () {
        sudokuImpl.setNumber(0, 5);
        expect(sudokuImpl.getNumber(0)).to.be.equal(5);
    });

    it("should successfully set 2 at 12", function () {
        sudokuImpl.setNumber(12, 2);
        expect(sudokuImpl.getNumber(12)).to.be.equal(2);
    });

    it("should successfully set 3 at 23", function () {
        sudokuImpl.setNumber(23, 3);
        expect(sudokuImpl.getNumber(23)).to.be.equal(3);
    });
})