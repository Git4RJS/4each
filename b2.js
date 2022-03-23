const arr = ["xanh", "do", "tim", "vang"];
Array.prototype.f4each = function (callback) {
    let i = 0;
    while (i < this.length) {
        callback(this[i], i);
        i++;
    }

}
arr.f4each(function (arr, index) {
    console.log(arr,"o vi tri thu",index);
})

