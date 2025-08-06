export type ResultItem = {
    id: number
    hex: string
    word: string
}

export enum Languages {
    english = 'english',
    russian = 'russian',
    custom = 'custom',
}

export interface LanguageOption {
    value: Languages
    label: string
    path: string
}

export const languageOptions: LanguageOption[] = [
    { value: Languages.english, label: 'English', path: '/englishUTF-8.txt' },
    { value: Languages.russian, label: 'Russian', path: '/russianUTF-8.txt' },
    { value: Languages.custom, label: 'Custom txt separated by \\n', path: '/test.txt' },
] as const
