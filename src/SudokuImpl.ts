import { Sudoku } from "./@types";
import { checkNumberPropertyIsInBounceAndInteger } from "./utilities/CheckNumberProperty";

export class SudokuImpl implements Sudoku {

    private field: number[];
    private length: number = 9;
    private width: number = 9;
    private blockWidth: number = 3;
    private blockLength: number = 3;
    private fieldLength: number;
    private minNumber: number = 0;
    private maxNumber: number = 9;

    constructor(field: number[]) {
        this.fieldLength = this.width * this.length;

        if(field.length != this.fieldLength) {
            throw new Error(`field needs length of ${this.fieldLength}`);
        }

        field.forEach((value: number) => {
            checkNumberPropertyIsInBounceAndInteger(value, this.minNumber, this.maxNumber, "fieldValue");
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
        this.checkIndex(index);
        return this.field[index];
    }

    private checkIndex(index: number): void {
        checkNumberPropertyIsInBounceAndInteger(index, 0, this.fieldLength-1, "index");
    }

    setNumber(index: number, value: number): void {
        this.checkIndex(index);
        this.checkValue(value);

        if(value != 0) {
            this.checkIsValueSettable(index, value);
        }

        this.field[index] = value;
    }

    private checkValue(value: number): void {
        checkNumberPropertyIsInBounceAndInteger(value, this.minNumber, this.maxNumber, "value");
    }

    private checkIsValueSettable(index: number, value: number) {
        if(!this.isHorizontalLineSettable(index, value)) {
            throw new Error(`${value} is already set in horizontal line`);
        }

        if(!this.isVerticalLineSettable(index, value)) {
            throw new Error(`${value} is already set in vertical line`);
        }

        if(!this.isBlockSettable(index, value)) {
            throw new Error(`${value} is already set in block`);
        }
    }

    private isHorizontalLineSettable(index: number, value: number): boolean {
        let i = this.calcLeftBound(index);
        let end = i + this.width

        while(i < end) {
            if(value === this.field[i] && i != index) {
                return false;
            }

            ++i;
        }

        return true;
    }

    private calcLeftBound(index: number): number {
        return this.calcRow(index) * this.width;
    }

    private calcRow(index: number): number {
        return Math.floor(index / this.width);
    }

    private isVerticalLineSettable(index: number, value: number): boolean {
        let i = this.calcUpperBound(index);
        let end = this.fieldLength + i;

        while(i < end) {
            if(value === this.field[i] && i != index) {
                return false;
            }

            i += this.width;
        }

        return true;
    }

    private calcUpperBound(index: number): number {
        let column = index % this.width;
        return column;
    }

    private isBlockSettable(index: number, value: number): boolean {
        let upperLeftBoundOfBlock = this.calcUpperLeftBoundOfBlock(index);
        let i = upperLeftBoundOfBlock;
        let end = i + (this.width * this.blockLength);

        while(i < end) {
            for(let j = 0; j < this.blockWidth; ++j) {
                if(value === this.field[i+j] && i+j != index) {
                    return false;
                }
            }

            i += this.width;
        }

        return true;
    }

    private calcUpperLeftBoundOfBlock(index: number): number {
        let boundOfBlockToTheLeft = index - (index % this.blockWidth);
        let row = this.calcRow(boundOfBlockToTheLeft); 
        return boundOfBlockToTheLeft - (this.width * (row % this.blockLength));
    }

    getCurrentlyPossibleNumbers(index: number): number[] {
        this.checkIndex(index);

        let result: number[] = [];

        let i = this.minNumber+1;
        while(i <= this.maxNumber) {
            if(this.isValueSettable(index, i)) {
                result.push(i);
            }
            ++i;
        }

        return result;
    }

    private isValueSettable(index: number, value: number) : boolean {
        return  this.isHorizontalLineSettable(index, value) &&
                this.isVerticalLineSettable(index, value) &&
                this.isBlockSettable(index, value);
    }

    solveAndGetResult(): Sudoku | null {
        let emptySpaceIndex = this.findEmptySpaceIndex();

        if(emptySpaceIndex == -1) {
            return this;
        }

        let possibleNumbersForEmptySpace = this.getCurrentlyPossibleNumbers(emptySpaceIndex);

        for(let possibleNumber of possibleNumbersForEmptySpace) {
            let fieldCopy = [...this.field];
            fieldCopy[emptySpaceIndex] = possibleNumber;
            let sudokoWithFilledEmptySpace = new SudokuImpl(fieldCopy);
            let result = sudokoWithFilledEmptySpace.solveAndGetResult();

            if(result != null) {
                return result;
            }
        }

        return null;
    }

    private findEmptySpaceIndex(): number {
        for(let i = 0; i < this.fieldLength; ++i) {
            if(this.field[i] == 0) {
                return i;
            }
        }

        return -1;
    }
    
}