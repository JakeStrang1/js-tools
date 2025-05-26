export function compare(a, b) {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
    return 0
}

export function comparePath(a, b, path) {
    const aVal = get(a, path)
    const bVal = get(b, path)
    if (aVal < bVal) {
        return -1
    }
    if (aVal > bVal) {
        return 1
    }
    return 0
}

// Returns true if the same, false if different
export function shallowEquals(obj1, obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) {
        return false
    }

    for (let key of keys1) {
        if (!Object.hasOwn(obj2, key) || obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
}