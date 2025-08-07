import { mapping, allowedLengths } from '@constants'

export function filterWords(text: string): string {
    const cleanedText = text.replace(/[!&',\-\.\/]/g, '')

    const lines = cleanedText
        .split(/\r?\n/)
        .map((w) => w.trim())
        .filter((w) => w)
    const filtered: string[] = []

    for (const word of lines) {
        let valid = true
        const tokens: string[] = []

        for (const char of word) {
            const symbol = mapping[char]
            if (!symbol) {
                valid = false
                break
            }
            tokens.push(symbol)
        }

        if (!valid) continue

        const hexBody = tokens.join('')
        if (!allowedLengths.includes(hexBody.length)) continue

        filtered.push(word)
    }

    const unique = Array.from(new Set(filtered))

    unique.sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
    )

    return unique.join('\n')
}
