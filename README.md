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

## Functions used are 

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
    - [average](#avarage)
    - [precise](#precise)
    - [percentage](#percentage)
    - [arraySort](#arraysort)
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

### ObjectsFunction
These functions are used for objects 

#### cloneObject 

result = cloneObject(src)
```
  @param {src} object to be copied
```

Makes a recursive copy of primitives and objects of type Array and Object, all other objects are copied via reference.

#### mergeObjects

result=mergeObjects(srcObj,dstobj)

```
 @param {any} srcObj
 @param {any} dstObj
```

Returns a recursive merge, which favors the structure of ```srcObject``` and the contents of ```dstObj```.

#### objectsDiffer

result = objectsDiffer(src,dst)
```
  @param {any} src
  @param {any} dst
```

Returns true when 2 objects differ.

#### cloneProps 

 result=cloneProps(props,exclude);

```
  @param {react props object} props
  @param {Array} exclude 
```

Makes a recursive copy of primitives and objects of type Array and Object, all other objects are copied via reference.  The ```exclude``` array is optional, it is used to define properties of props that are to be excluded, by default 'root' is excluded.

#### excludeList 

list=excludeList(a,b)

```
  @param {Array} a
  @param {Array} b
```

Returns a new copy of list a, devoid of elements from list b

#### isObjectsEqual 

result =isObjectsEqual(obj1,obj2)

```
  @param {any} obj1
  @param {any} obj2
```

Returns true when 2 objects are equal.

### ArraysFunction 
These functions are used for Arrays

#### minMaxValueInArr
Get the minimum/maximum value in array of strings or objects or numbers
result = minMaxValInArr(arr = [], key = "", getmin = true)

```
 @param {*} arr array of objects or strings or numbers 
 @param {*} key used when array of objects 
 ```

#### sumArray
Calculate the sum of array of objects, number or strings.
Depending upon first element in array the type is decided.

```
 * @param {*} arr array of objects, numbers or string 
 * @param {*} key key is used when array of objects are found 
 ```
result =  sumArray(arr = [], key = "")

#### average
 calculate the average of number in array of objects using key to a any precision.
```
  @param {*} arr array of objects 
  @param {*} key key in the objects for using which we have to calculate average
  @param {*} precision number, how many digits after period.
```
result= average(arr = [], key = "", precision = 2)

#### precise
calculate the precision and add those number of digits to a number. 
```
   @param {*} number number whose precision we need to calculate
   @param {*} precision how many digits after period 
```
 result = precise(number, precision = 2)

#### percentage
calculate percentage of number to its base value with precision 
``` 
  @param {*} base base value to calulcate the percentage 
  @param {*} newValue percentage of this value is to be calculate to a base value
  @param {*} precision number of digits after period.
```
result= precentage(base, newValue, precision = 2)

#### arraySort
  Sorting Array of object using params
  ```
    @param {*} key  key in an object to be sorted
    @param {*} order default: "asc" for ascending and "dsc" for decending order
 ```
 Data is array of objects
result =  Data.sort(arraySort(key,order="asc"))

#### sortArrOfObj
  Sorting of array of objects
```
  @param {*} arr Arary to be sorted
  @param {*} key key to be sorted from an obj
  @param {*} order default: "asc" for ascending order && "dsc" for decending order;
```
result =  sortArrOfObj(arr = [], key = "", order = "asc")

#### isArraysEqual
  Can check array of strings/numbers/objects are equal but not if they are nested in it.
 ``` 
  @param {*} arr1 Array 
  @param {*} arr2 Array
 ```
result =  isArraysEqual(arr1, arr2)

### StringFunctions
These functions are used for Strings

#### stringWHSize
  Returns object with width and height of the string inrespect to below params
```  
  @param {*} str string whose width and height is to be calculated 
  @param {*} fontSize default: 12px, units of fontsize is to be specified like px
  @param {*} fontFamily default: "open-sansreglar" , fontFamily of the string whose dimensions are to be calculated
```
result =  stringWHSize(str = "", fontSize = "12px", fontFamily = "open_sansregular")

#### strReplaceParams
``` 
  @param {*} regex Regular expression defafult is for finding params in string inbetween ${param*}
  @param {*} strToMatch String to replace to match and replace params in it
  @param {*} dataObj Object of data to replace the params 
 ```
result =  strReplaceParams(regex = /\${(.*?)\}/g, strToMatch = "", dataObj = {})

### CssFunctions
These functions are used for CSS
#### lightenDarkenColor
``` 
  @param {*} col # value of color , can pass with or without #
  @param {*} amt positive/negative values to get brighter or darker color
```
result = lightenDarkenColor(col, amt)
### TimeFunctions
These functions are used for time manipulation 

#### dateFormat
 Convert the date into another format
 ``` 
  @param {*} inputDate date to be converted  
  @param {*} format default : 'YYYY.MM.DD HH:mm:ss TZ' 
 ```
result= dateFormat(inputDate, format = 'YYYY.MM.DD HH:mm:ss TZ')

#### minutesConvertToDayHrMin
```
 @param {*} minutes number, minutes converted into day hours and min and add into string and returned 
```
result= minutesConvertToDayHrMin(minutes)
