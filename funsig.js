var runner = function (miles) {
    if (miles > 10) {
        return true;
    }
    return false;
};
function oldEnough(age) {
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
