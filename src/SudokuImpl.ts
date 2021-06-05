import { Sudoku } from "./@types";

export class SudokuImpl implements Sudoku {

    private field: number[];
    private length: number = 9;
    private width: number = 9;
    private fieldLength: number;
    private minNumber: number = 0;
    private maxNumber: number = 9;

    constructor(field: number[]) {
        this.fieldLength = this.width * this.length;

        if(field.length != this.fieldLength) {
            throw new Error(`field needs length of ${this.fieldLength}`);
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
        if(index >= this.fieldLength || index < 0) {
            throw new Error("index out of bounce");
        }

        if(!Number.isInteger(index)) {
            throw new Error("index not an integer");
        }

        return this.field[index];
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