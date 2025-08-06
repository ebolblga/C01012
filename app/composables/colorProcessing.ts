import { allowedLengths } from '@constants'

export function formatHex(rawHex: string): string {
    let normHex: string = ''

    try {
        let hex = rawHex.replace(/^#/, '').toLowerCase()
        if (!allowedLengths.includes(hex.length)) {
            throw new Error(`Invalid hex length: ${hex.length}`)
        }

        // expand 3 → 6, 4 → 8
        if (hex.length === 3 || hex.length === 4) {
            hex = hex
                .split('')
                .map((ch: string) => ch + ch) // e.g. 'f' → 'ff'
                .join('')
        }
        normHex = hex
    } catch (e) {
        normHex = rawHex.toLowerCase()
    }

    return `#${normHex}`
}

export function copyHex(rawHex: string): void {
    navigator.clipboard.writeText(formatHex(rawHex))
}
