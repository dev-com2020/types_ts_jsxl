function runMore(distance) {
    return distance + 10;
}
function eat2(calories) {
    console.log("I ate ".concat(calories, " calories"));
}
function eat(calories) {
    console.log("I ate ".concat(calories, " calories"));
}
var ate = eat(100);
var ate2 = eat2(100);
var ran = runMore(10);
console.log(ate);
console.log(ate2);
console.log(ran);
