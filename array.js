Array.prototype.map = function(cb, context) {
    if(typeof cb !== "function") {
        throw Error("Arg should be function");
    }
    let inner; 
    if(context && Array.isArray(context)) {
        inner = context;
    } else {
        inner = this;
    }
    let array = new Array(inner.length);
    for(let i = 0; i < inner.length; i++) {
        array[i] = cb(inner[i], i, inner);
    }
    return array;

};
let res1 = [1,2,3,4,5].map(() => {});
let res2 = [1,2,3,4,5].map((item) => {
    return item * 2;
});
let res3 = [].map((item) => item + 5, "");

Array.prototype.filter = function(cb, context) {
    if(typeof cb !== "function") {
        throw Error("Arg should be function");
    }
    let inner; 
    if(context && Array.isArray(context)) {
        inner = context;
    } else {
        inner = this;
    }
    let array = [];
    for(let i = 0; i < inner.length; i++) {
        if(cb(inner[i], i, inner)) {
            array.push(inner[i]);
        }
    }
    return array;
}

let filter = [1,2,3,4].filter((item) => item > 2);

Array.prototype.reduce = function(cb, initialValue) {
    if(typeof cb !== "function") {
        throw Error("callback function is not initialized");
    }
    if(initialValue === undefined && this.length === 0) {
        throw new TypeError("Array is empty or initialValue is undefined");
    }
    let result = initialValue !== undefined ? initialValue : this[0];
    
    for(let i = 1; i < this.length; i++) {
        result = cb(result, this[i], i, this);
    }
    return result;
}

let reduce = [].reduce(() => {}, 1);
