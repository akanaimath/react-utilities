'use strict';
import { isObjectsEqual } from "../build/objectsFunc.js";
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

/**
 * 
 * @param {*} arr array of objects 
 * @param {*} key key in the objects for using which we have to calculate average
 * @param {*} precision number, how many digits after period.
 * 
 * calculate the average of number in array of objects using key to a any precision.
 */
function average(arr = [], key = "", precision = 2) {
    let list = [], Sum = 0;
    if (typeof arr == "object" && Array.isArray(arr)) {
        if (arr.length == 0) {
            return 0;
        }
        if (arr[0] == "object" && arr[0].hasOwnProperty(key)) {
            Sum = sumArray(arr, key);
        }
        else {
            Sum = sumArray(arr);
        }
        return precise(Sum / arr.length, precision);
    }
    return 0;
}

/**
 * 
 * @param {*} number number whose precision we need to calculate
 * @param {*} precision how many digits after period 
 * 
 * calculate the precision and add those number of digits to a number. 
 */
function precise(number, precision = 2) {
    const factor = Math.pow(10, precision);
    return Math.round(+number * factor) / factor;
}

/**
 * 
 * @param {*} base base value to calulcate the percentage 
 * @param {*} newValue percentage of this value is to be calculate to a base value
 * @param {*} precision number of digits after period.
 * 
 * calculate percentage of number to its base value with precision 
 */
function precentage(base, newValue, precision = 2) {
    return precise((newValue / base) * 100, precision)
}
/**
 * Sorting Array of object using params
 * @param {*} key  key in an object to be sorted
 * @param {*} order default: "asc" for ascending and "dsc" for decending order
 * 
 * usage Data.sort(arraySort(key,order))
 */
function arraySort(key, order = "asc") {
    return function (a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }
        const varA = (typeof a[key] === "string") ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === "string") ? b[key].toUpperCase() : b[key];

        let comparision = 0;
        if (varA > varB) {
            comparision = 1;
        } else if (varA < varB) {
            comparision = -1;
        }
        return (
            (order == "desc") ? (comparision * -1) : comparision
        );
    };
}
/**
 * Sorting of array of objects
 * 
 * @param {*} arr Arary to be sorted
 * @param {*} key key to be sorted from an obj
 * @param {*} order default: "asc" for ascending order && "dsc" for decending order;
 * 
 */
function sortArrOfObj(arr = [], key = "", order = "asc") {
    // making a copy of array without reference to original array
    let sortedArr = [...arr];
    if (!Array.isArray(arr)) {
        return "Not an array";
    }
    else if (!arr.length) {
        return sortedArr;
    }
    else {
        sortedArr.sort(arraySort(order, key));
        return sortedArr;
    }
}

/**
 * Can check array of strings/numbers/objects are equal but not if they are nested in it.
 * 
 * @param {*} arr1  
 * @param {*} arr2 
 */
const isArraysEqual = (arr1, arr2) => {
    let flag = false;
    if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
        arr1 = arr1.slice();
        arr1.sort();
        arr2 = arr2.slice();
        arr2.sort();
        if (arr1.length == 0) {
            flag = true;
        }
        else {
            for (let i = 0; i < arr2.length; i++) {
                let type1 = typeof arr1[i];
                let type2 = typeof arr2[i];
                if (type1 != type2) {
                    flag = false;
                    return flag;
                }
                if (type1 == type2 && type1 == ("string" || "number") && (arr1[i] === arr2[i])) {
                    flag = true;
                }
                else if (type1 = type2 && type1 == "object" && (isObjectsEqual(arr1[i], arr2[i]))) {
                    flag = true;
                }
                else {
                    flag = false;
                    return flag;
                }
            }
        }
    }
    else {
        flag = false;
    }
    return flag;
}

export default {
    minMaxValInArr,
    sumArray,
    average,
    precise,
    precentage,
    arraySort,
    sortArrOfObj,
    isArraysEqual
};