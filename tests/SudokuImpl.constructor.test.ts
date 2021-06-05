import { expect } from "chai";
import { SudokuImpl } from "../src/SudokuImpl";
import { createNumberArrayWithCertainNumber } from "./utilities/CreateArrays";


describe("SudokuImpl constructor", function() {

    it("should throw error, because field is empty", function() {
        expect(() => new SudokuImpl([])).to.throw(Error, "field needs length of 81");
    });

    it("should throw error, because field is too long", function() {
        expect(() => new SudokuImpl(createNumberArrayWithCertainNumber(82, 0))).to.throw(Error, "field needs length of 81");
    });

    it("should throw error, because field is too short", function() {
        expect(() => new SudokuImpl(createNumberArrayWithCertainNumber(80, 0))).to.throw(Error, "field needs length of 81");
    });

    it("should throw error, because field has numbers that are too big", function () {
        expect(() => new SudokuImpl(createNumberArrayWithCertainNumber(81, 10))).to.throw(Error, "field can only contain integers between 0 and 9");
    });

    it("should throw error, because field has numbers that are too small", function () {
        expect(() => new SudokuImpl(createNumberArrayWithCertainNumber(81, -1))).to.throw(Error, "field can only contain integers between 0 and 9");
    });

    it("should throw error, because field has numbers that not an integer", function () {
        expect(() => new SudokuImpl(createNumberArrayWithCertainNumber(81, 0.5))).to.throw(Error, "field can only contain integers between 0 and 9");
    });
});