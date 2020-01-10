//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (arr) => {
    const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
    let values = [];
    let valuesStr = [];

    arr.forEach(cur => {
        values.push(colors.indexOf(cur));

        valuesStr.push(values[arr.indexOf(cur)].toString());
    });

    valuesStr = valuesStr.slice(0, 2);

    return Number(valuesStr.join(''));
};