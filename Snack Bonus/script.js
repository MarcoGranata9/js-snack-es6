const numbersArray = [23, 14, 6, 8, 10];

function createArrayBetween(array, a, b) {
    const newArray = []
        array.forEach((number, index) => {
            if (index >= a && index <= b) {
            newArray.push(number)
            }
        // const newArray1 = array.filter((number, index) => index >= a && index <= b)
        // console.log(newArray1);
        });
    return newArray      
}
console.log(createArrayBetween(numbersArray, 1, 3));