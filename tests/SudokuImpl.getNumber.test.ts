import { expect } from "chai";
import { SudokuImpl } from "../src/SudokuImpl";
import { createNumberArrayWithCertainNumber } from "./utilities/CreateArrays";

describe("SudokoImpl getNumber", function () {

    let sudokoImpl: SudokuImpl;

    beforeEach(function () {
        sudokoImpl = new SudokuImpl(createNumberArrayWithCertainNumber(81, 0));
    });

    it("should throw error because index is too big", function () {
        expect(() => sudokoImpl.getNumber(81)).to.throw(Error, "index is out of bounce");
    });

    it("should throw error because index is too small", function () {
        expect(() => sudokoImpl.getNumber(-1)).to.throw(Error, "index is out of bounce");
    });

    it("should throw error because index is not an integer", function () {
        expect(() => sudokoImpl.getNumber(1.5)).to.throw(Error, "index is not an integer");
    });

    it("should return numbers successfully", function () {
        for(let i = 0; i < 10; ++i) {
            sudokoImpl = new SudokuImpl(createNumberArrayWithCertainNumber(81, i));

            for(let j = 0; j < 81; ++j) {
                expect(sudokoImpl.getNumber(j)).to.be.equal(i);
            }
        }
    });

});