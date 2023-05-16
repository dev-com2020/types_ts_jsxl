type Run = (miles: number) => boolean;
let runner: Run = function (miles: number): boolean {
    if (miles > 10) {
        return true;
    }
    return false;
}

function oldEnough(age: number): never | boolean {
    if (age > 60) {
        throw Error('Too old');
    }
    if (age <= 18) {
        return false;
    }
    return true;
}

console.log(oldEnough(61));

console.log(runner(9));