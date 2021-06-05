export interface Sudoku {
    toString(): string;
    getNumber(index: number): number;
    setNumber(index: number, value: number): void;
    getCurrentlyPossibleNumbers(index: number): number[];
    solveAndGetResult(): Sudoku | null;
}