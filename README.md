# react-utility

These npm package contains the utilities used in our daily programming for string, arrays, objects, times, css 

### Installation 
using npm 
```
npm i react-utility;
```

using Yarn 
```
yarn add react-utility;
```

Usage
```
import { cloneObject, cloneProps, mergeObjects, objectsDiffer, isObjectsEqual, minMaxValueInArr, sumArray, averageArray, 
sortArrOfObj, isArraysEqual, stringWHSize, strReplaceParams, lightenDarkenColor, dateFormat, minutesConvertToDayHrMin,
precise, percentage  } from 'react-utility';
```

## Functions exported are 

- [ObjectsFunction](#objectsfunction)
    - [cloneObject](#cloneObject)
    - [mergeObjects](#mergeobjects)
    - [objectsDiffer](#objectsdiffer)
    - [cloneProps](#cloneprops)
    - [excludeList](#excludeList)
    - [isObjectsEqual](#isobjectsequal)
- [ArraysFunction](#arraysfunction)
    - [minMaxValueInArr](#minmaxvalueinarr)
    - [sumArray](#sumarray)
    - [averageArray](#averagearray)
    - [sortArrOfObj](#sortarrofobj)
    - [isArraysEqual](#isarraysequal)
- [StringFunctions](#stringfunctions)
    - [stringWHSize](#stringwhsize)
    - [strReplaceParams](#strreplaceparams)
- [CssFunctions](#cssfunctions)
    - [lightenDarkenColor](#lightendarkencolor)
- [TimeFunctions](#timefunctions)
    - [dateFormat](#dateformat)
    - [minutesConvertToDayHrMin](#minutesconverttodayhrmin)
- [AddonFunctions](#addonfunctions)
    - [precise](#precise)
    - [percentage](#percentage)

### ObjectsFunction
These functions are used for objects 

#### cloneObject 
Makes a recursive copy of primitives and objects of type Array and Object, all other objects are copied via reference.
```
  @param {src} object to be copied

  result = cloneObject(src);
```

#### mergeObjects
Returns a recursive merge, which favors the structure of ```srcObject``` and the contents of ```dstObj```.
```
 @param {any} srcObj
 @param {any} dstObj

 result=mergeObjects(srcObj,dstobj);
```

#### objectsDiffer
Returns true when 2 objects differ.
```
  @param {any} src
  @param {any} dst

result = objectsDiffer(src,dst);
```

#### cloneProps 
Makes a recursive copy of primitives and objects of type Array and Object, all other objects are copied via reference.  The ```exclude``` array is optional, it is used to define properties of props that are to be excluded, by default 'root' is excluded.
```
  @param {react props object} props
  @param {Array} exclude 

 result=cloneProps(props,exclude);
```

#### excludeList 
Returns a new copy of list a, devoid of elements from list b
```
  @param {Array} a
  @param {Array} b

  list=excludeList(a,b)
```

#### isObjectsEqual 
Returns true when 2 objects are equal.
```
  @param {any} obj1
  @param {any} obj2

result =isObjectsEqual(obj1,obj2)
```

### ArraysFunction 
These functions are used for Arrays

#### minMaxValueInArr
Get the minimum or maximum value in array. 
 Scenario:1  arr = [ "1", 2, 4, 5, "6" ] // function converts each element of array to number.
 Scenario:2 arr = [ { "x" : "1" }, { "x" : "2" } ]
 pass additional param key "x" , return the min/max number with all the objects containing that key. 
```
 @param {*} arr array of objects or numbers 
 @param {*} boolean value true for minimum, false for maximum
 @param {*} key used when array of objects 

result = minMaxValInArr([],true, "key")
 ```
If wrong parameter datatypes are passed 0 is returned

#### sumArray
Calculate the sum of elements in array.
Depending upon first element in array the type of element is decided.
 Scenario:1  arr = [ "1", 2, 4, 5, "6" ] // function converts each element of array to number sums and return its value.
 Scenario:2 arr = [ { "x" : "1" }, { "x" : "2" } ]
 pass additional param key "x" , return the sum of all the objects containing that key. 
```
 * @param {*} arr array of objects, numbers or string 
 * @param {*} key key is used when array of objects are found 

result =  sumArray(arr, key)
 ```

#### averageArray
 calculate the average of elements in array.
 Depending upon first element in array the type of element is decided.
 Scenario:1  arr = [ "1", 2, 4, 5, "6" ] // function converts each element of array to number and calculate its average.
 Scenario:2 arr = [ { "x" : "1" }, { "x" : "2" } ]
 Additional param key "x" , return the average of all the objects containing that key.
 You can add precision to the average number by passing the third params as number, default: 2.
```
  @param {*} arr array of objects 
  @param {*} key in the objects
  @param {*} precision number, how many digits after period.
   
 result= averageArray([], "key", 2)
```

#### sortArrOfObj
  Sorting array of objects
```
  @param {*} arr Arary to be sorted
  @param {*} key key to be sorted from an obj
  @param {*} order default: "asc" for ascending order && "dsc" for decending order;

  result =  sortArrOfObj([], "key", "asc");
```


#### isArraysEqual
 Returns boolean value if array of strings/numbers/objects are equal.
  Note: type is decided from first element of array.
 ``` 
  @param {*} arr1 Array 
  @param {*} arr2 Array

  result =  isArraysEqual(arr1, arr2)
 ```
### StringFunctions
These functions are used for Strings

#### stringWHSize
  Returns object with param width and height of the string inrespect to below params
```  
  @param {*} str string whose width and height is to be calculated 
  @param {*} fontSize default: 12px, units of fontsize is to be specified like px
  @param {*} fontFamily default: "open-sansreglar" , fontFamily of the string whose dimensions are to be calculated

  result =  stringWHSize("welcome", "12px", "open_sansregular");
```

#### strReplaceParams
Replace parameters in the string with its value in object passed. 
``` 
  @param {*} regex Regular expression defafult is for finding params in string inbetween ${param*}
  @param {*} strToMatch String to replace to match and replace params in it
  @param {*} dataObj Object of data to replace the params 

  result =  strReplaceParams(/\${(.*?)\}/g,"",{});
 ```
Example : 
const stringParam = "This is example for ${x}"
const newString = strReplaceParams(/\${(.*?)\}/g, stringParam, {x:"strReplaceParams"});
now newString is "This is example for strReplaceParams"

### CssFunctions
These functions are used for CSS
#### lightenDarkenColor
``` 
  @param {*} col # value of color , can pass with or without #
  @param {*} amt positive/negative values to get brighter or darker color

  result = lightenDarkenColor(col, amt)
```
### TimeFunctions
These functions are used for time format manipulation.

#### dateFormat
 Convert the date into another format
 ``` 
  @param {*} inputDate date to be converted  
  @param {*} format default : 'YYYY.MM.DD HH:mm:ss TZ' 

  result= dateFormat(inputDate, 'YYYY.MM.DD HH:mm:ss TZ');
 ```
#### minutesConvertToDayHrMin
Convert minutes passed to days, hours and minutes.
Return object containing days, hours, minutes and a string.
```
 @param {*} minutes number, minutes converted into day hours and min and add into string and returned 

 result= minutesConvertToDayHrMin(minutes)
```
### AddonFunctions

#### precise
Add precioions to number. 
```
   @param {*} number number whose precision we need to calculate
   @param {*} precision how many digits after period 

    result = precise(number, precision = 2)
```

#### percentage
calculate percentage of number to its base value.
Can pass precision as third params
``` 
  @param {*} base base value to calulcate the percentage 
  @param {*} newValue percentage of this value is to be calculate to a base value
  @param {*} precision number of digits after period.

  result= precentage(base, newValue, 2)
```