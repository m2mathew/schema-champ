import greeting from './constants';
import {
  isPlainObject,
  // looseEqual,
  // arrayDifference,
  // toString,
  // isString,
  // isNumber,
  // isBoolean,
  // isUndef
} from "./util";

export const sayGreeting = () => {
  console.log('greeting', greeting);
  return greeting;
};

export const traverse = (schema, data) => {
  // Three types of data coming in
  //  - Primitive
  //  - Array
  //  - Object

  if (Array.isArray(schema)) {
    // Arrays

    // if Data is not an array, throw error

    // if Data is array, call traverse() again
    //  for each element of the array

  } else if (isPlainObject(schema)) {
    // Objects

    // if Data is not an object (or is an array), throw error

    // if Data is object, call traverse() again
    //  for each element in the array of object keys

  } else {
    // Primitives

    // check for null

    // check for undefined

    // check for string

    // check for number

    // check for boolean
  }




};
