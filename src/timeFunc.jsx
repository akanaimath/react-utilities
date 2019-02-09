`use strict`;

/**
 * Convert the date into another format
 * 
 * @param {*} inputDate date to be converted  
 * @param {*} format default : 'YYYY.MM.DD HH:mm:ss TZ' 
 */
const dateFormat = (inputDate, format = 'YYYY.MM.DD HH:mm:ss TZ') => {
    //example input date= '2018-03-09 17:55:00'
    const date = new Date(inputDate);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return format
        .replace('YYYY', date.getFullYear()) // returns 2018
        .replace('YY', date.getFullYear() % 100) // returns 18
        .replace('MM', addPreZero(date.getMonth() + 1, 2, '0')) // returns 03
        .replace('M', date.getMonth() + 1) // returns 3
        .replace('DD', addPreZero(date.getDate(), 2, '0')) // returns 09
        .replace('D', date.getDate()) // returns 9
        .replace('HH', addPreZero(date.getHours(), 2, '0')) // returns 17 in 24 hour format
        .replace('H', date.getHours()) // returns 17
        .replace('hh', addPreZero(date.getHours() % 12, 2, '0')) // returns 05 in 12 hour format
        .replace('h', date.getHours() % 12) // returns 05 in 12 hour format
        .replace('A', date.getHours() < 12 ? 'AM' : 'PM') // returns AM/PM
        .replace('a', date.getHours() < 12 ? 'am' : 'pm') // returns am/pm 
        .replace('mm', addPreZero(date.getMinutes(), 2, '0')) // returns 55
        .replace('m', date.getMinutes()) // returns 55
        .replace('ss', addPreZero(date.getSeconds(), 2, '0')) // returns 00
        .replace('s', date.getSeconds()) // returns 0
        .replace('Month', date.toLocaleString('en-us', { month: "long" })) // returns March
        .replace('month', date.toLocaleString('en-us', { month: "short" })) // returns Mar
        .replace('Day', days[date.getDay()]) // returns Friday
        .replace('day', date.toString().split(' ')[0]) // returns Fri
        .replace('TZ', abbrevationTimeZone(date.toString().match(/\(([A-Za-z\s].*)\)/)[1])) // returns CST
};
const abbrevationTimeZone = (timezone) => {
    if (timezone.length == 3) {
        return timezone;
    } else {
        return timezone.split(' ').map(w => w[0]).join('').toUpperCase()
    }
}
const addPreZero = (input, length, symbol = '') => {
    let str = input.toString()

    while (str.length < length) {
        str = symbol + str
    }
    return str;
}
const numberSuffix = (number) => {
    const suffix = ["th", "st", "nd", "rd"]; // don't change the order
    const value = number % 100;
    return number + (suffix[(value - 20) % 10] || suffix[value] || s[0]);
}

/**
 * 
 * @param {*} minutes number, minutes converted into day hours and min and add into string and returned 
 */
const minutesConvertToDayHrMin = (minutes) => {
    let msg = "ago";
    if (minutes < 0) {
        msg = "ahead";
    }
    const input = Math.abs(minutes);
    const hours = Math.floor(input / 60 % 24);
    const days = Math.floor(input / (60 * 24));
    const min = Math.floor(input % 60);
    const obj = {
        hours: hours,
        days: days,
        minutes: min,
    };
    let str = "";
    if (days > 0 && hours > 0 && min > 0) {
        str = `${days}d ${hours}hr ${min}min`;
    } else if (days > 0 && hours > 0) {
        str = `${days}d ${hours}hr`;
    } else if (days > 0) {
        str = `${days}d`;
    } else if (hours > 0 && min > 0) {
        str = `${hours}hr ${min}min`;
    } else if (hours > 0) {
        str = `${hours}hr`
    } else if (min > 0) {
        str = `${min}min`
    }

    obj.string = (str + " " + msg);

    return obj;
}

module.export = {
    dateFormat,
    minutesConvertToDayHrMin
}
