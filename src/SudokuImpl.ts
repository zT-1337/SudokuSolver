import { Sudoku } from "./@types";

export class SudokuImpl implements Sudoku {


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