import { $fetch } from 'ohmyfetch'
import { access } from 'node:fs/promises'
import { constants } from 'node:fs'
import { defineNuxtModule, useLogger } from '@nuxt/kit'
import { filterWords } from '../shared/utils/wordFilter'
import { join } from 'path'
import { promises as fs } from 'fs'
import { wordSources } from '../app/constants/colorMapping'

async function fileExists(path: string): Promise<boolean> {
    try {
        await access(path, constants.F_OK)
        return true
    } catch {
        return false
    }
}

export default defineNuxtModule({
    setup(_, nuxt) {
        const logger = useLogger('wordlist')

        const writeLists = async () => {
            const outDir = join(nuxt.options.rootDir, 'public')
            await fs.mkdir(outDir, { recursive: true })

            for (const [lang, urls] of Object.entries(wordSources)) {
                logger.info(`Processing language: ${lang}`)
                const contents = await Promise.all(
                    urls.map((u) => $fetch(u, { responseType: 'text' }))
                )
                const combined = contents.join('\n')
                const filtered = filterWords(combined)
                const outPath = join(outDir, `${lang}UTF-8.txt`)
                await fs.writeFile(outPath, filtered, 'utf-8')
                logger.success(
                    `Saved ${
                        filtered.split('\n').length
                    } words to ${lang}UTF-8.txt`
                )
            }
        }

        nuxt.hook('build:before', writeLists)
    },
})
