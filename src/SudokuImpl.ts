import { Sudoku } from "./@types";

export class SudokuImpl implements Sudoku {

    private length: number = 9;
    private width: number = 9;
    private minNumber: number = 0;
    private maxNumber: number = 9;

    constructor(field: number[]) {
        if(field.length != this.length*this.width) {
            throw new Error(`field needs length of ${this.length*this.width}`);
        }

        field.forEach((value: number) => {
            if(value > this.maxNumber || value < this.minNumber || !Number.isInteger(value)) {
                throw new Error(`field can only contain integers between ${this.minNumber} and ${this.maxNumber}`);
            }
        });

    }

    toString(): string {
        throw new Error("Method not implemented.");
    }

    getNumber(index: number): number {
        throw new Error("Method not implemented.");
    }

    setNumber(index: number, value: number): void {
        throw new Error("Method not implemented.");
    }

    getCurrentlyPossibleNumbers(index: number): number[] {
        throw new Error("Method not implemented.");
    }

    solveAndGetResult(): Sudoku {
        throw new Error("Method not implemented.");
    }
    
}