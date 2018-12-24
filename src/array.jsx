'use strict';

/**
 * Get the minimum/maximum value in array of strings or objects or numbers
 * @param {*} arr array of objects or strings or numbers 
 * @param {*} key used when array of objects 
 */
function minMaxValInArr(arr = [], key = "", getmin = true) {
    let list = [];
    if (typeof arr == "object" && Array.isArray(arr)) {
        if (arr.length == 0) {
            return 0;
        }

        if (typeof arr[0] == "string" || typeof arr[0] == "number") {
            arr.map((ele) => {
                if (typeof ele == "string") {
                    list.push(+ele);
                }
                else if (typeof ele == "number") {
                    list.push(ele);
                }
            })
            return getmin ? Math.min(...list) : Math.max(...list);
        }
        else if (typeof arr[0] == "object" && !Array.isArray(arr[0]) && key) {
            list = arr.map(obj => obj[key]);
            return getmin ? Math.min(...list) : Math.max(...list);
        }
        return 0;
    }
    return 0;
}

/**
 * Calculate the sum of array of objects, number or strings.
 * 
 * Depending upon first element in array the type is decided
 * 
 * @param {*} arr array of objects, numbers or string 
 * @param {*} key key is used when array of objects are found 
 */
function sumArray(arr = [], key = "") {
    let list = [];
    if (typeof arr == "object" && Array.isArray(arr)) {
        if (arr.length == 0) {
            return 0;
        }
        else if (typeof arr[0] == "string" || typeof arr[0] == "number") {
            arr.push((ele) => {
                if (typeof ele == "string") {
                    list.push(+ele);
                } else if (typeof ele == "number") {
                    list.push(ele);
                }
            })

            return list.reduce((a, b) => a + b, 0);
        }
        else if (typeof arr[0] == "object" && !Array.isArray(arr[0]) && key) {
            arr.map((obj) => {
                if (obj.hasOwnProperty(key)) {
                    list.push(+obj[key]);
                }
            })
            return list.reduce((a, b) => a + b, 0);
        }
        return 0;
    }
    return 0;
}

export default {
    minMaxValInArr,
    sumArray
};