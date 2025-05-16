import _ from 'lodash'

// Inputs:
// arr = [ 
//   { a: { b: 123, c: "foo" } },
//   { a: { b: true } },
//   { a: { b: 123, c: "bar" } },
//   { a: { b: null } },
//   { other: "baz" },
//   { other: "qux" }
// ]
// pathToUniqueProperty = "a.b"
// ---
// Output: [
//   { a: { b: true } },
//   { a: { b: 123, c: "bar" } },
//   { a: { b: null } },
//   { other: "qux" }
// ]
export function filterUnique(arr, pathToUniqueProperty) {
    let mapObj = new Map()
    arr.forEach(obj => mapObj.set(_.get(obj, pathToUniqueProperty), obj))
    return [...mapObj.values()]
}