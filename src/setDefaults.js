import _ from 'lodash'

// Input: obj = { a: 123, b: { c: null } }, defaults = { "a": "foo", "b.c": 345, "d.e": true }
// Output: { a: 123, b: { c: 345 }, d: { e: true } }
export function setDefaults(obj, defaults) {
    for (const [key, value] of Object.entries(defaults)) {
        _.set(obj, key, _.get(obj, key) ?? value);
    }
    return obj
}