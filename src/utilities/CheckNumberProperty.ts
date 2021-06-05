export function checkNumberPropertyIsInBounceAndInteger(property: number, lowerBound: number, upperBound: number, propertyName: string) {
    if(property < lowerBound || property > upperBound) {
        throw new Error(`${propertyName} is out of bounce`);
    }

    if(!Number.isInteger(property)) {
        throw new Error(`${propertyName} is not an integer`);
    }
}