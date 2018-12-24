'use strict';

/**
 * Similar to Object.assign, but works with arrays too
 * @param {any} data
 * @param {any} target
 */
function copyTo(data, target) {
    for (let key in data) {
        const type = typeof (data[key]);
        if (type == 'object') {
            target[key] = cloneObject(data[key]);
        } else {
            target[key] = data[key];
        }
    }
    return target;
}
/**
 * Creates a full recursive copy of an object.
 * @param {any} data
 * Note, only the following types are copied: primitives, Object and Array
 */
function cloneObject(data) {
    if (typeof (data) == 'undefined' || data == null) {
        return null;
    } else if (typeof data != 'object') {
        return data;
    }
    if (data.constructor == Array) {
        const target = [];
        return copyTo(data, target);
    } else if (data.constructor == Object) {
        const target = {};
        return copyTo(data, target);
    } else {
        return data;
    }
}

/**
 * @param {any} srcObj
 * @param {any} dstObj
 * 
 * Only merges elements that exist in target and data if they are of the same object type.
 * 
 * Example:
 * 
 * Given:
 *   srcObj={
 *     a: 1,
 *     b: 2,
 *     c: [0, 1, 3,{d: 0,f: [0,1],g: {x: 11} }]
 *   };
 *   dstObj={
 *        e: [0,0,0],
 *        c: [1,0,2,{f: [1],g: {x: 12,y: 13}}]
 *    };
 * 
 * The resulting object would be:
 * 
 *   target={
 *      a: 1,
 *      b: 2,
 *      c: [1, 0, 2,{d: 0,f: [1,1],g: {x: 12, y: 13}}],
 *      e: [0,0,0]
 *    };
 */
function mergeObjects(srcObj, dstObj) {

    let src = srcObj;
    let dst = dstObj;
    let srcType = typeof src;
    let dstType = typeof dst;

    if (src == null) {
        return dst == null ? null : cloneObject(dst);
    } else if (dst == null) {
        return cloneObject(src);
    } else if (srcType == dstType && srcType == 'object') {
        if (src.constructor != dst.constructor) {
            return cloneObject(src);
        } else {
            let keys;
            const result = cloneObject(src);
            if (src.constructor == Array) {
                keys = src.length > dst.length ? src : dst;
            } else {
                keys = {};
                Object.assign(keys, src, dst);
            }
            for (let key in keys) {
                const srcType = typeof (src[key]);
                const dstType = typeof (dst[key]);
                if (src.hasOwnProperty(key) && dst.hasOwnProperty(key)) {
                    if (srcType == dstType && srcType == 'object') {
                        if (src[key] == null) {
                            result[key] = cloneObject(dst[key]);
                        } else if (dst[key] == null) {
                            result[key] = cloneObject(src[key]);
                        } else {
                            result[key] = mergeObjects(src[key], dst[key]);
                        }
                    } else if (srcType == 'object' && src[key] != null) {
                        result[key] = cloneObject(src[key]);
                    } else if (dst[key] != null) {
                        result[key] = cloneObject(dst[key]);
                    } else {
                        result[key] = cloneObject(src[key]);
                    }

                } else if (!src.hasOwnProperty(key)) {
                    result[key] = cloneObject(dst[key]);
                } else {
                    result[key] = cloneObject(src[key]);
                }
            }
            return result;
        }
    } else if (srcType == 'object') {
        return cloneObject(src);
    } else {
        return cloneObject(dst);
    }
}

/**
 * Clones a react props object.  All fields in the ignore list are ignored
 * @param {Object} props
 * @param {Array} ignore
 */
function cloneProps(props, ignore = ['root']) {
    const target = {};

    const ign = {};
    for (let id in ignore) {
        ign[ignore[id]] = null
    }
    for (let key in props) {
        if (ign.hasOwnProperty(key)) {
            continue;
        }

        target[key] = props[key];
    }
    const result = cloneObject(target);

    return result;
}


/**
 * 
 * @param {any} src
 * @param {any} dst
 * 
 * Returns true if the 2 objects differ
 */
function objectsDiffer(srcObj, dstObj) {

    const que = [[srcObj, dstObj]];
    let src, dst;
    while (que.length > 0) {
        [src, dst] = que.pop();
        let srcType = typeof (src);
        let dstType = typeof (dst);

        if (srcType != dstType) {
            return true;
        } else if (srcType != 'object') {
            if (src != dst) {
                return true;
            }
        } else if (src == null && dst == null) {
            if (que.length < 1) {
                return false;
            }
        } else if (src == null && dst != null) {
            return true;
        } else if (src != null && dst == null) {
            return true;
        } else if (src.constructor != dst.constructor) {
            return true;
        }

        let keys;
        let count = 0;
        if (src.constructor == Array) {
            if (src.length != dst.length) {
                return true;
            } else {
                keys = src.length;
            }
        } else {
            keys = {};
            Object.keys(src).map(function (key) { keys[key] = null });
            Object.keys(dst).map(function (key) { keys[key] = null });
        }

        for (let key in keys) {
            if (src.hasOwnProperty(key) && dst.hasOwnProperty(key)) {
                que.push([src[key], dst[key]]);
            } else if (!src.hasOwnProperty(key) && dst.hasOwnProperty(key)) {
                return true;
            } else if (src.hasOwnProperty(key) && !dst.hasOwnProperty(key)) {
                return true;
            }
        }
    }
    return false;
}

/**
 * 
 * @param {any} a
 * @param {any} b
 * 
 * returns a new list that excludes b from a
 */
function excludeList(a, b) {
    const result = [];
    for (let id in a) {
        const value = a[id];
        if (!b.includes(value)) {
            result.push(value);
        }
    }
    return result;
}
/**
* Currently can check only simple objects, not nesteded
* @param {*} obj1 
* @param {*} obj2 
*/
const isObjectsEqual = (obj1, obj2) => {
    let flag = false;
    if (typeof obj1 == typeof obj2 && typeof obj1 == "object" && !Array.isArray(obj1) && !Array.isArray(obj2)) {
        const arrayProperty1 = Object.getOwnPropertyNames(obj1);
        const arrayProperty2 = Object.getOwnPropertyNames(obj2);
        if (arrayProperty1.length == arrayProperty2.length && arrayProperty1.length == 0) {
            flag = true;
        }
        else if (arrayProperty1.length != arrayProperty2.length) {
            flag = false;
        }
        else {
            for (let i = 0; i < arrayProperty1.length; i++) {
                let propName = arrayProperty1[i];
                // let type1 = typeof obj1[propName];
                // let type2 = typeof obj2[propName];
                if (obj1[propName] !== obj2[propName]) {
                    flag = false;
                }
                else {
                    flag = true;
                }
            }
        }
    }
    else {
        flag = false
    }
    return flag;
}

module.exports = {
    cloneObject,
    mergeObjects,
    objectsDiffer,
    cloneProps,
    excludeList,
    isObjectsEqual,
};