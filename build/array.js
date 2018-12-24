"use strict";

/**
 * Get the minimum/maximum value in array of strings or objects or numbers
 * @param {*} arr array of objects or strings or numbers 
 * @param {*} key used when array of objects 
 */Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}
function minMaxValInArr(){var arr=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var key=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var getmin=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;
var list=[];
if((typeof arr==="undefined"?"undefined":_typeof(arr))=="object"&&Array.isArray(arr)){
if(arr.length==0){
return 0;
}

if(typeof arr[0]=="string"||typeof arr[0]=="number"){
arr.map(function(ele){
if(typeof ele=="string"){
list.push(+ele);
}else
if(typeof ele=="number"){
list.push(ele);
}
});
return getmin?Math.min.apply(Math,_toConsumableArray(list)):Math.max.apply(Math,_toConsumableArray(list));
}else
if(_typeof(arr[0])=="object"&&!Array.isArray(arr[0])&&key){
list=arr.map(function(obj){return obj[key]});
return getmin?Math.min.apply(Math,_toConsumableArray(list)):Math.max.apply(Math,_toConsumableArray(list));
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
function sumArray(){var arr=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var key=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";
var list=[];
if((typeof arr==="undefined"?"undefined":_typeof(arr))=="object"&&Array.isArray(arr)){
if(arr.length==0){
return 0;
}else
if(typeof arr[0]=="string"||typeof arr[0]=="number"){
arr.push(function(ele){
if(typeof ele=="string"){
list.push(+ele);
}else if(typeof ele=="number"){
list.push(ele);
}
});

return list.reduce(function(a,b){return a+b},0);
}else
if(_typeof(arr[0])=="object"&&!Array.isArray(arr[0])&&key){
arr.map(function(obj){
if(obj.hasOwnProperty(key)){
list.push(+obj[key]);
}
});
return list.reduce(function(a,b){return a+b},0);
}
return 0;
}
return 0;
}exports.default=

{
minMaxValInArr:minMaxValInArr,
sumArray:sumArray};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcnJheS5qc3giXSwibmFtZXMiOlsibWluTWF4VmFsSW5BcnIiLCJhcnIiLCJrZXkiLCJnZXRtaW4iLCJsaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwibWFwIiwiZWxlIiwicHVzaCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJvYmoiLCJzdW1BcnJheSIsInJlZHVjZSIsImEiLCJiIiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7OztBQUtBLFFBQVNBLGVBQVQsRUFBMkQsSUFBbkNDLElBQW1DLDJEQUE3QixFQUE2QixJQUF6QkMsSUFBeUIsMkRBQW5CLEVBQW1CLElBQWZDLE9BQWUsMkRBQU4sSUFBTTtBQUN2RCxHQUFJQyxNQUFPLEVBQVg7QUFDQSxHQUFJLE9BQU9ILElBQVAsbUNBQU9BLEdBQVAsSUFBYyxRQUFkLEVBQTBCSSxNQUFNQyxPQUFOLENBQWNMLEdBQWQsQ0FBOUIsQ0FBa0Q7QUFDOUMsR0FBSUEsSUFBSU0sTUFBSixFQUFjLENBQWxCLENBQXFCO0FBQ2pCLE1BQU8sRUFBUDtBQUNIOztBQUVELEdBQUksTUFBT04sS0FBSSxDQUFKLENBQVAsRUFBaUIsUUFBakIsRUFBNkIsTUFBT0EsS0FBSSxDQUFKLENBQVAsRUFBaUIsUUFBbEQsQ0FBNEQ7QUFDeERBLElBQUlPLEdBQUosQ0FBUSxTQUFDQyxHQUFELENBQVM7QUFDYixHQUFJLE1BQU9BLElBQVAsRUFBYyxRQUFsQixDQUE0QjtBQUN4QkwsS0FBS00sSUFBTCxDQUFVLENBQUNELEdBQVg7QUFDSCxDQUZEO0FBR0ssR0FBSSxNQUFPQSxJQUFQLEVBQWMsUUFBbEIsQ0FBNEI7QUFDN0JMLEtBQUtNLElBQUwsQ0FBVUQsR0FBVjtBQUNIO0FBQ0osQ0FQRDtBQVFBLE1BQU9OLFFBQVNRLEtBQUtDLEdBQUwsK0JBQVlSLElBQVosRUFBVCxDQUE2Qk8sS0FBS0UsR0FBTCwrQkFBWVQsSUFBWixFQUFwQztBQUNILENBVkQ7QUFXSyxHQUFJLFFBQU9ILElBQUksQ0FBSixDQUFQLEdBQWlCLFFBQWpCLEVBQTZCLENBQUNJLE1BQU1DLE9BQU4sQ0FBY0wsSUFBSSxDQUFKLENBQWQsQ0FBOUIsRUFBdURDLEdBQTNELENBQWdFO0FBQ2pFRSxLQUFPSCxJQUFJTyxHQUFKLENBQVEsb0JBQU9NLEtBQUlaLEdBQUosQ0FBUCxDQUFSLENBQVA7QUFDQSxNQUFPQyxRQUFTUSxLQUFLQyxHQUFMLCtCQUFZUixJQUFaLEVBQVQsQ0FBNkJPLEtBQUtFLEdBQUwsK0JBQVlULElBQVosRUFBcEM7QUFDSDtBQUNELE1BQU8sRUFBUDtBQUNIO0FBQ0QsTUFBTyxFQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7O0FBUUEsUUFBU1csU0FBVCxFQUFzQyxJQUFwQmQsSUFBb0IsMkRBQWQsRUFBYyxJQUFWQyxJQUFVLDJEQUFKLEVBQUk7QUFDbEMsR0FBSUUsTUFBTyxFQUFYO0FBQ0EsR0FBSSxPQUFPSCxJQUFQLG1DQUFPQSxHQUFQLElBQWMsUUFBZCxFQUEwQkksTUFBTUMsT0FBTixDQUFjTCxHQUFkLENBQTlCLENBQWtEO0FBQzlDLEdBQUlBLElBQUlNLE1BQUosRUFBYyxDQUFsQixDQUFxQjtBQUNqQixNQUFPLEVBQVA7QUFDSCxDQUZEO0FBR0ssR0FBSSxNQUFPTixLQUFJLENBQUosQ0FBUCxFQUFpQixRQUFqQixFQUE2QixNQUFPQSxLQUFJLENBQUosQ0FBUCxFQUFpQixRQUFsRCxDQUE0RDtBQUM3REEsSUFBSVMsSUFBSixDQUFTLFNBQUNELEdBQUQsQ0FBUztBQUNkLEdBQUksTUFBT0EsSUFBUCxFQUFjLFFBQWxCLENBQTRCO0FBQ3hCTCxLQUFLTSxJQUFMLENBQVUsQ0FBQ0QsR0FBWDtBQUNILENBRkQsSUFFTyxJQUFJLE1BQU9BLElBQVAsRUFBYyxRQUFsQixDQUE0QjtBQUMvQkwsS0FBS00sSUFBTCxDQUFVRCxHQUFWO0FBQ0g7QUFDSixDQU5EOztBQVFBLE1BQU9MLE1BQUtZLE1BQUwsQ0FBWSxTQUFDQyxDQUFELENBQUlDLENBQUosUUFBVUQsR0FBSUMsQ0FBZCxDQUFaLENBQTZCLENBQTdCLENBQVA7QUFDSCxDQVZJO0FBV0EsR0FBSSxRQUFPakIsSUFBSSxDQUFKLENBQVAsR0FBaUIsUUFBakIsRUFBNkIsQ0FBQ0ksTUFBTUMsT0FBTixDQUFjTCxJQUFJLENBQUosQ0FBZCxDQUE5QixFQUF1REMsR0FBM0QsQ0FBZ0U7QUFDakVELElBQUlPLEdBQUosQ0FBUSxTQUFDTSxHQUFELENBQVM7QUFDYixHQUFJQSxJQUFJSyxjQUFKLENBQW1CakIsR0FBbkIsQ0FBSixDQUE2QjtBQUN6QkUsS0FBS00sSUFBTCxDQUFVLENBQUNJLElBQUlaLEdBQUosQ0FBWDtBQUNIO0FBQ0osQ0FKRDtBQUtBLE1BQU9FLE1BQUtZLE1BQUwsQ0FBWSxTQUFDQyxDQUFELENBQUlDLENBQUosUUFBVUQsR0FBSUMsQ0FBZCxDQUFaLENBQTZCLENBQTdCLENBQVA7QUFDSDtBQUNELE1BQU8sRUFBUDtBQUNIO0FBQ0QsTUFBTyxFQUFQO0FBQ0gsQzs7QUFFYztBQUNYbEIsNkJBRFc7QUFFWGUsaUJBRlcsQyIsImZpbGUiOiJhcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIG1pbmltdW0vbWF4aW11bSB2YWx1ZSBpbiBhcnJheSBvZiBzdHJpbmdzIG9yIG9iamVjdHMgb3IgbnVtYmVyc1xyXG4gKiBAcGFyYW0geyp9IGFyciBhcnJheSBvZiBvYmplY3RzIG9yIHN0cmluZ3Mgb3IgbnVtYmVycyBcclxuICogQHBhcmFtIHsqfSBrZXkgdXNlZCB3aGVuIGFycmF5IG9mIG9iamVjdHMgXHJcbiAqL1xyXG5mdW5jdGlvbiBtaW5NYXhWYWxJbkFycihhcnIgPSBbXSwga2V5ID0gXCJcIiwgZ2V0bWluID0gdHJ1ZSkge1xyXG4gICAgbGV0IGxpc3QgPSBbXTtcclxuICAgIGlmICh0eXBlb2YgYXJyID09IFwib2JqZWN0XCIgJiYgQXJyYXkuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgYXJyWzBdID09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGFyclswXSA9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGFyci5tYXAoKGVsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaCgrZWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBlbGUgPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChlbGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0bWluID8gTWF0aC5taW4oLi4ubGlzdCkgOiBNYXRoLm1heCguLi5saXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFyclswXSA9PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGFyclswXSkgJiYga2V5KSB7XHJcbiAgICAgICAgICAgIGxpc3QgPSBhcnIubWFwKG9iaiA9PiBvYmpba2V5XSk7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRtaW4gPyBNYXRoLm1pbiguLi5saXN0KSA6IE1hdGgubWF4KC4uLmxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlIHRoZSBzdW0gb2YgYXJyYXkgb2Ygb2JqZWN0cywgbnVtYmVyIG9yIHN0cmluZ3MuXHJcbiAqIFxyXG4gKiBEZXBlbmRpbmcgdXBvbiBmaXJzdCBlbGVtZW50IGluIGFycmF5IHRoZSB0eXBlIGlzIGRlY2lkZWRcclxuICogXHJcbiAqIEBwYXJhbSB7Kn0gYXJyIGFycmF5IG9mIG9iamVjdHMsIG51bWJlcnMgb3Igc3RyaW5nIFxyXG4gKiBAcGFyYW0geyp9IGtleSBrZXkgaXMgdXNlZCB3aGVuIGFycmF5IG9mIG9iamVjdHMgYXJlIGZvdW5kIFxyXG4gKi9cclxuZnVuY3Rpb24gc3VtQXJyYXkoYXJyID0gW10sIGtleSA9IFwiXCIpIHtcclxuICAgIGxldCBsaXN0ID0gW107XHJcbiAgICBpZiAodHlwZW9mIGFyciA9PSBcIm9iamVjdFwiICYmIEFycmF5LmlzQXJyYXkoYXJyKSkge1xyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcnJbMF0gPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgYXJyWzBdID09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goKGVsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaCgrZWxlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZSA9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKGVsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbGlzdC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFyclswXSA9PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGFyclswXSkgJiYga2V5KSB7XHJcbiAgICAgICAgICAgIGFyci5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKCtvYmpba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBsaXN0LnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBtaW5NYXhWYWxJbkFycixcclxuICAgIHN1bUFycmF5XHJcbn07Il19