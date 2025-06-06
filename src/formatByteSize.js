export function formatByteSize(bytes) {
    if (bytes < 100) {
        return bytes + " B"
    }

    if (bytes < 100000) {
        return (Math.round(bytes / 100) / 10) + " kB";
    }

    if (bytes < 100000000) {
        return (Math.round(bytes / 100000) / 10) + " MB";
    }

    return (Math.round(bytes / 100000000) / 10) + " GB";
}
