//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna = []) => {
    let rnaArr = [...rna];
    let codonsArr = [];
    let proteinsArr = [];

    function codons(arr) {
        let codon;
        for (let i = 0; i < arr.length; i += 3) {
            codon = arr.slice(i, i + 3).join('');

            codonsArr.push(codon);
        }
    }

    codons(rnaArr);

    function checkProteins(arr) {
        const proteinTypes = [
            { value: 'Methionine', key: ['AUG'] },
            { value: 'Phenylalanine', key: ['UUU', 'UUC'] },
            { value: 'Leucine', key: ['UUA', 'UUG'] },
            { value: 'Serine', key: ['UCU', 'UCC', 'UCA', 'UCG'] },
            { value: 'Tyrosine', key: ['UAU', 'UAC'] },
            { value: 'Cysteine', key: ['UGU', 'UGC'] },
            { value: 'Tryptophan', key: ['UGG'] },
            { value: 'Stop', key: ['UAA', 'UAG', 'UGA'] }
        ]

        let currentValue;

        for (let i = 0; i < arr.length; i++) {
            proteinTypes.some(cur => {
                if (cur.key.includes(arr[i])) {
                    if (cur.value !== 'Stop') {
                        proteinsArr.push(cur.value);
                    }

                    currentValue = cur.value;

                    return true;
                }
            });

            if (currentValue === 'Stop') {
                break;
            }
        }
    }

    checkProteins(codonsArr);

    function Error(message) {
        this.message = message;
        this.name = 'Error';
    }

    return proteinsArr;
};
