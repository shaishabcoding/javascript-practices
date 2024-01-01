/**Time: 6:30pm; Date: 29/12/2023 */
Array.prototype.suffle = function () {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.suffle());