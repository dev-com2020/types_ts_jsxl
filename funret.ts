function runMore(distance: number): number {
    return distance + 10;
}

function eat2(calories: number) {
    console.log(`I ate ${calories} calories`);
}

function eat(calories: number): void {
    console.log(`I ate ${calories} calories`);
}

let ate = eat(100);
let ate2 = eat2(100);
let ran = runMore(10);
// console.log(ate);
// console.log(ate2);
console.log(ran);