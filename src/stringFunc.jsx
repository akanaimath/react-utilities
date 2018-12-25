'use strict';
/**
 * Returns object with width and height of the string inrespect to below params
 * 
 * @param {*} str string whose width and height is to be calculated 
 * @param {*} fontSize default: 12px, units of fontsize is to be specified like px
 * @param {*} fontFamily default: "open-sansreglar" , fontFamily of the string whose dimensions are to be calculated
 */
const stringWHSize = (str = "", fontSize = "12px", fontFamily = "open_sansregular") => {
    let element = document.createElement('span');
    document.body.appendChild(element);
    element.style.display = "inline-block";
    element.style.fontSize = fontSize;
    element.style.fontFamily = fontFamily;
    element.innerText = str;
    const WidthHeight = {
        width: element.offsetWidth,
        height: element.offsetHeight
    };

    element.parentNode.removeChild(element);
    return WidthHeight;
}

/**
 * 
 * @param {*} regex Regular expression defafult is for finding params in string inbetween ${param*}
 * @param {*} strToMatch String to replace to match and replace params in it
 * @param {*} dataObj Object of data to replace the params 
 */
const strReplaceParams = (regex = /\${(.*?)\}/g, strToMatch = "", dataObj = {}) => {
    let i = 0;
    const a = [], result = [];
    let newString = strToMath;
    if (Object.keys(dataObj).length > 0) {
        while (i < 5) {
            a.push(regex.exec(strToMatch));
            i++;
        }

        a.slice(a.length = a.indexOf(null), a.length).map((arr) => {
            result.push({ str: arr[0], key: arr[1], value: "" });
        })

        if (result.length > 0) {
            result.map((Obj) => {
                Obj.value = dataObj[Obj.key];
            })
        }

        result.map((obj) => {
            newString = newString.replace(obj.str, obj.value);
        })
    }
    return newString;
}

module.export = {
    stringWHSize,
    strReplaceParams
}