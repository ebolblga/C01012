# <span style="background-color: #C01012; color: #FFFFFF; padding-right: 100px">#C01012</span> (COLOR)
## Tool to search for spellable words in hexadecimal (HEX) color codes

Idea for this project was inspired by [@aarexer post on X](https://x.com/aarexer/status/1938841036274413999) (formally known as Twitter) and an older project I worked on - [car-p18s](https://github.com/ebolblga/car-p18s).

## Introduction

> The hex-color CSS data type is a notation for describing the hexadecimal color syntax of an sRGB color using its primary color components (red, green, blue) written as hexadecimal numbers, as well as its transparency.

Source: [MDN Web Docs <hex-color>](https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color)

Valid syntax for HEX color codes:
```text
#RGB        // The three-value syntax
#RGBA       // The four-value syntax
#RRGGBB     // The six-value syntax
#RRGGBBAA   // The eight-value syntax
```
Where:

`R` or `RR`<br />
The red component of the color, as a case-insensitive hexadecimal number between 0 and ff (255). If there is only one number, it is duplicated: 1 means 11.

`G` or `GG`<br />
The green component of the color, as a case-insensitive hexadecimal number between 0 and ff (255). If there is only one number, it is duplicated: c means cc.

`B` or `BB`<br />
The blue component of the color, as a case-insensitive hexadecimal number between 0 and ff (255). If there is only one number, it is duplicated: 9 means 99.

`A` or `AA` (Optional)<br />
The alpha component of the color, indicating its transparency, as a case-insensitive hexadecimal number between 0 and ff (255). If there is only one number, it is duplicated: e means ee. 0, or 00, represents a fully transparent color, and f, or ff, a fully opaque one.

**Note: The syntax is case-insensitive: #00ff00 is the same as #00FF00.**

Given this it is possible to write words that are valid in HEX color codes. To find such words this website was made.

## HEX number to Latin/Cyrillic symbol mapping
This mapping was custom made and inspired by:
- [LEET](https://en.wikipedia.org/wiki/Leet)
- [Буквы-цифры (SMS)](https://translit.tsymbal.su/q/%D0%90%D0%91%D0%92%D0%93%D0%94%D0%95%D0%81%D0%96%D0%97%D0%98%D0%99%D0%9A%D0%9B%D0%9C%D0%9D%D0%9E%D0%9F%D0%A0%D0%A1%D0%A2%D0%A3%D0%A4%D0%A5%D0%A6%D0%A7%D0%A8%D0%A9%D0%AA%D0%AB%D0%AC%D0%AD%D0%AE%D0%AF/)
- custom mapping previously made for [car-p18s](https://github.com/ebolblga/car-p18s) project

| Symbols | Latin         | Cyrillic |
| ------- | ------------- | -------- |
| `0`     | `o`, `O`      | `о`, `О` |
| `1`     | `l`, `L`, `I` |          |
| `2`     | `z`, `Z`      |          |
| `3`     |               | `з`, `З` |
| `4`     | `h`           | `ч`, `Ч` |
| `5`     | `s`, `S`      |          |
| `6`     | `G`           | `б`, `Б` |
| `7`     | `t`, `T`      |          |
| `8`     | `X`           |          |
| `9`     | `g`, `q`      | `д`, `Д` |
| `a`     | `a`           | `а`      |
| `b`     | `b`           |          |
| `c`     | `c`           | `с`      |
| `d`     | `d`           |          |
| `e`     | `e`           | `е`      |
| `f`     | `f`           |          |
| `A`     | `A`           | `А`      |
| `B`     | `B`           | `в`, `В` |
| `C`     | `C`           | `С`      |
| `D`     | `D`           |          |
| `E`     | `E`           | `Е`      |
| `F`     | `F`           |          |
| `10`    |               | `ю`, `Ю` |
| `11`    | `N`           |          |
| `12`    | `R`           |          |

If you want to expand this table to other alphabets, contributions are welcome! Just add them to `\app\constants\colorMapping.ts`.

## Word sources
- A text file containing 479k English words: [english-words](https://github.com/dwyl/english-words)
- A text file containing 1.5m Russian words: [russian-words](https://github.com/danakt/russian-words)
- List of 2.8k Russian swear words: [2yxa](https://doc.2yxa.mobi/mat/)
- "Funny" words from funny word generator I worked on previously: [Ahaha-hehehe](https://github.com/ebolblga/Ahaha-hehehe)

## Examples
Now as a web designer you can put secret funny words on your web pages, like:
- ass #a55
- Bathesda #Ba74e5da
- ебасос #ebac0c

Just look, how beautiful it is on [Realtime Colors](https://www.realtimecolors.com/?colors=aa5555-1a0c0c-eb0c0c-931515-Ba74e5&fonts=Inter-Inter)

## Setup with [Node.js](https://nodejs.org/en/)
If you want to try changing the mapping
```bash
# install yarn
npm install --global yarn

# download repository and cd into it
git clone https://github.com/ebolblga/c010125.git
cd c010125

# install all dependencies
yarn

# start project in dev mode
yarn dev
```

## License
This program is licensed under the MIT License. Please read the License file to know about the usage terms and conditions.
