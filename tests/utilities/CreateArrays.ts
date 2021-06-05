export function createNumberArrayWithCertainNumber(length: number, value: number): number[] {
    let result: number[] = [];

    for(let i = 0; i < length; ++i) {
        result.push(value);
    }

    return result;
}