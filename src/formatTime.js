
// Input a date object and a format string like "yyyy-MM-ddTHH:mm:ss"
// Output like "2025-03-09T16:57:09"
export function formatTime(date, formatString) {
    let result = formatString

    // Timezone
    const timezoneOffset = date.getTimezoneOffset()
    result = result.replace("TZH", `${offsetSymbol(timezoneOffset)}${offsetToHours(timezoneOffset)}`)
    result = result.replace("TZM", `${offsetToMinutes(timezoneOffset)}`)

    result = result.replace("yyyy", date.getFullYear())
    result = result.replace("MM", (date.getMonth()+1).toString().padStart(2, "0"))
    result = result.replace("dd", date.getDate().toString().padStart(2, "0"))
    result = result.replace("HH", date.getHours().toString().padStart(2, "0"))
    result = result.replace("mm", date.getMinutes().toString().padStart(2, "0"))
    result = result.replace("ss", date.getSeconds().toString().padStart(2, "0"))

    
    return result
}

function offsetSymbol(timezoneOffset) {
    return timezoneOffset > 0 ? "-" : "+"
}

function offsetToHours(timezoneOffset) {
    const minutes = Math.abs(timezoneOffset)
    return Math.floor(minutes / 60).toString().padStart(2, "0")
}

function offsetToMinutes(timezoneOffset) {
    const minutes = Math.abs(timezoneOffset)
    return (minutes % 60).toString().padStart(2, "0")
}