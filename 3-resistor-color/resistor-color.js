//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
    let numberCode;

    COLORS.some(cur => {
        if (cur === color) {
            numberCode = COLORS.indexOf(cur);

            return true;
        }
    });

    return numberCode;
//   throw new Error("Remove this statement and implement this function");
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
