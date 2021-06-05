import { Sudoku } from "./@types";

export class SudokuImpl implements Sudoku {

    private field: number[];
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

        this.field = field;
    }

    toString(): string {
        var result = "";

        this.field.forEach((value: number, index: number) => {

            if(value) {
                result += value;
            } else {
                result += " ";
            }
            
            if((index % this.width) == this.width-1) {
                result += "\n";
            } else {
                result += ",";
            }
        });

        return result;
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