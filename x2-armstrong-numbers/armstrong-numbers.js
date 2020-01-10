//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
    const originNumer = num;
    let number = num.toString();
    let numArr = [...number];
    let powArr = [];
    let result;
    const reducer = (acc, cur) => acc + cur;

    numArr.forEach(cur => {
        parseInt(cur);
        powArr.push(Math.pow(cur, numArr.length));
    });

    result = powArr.reduce(reducer);

    if (originNumer === result) {
        return true;
    } else {
        return false;
    }
};
