export function compressString(str: string, maxLength: number) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + '...'
    } else {
        return str
    }
}


export function formatDate(date: Date) {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}

export function isBlank(str: string) {
    return str===undefined || str===null || str.trim().length===0
}