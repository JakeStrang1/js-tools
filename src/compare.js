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