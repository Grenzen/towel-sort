
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if (matrix === undefined) {
        return [];
    }
    let newArr = [];
    let counter = 1;
    matrix.forEach((el) => {
        if (Array.isArray(el)) {
            
            if (counter % 2 === 1) {
                counter++;
                newArr.push(el);
            } else {
                counter++;
                newArr.push(el.reverse());
            }
        }
    });
    return newArr.flat();
}
