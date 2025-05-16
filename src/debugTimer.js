export function debugTimer(start, label) {
    const end = new Date()
    if (start) {
        const span = end-start
        const description = span > 60000 ? `${span/60000} minutes` : (span > 1000 ? `${span/1000} seconds` : `${span} milliseconds`)
        console.log(`DEBUG TIMER: ${label ?? ""} - ${description}`)
    }
    return end
}