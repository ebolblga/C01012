# <span style="background-color: #C01012; color: #FFFFFF; padding-right: 100px">#C01012</span> (COLOR)
## Web application to search for spellable words in hexadecimal (HEX) color codes
![Vercel](https://vercelbadge.vercel.app/api/ebolblga/C01012)
[![DeepWiki](https://img.shields.io/badge/DeepWiki-ebolblga%2FC01012-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAAAXNSR0IArs4c6QAAA05JREFUaEPtmUtyEzEQhtWTQyQLHNak2AB7ZnyXZMEjXMGeK/AIi+QuHrMnbChYY7MIh8g01fJoopFb0uhhEqqcbWTp06/uv1saEDv4O3n3dV60RfP947Mm9/SQc0ICFQgzfc4CYZoTPAswgSJCCUJUnAAoRHOAUOcATwbmVLWdGoH//PB8mnKqScAhsD0kYP3j/Yt5LPQe2KvcXmGvRHcDnpxfL2zOYJ1mFwrryWTz0advv1Ut4CJgf5uhDuDj5eUcAUoahrdY/56ebRWeraTjMt/00Sh3UDtjgHtQNHwcRGOC98BJEAEymycmYcWwOprTgcB6VZ5JK5TAJ+fXGLBm3FDAmn6oPPjR4rKCAoJCal2eAiQp2x0vxTPB3ALO2CRkwmDy5WohzBDwSEFKRwPbknEggCPB/imwrycgxX2NzoMCHhPkDwqYMr9tRcP5qNrMZHkVnOjRMWwLCcr8ohBVb1OMjxLwGCvjTikrsBOiA6fNyCrm8V1rP93iVPpwaE+gO0SsWmPiXB+jikdf6SizrT5qKasx5j8ABbHpFTx+vFXp9EnYQmLx02h1QTTrl6eDqxLnGjporxl3NL3agEvXdT0WmEost648sQOYAeJS9Q7bfUVoMGnjo4AZdUMQku50McDcMWcBPvr0SzbTAFDfvJqwLzgxwATnCgnp4wDl6Aa+Ax283gghmj+vj7feE2KBBRMW3FzOpLOADl0Isb5587h/U4gGvkt5v60Z1VLG8BhYjbzRwyQZemwAd6cCR5/XFWLYZRIMpX39AR0tjaGGiGzLVyhse5C9RKC6ai42ppWPKiBagOvaYk8lO7DajerabOZP46Lby5wKjw1HCRx7p9sVMOWGzb/vA1hwiWc6jm3MvQDTogQkiqIhJV0nBQBTU+3okKCFDy9WwferkHjtxib7t3xIUQtHxnIwtx4mpg26/HfwVNVDb4oI9RHmx5WGelRVlrtiw43zboCLaxv46AZeB3IlTkwouebTr1y2NjSpHz68WNFjHvupy3q8TFn3Hos2IAk4Ju5dCo8B3wP7VPr/FGaKiG+T+v+TQqIrOqMTL1VdWV1DdmcbO8KXBz6esmYWYKPwDL5b5FA1a0hwapHiom0r/cKaoqr+27/XcrS5UwSMbQAAAABJRU5ErkJggg==)](https://deepwiki.com/ebolblga/C01012)

Idea for this project was inspired by [@aarexer post on X](https://x.com/aarexer/status/1938841036274413999) (formally known as Twitter) and an older project I worked on - [car-p18s](https://github.com/ebolblga/car-p18s).

![C01012 user interface](/app/assets/c01012_interface.png)

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

If you want to expand this table to other alphabets, contributions are welcome! Just add them to `/app/constants/colorMapping.ts`. You can add more word lists there too.

## Word sources
- A text file containing 479k English words: [english-words](https://github.com/dwyl/english-words)
- A text file containing 1.5m Russian words: [russian-words](https://github.com/danakt/russian-words)
- List of 2.8k Russian swear words: [2yxa](https://doc.2yxa.mobi/mat/)
- "Funny" words from funny word generator I worked on previously: [Ahaha-hehehe](https://github.com/ebolblga/Ahaha-hehehe)

## Examples
Now as a web designer you can put secret funny words on your web pages, like:
- ass <span style="background-color: #a55; padding: 0px 6px;">#a55</span>
- Bathesda <span style="background-color: #Ba74e5da; padding: 0px 6px;">#Ba74e5da</span>
- бабоба <span style="background-color: #6a606a; padding: 0px 6px;">#6a606a</span>
- ебасос <span style="background-color: #ebac0c; padding: 0px 6px;">#ebac0c</span>

Just look, how beautiful it is on [Realtime Colors](https://www.realtimecolors.com/?colors=aa5555-1a0c0c-eb0c0c-931515-Ba74e5&fonts=Inter-Inter)

## Setup with [Node.js](https://nodejs.org/en/)
If you want to try changing the mapping
```bash
# ------------------------------------------
# Prerequisites
# ------------------------------------------

# Linux (Debian/Ubuntu example):
# 1. Install Node.js (v20+ recommended)
sudo apt update
sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 2. Install Git (if not installed)
sudo apt install -y git

# 3. Install Yarn globally via npm
npm install --global yarn

# ------------------------------------------
# Windows (PowerShell as Administrator)
# ------------------------------------------
# 1. Install Node.js:
#    Download and install from https://nodejs.org/en/download/
#
# 2. Install Git:
#    Download and install from https://git-scm.com/download/win
#
# 3. Open a new PowerShell window and install Yarn globally:
# npm install --global yarn

# ------------------------------------------
# Project Setup
# ------------------------------------------

# Clone the repository and navigate into it
git clone https://github.com/ebolblga/C01012.git
cd C01012

# Install all dependencies
yarn

# Start the project in development mode
yarn dev
```

## License
This program is licensed under the MIT License. Please read the License file to know about the usage terms and conditions.
