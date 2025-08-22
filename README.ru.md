# <span style="background-color: #C01012; color: #FFFFFF; padding-right: 100px">#C01012</span> (COLOR)

## Веб-приложение для поиска слов, которые можно записать в шестнадцатеричных (HEX) цветовых кодах

[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/ebolblga/C01012/blob/master/README.md)
[![ru](https://img.shields.io/badge/lang-ru-green.svg)](https://github.com/ebolblga/C01012/blob/master/README.ru.md)
![Vercel](https://vercelbadge.vercel.app/api/ebolblga/C01012)
[![DeepWiki](https://img.shields.io/badge/DeepWiki-ebolblga%2FC01012-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAAAXNSR0IArs4c6QAAA05JREFUaEPtmUtyEzEQhtWTQyQLHNak2AB7ZnyXZMEjXMGeK/AIi+QuHrMnbChYY7MIh8g01fJoopFb0uhhEqqcbWTp06/uv1saEDv4O3n3dV60RfP947Mm9/SQc0ICFQgzfc4CYZoTPAswgSJCCUJUnAAoRHOAUOcATwbmVLWdGoH//PB8mnKqScAhsD0kYP3j/Yt5LPQe2KvcXmGvRHcDnpxfL2zOYJ1mFwrryWTz0advv1Ut4CJgf5uhDuDj5eUcAUoahrdY/56ebRWeraTjMt/00Sh3UDtjgHtQNHwcRGOC98BJEAEymycmYcWwOprTgcB6VZ5JK5TAJ+fXGLBm3FDAmn6oPPjR4rKCAoJCal2eAiQp2x0vxTPB3ALO2CRkwmDy5WohzBDwSEFKRwPbknEggCPB/imwrycgxX2NzoMCHhPkDwqYMr9tRcP5qNrMZHkVnOjRMWwLCcr8ohBVb1OMjxLwGCvjTikrsBOiA6fNyCrm8V1rP93iVPpwaE+gO0SsWmPiXB+jikdf6SizrT5qKasx5j8ABbHpFTx+vFXp9EnYQmLx02h1QTTrl6eDqxLnGjporxl3NL3agEvXdT0WmEost648sQOYAeJS9Q7bfUVoMGnjo4AZdUMQku50McDcMWcBPvr0SzbTAFDfvJqwLzgxwATnCgnp4wDl6Aa+Ax283gghmj+vj7feE2KBBRMW3FzOpLOADl0Isb5587h/U4gGvkt5v60Z1VLG8BhYjbzRwyQZemwAd6cCR5/XFWLYZRIMpX39AR0tjaGGiGzLVyhse5C9RKC6ai42ppWPKiBagOvaYk8lO7DajerabOZP46Lby5wKjw1HCRx7p9sVMOWGzb/vA1hwiWc6jm3MvQDTogQkiqIhJV0nBQBTU+3okKCFDy9WwferkHjtxib7t3xIUQtHxnIwtx4mpg26/HfwVNVDb4oI9RHmx5WGelRVlrtiw43zboCLaxv46AZeB3IlTkwouebTr1y2NjSpHz68WNFjHvupy3q8TFn3Hos2IAk4Ju5dCo8B3wP7VPr/FGaKiG+T+v+TQqIrOqMTL1VdWV1DdmcbO8KXBz6esmYWYKPwDL5b5FA1a0hwapHiom0r/cKaoqr+27/XcrS5UwSMbQAAAABJRU5ErkJggg==)](https://deepwiki.com/ebolblga/C01012)

> [!WARNING]
> Я **не** применял семантическую фильтрацию к спискам слов, использованным в этом проекте. Некоторые слова могут быть оскорбительными, неприемлемыми или неожиданными. Будьте осторожны.

Main language of this repostory is english, please read main [README.md](https://github.com/ebolblga/C01012/blob/master/README.md) file if possible.

Идея для проекта была вдохновлена [постом @aarexer в X (ранее Twitter)](https://x.com/aarexer/status/1938841036274413999) и старым проектом, над которым я работал — [car-p18s](https://github.com/ebolblga/car-p18s).

![Интерфейс C01012](/app/assets/c01012_interface.png)

## Введение

> Тип данных hex-color в CSS — это нотация для описания шестнадцатеричного синтаксиса цвета sRGB с использованием его основных компонентов (красный, зелёный, синий), записанных шестнадцатеричными числами, а также прозрачности.

Источник: [MDN Web Docs <hex-color>](https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color)

Допустимый синтаксис HEX-кодов:

```text
#RGB        // Синтаксис из трёх значений
#RGBA       // Синтаксис из четырёх значений
#RRGGBB     // Синтаксис из шести значений
#RRGGBBAA   // Синтаксис из восьми значений
```

Где:

`R` или `RR`<br />
Красный компонент цвета — нечувствительное к регистру шестнадцатеричное число от 0 до ff (255). Если указана только одна цифра, она дублируется: 1 означает 11.

`G` или `GG`<br />
Зелёный компонент цвета — нечувствительное к регистру шестнадцатеричное число от 0 до ff (255). Если указана только одна цифра, она дублируется: c означает cc.

`B` или `BB`<br />
Синий компонент цвета — нечувствительное к регистру шестнадцатеричное число от 0 до ff (255). Если указана только одна цифра, она дублируется: 9 означает 99.

`A` или `AA` (необязательно)<br />
Компонент альфа (прозрачности) — нечувствительное к регистру шестнадцатеричное число от 0 до ff (255). Если указана только одна цифра, она дублируется: e означает ee. 0 или 00 — полностью прозрачный цвет, а f или ff — полностью непрозрачный.

**Примечание: синтаксис нечувствителен к регистру: #00ff00 эквивалентен #00FF00.**

Учитывая это, можно записывать слова, которые являются допустимыми HEX-цветами. Для поиска таких слов и создан этот сайт.

## Соответствие HEX-цифр латинским/кириллическим символам

Эта таблица была создана вручную и вдохновлена:

* [LEET](https://ru.wikipedia.org/wiki/Leet)
* [Буквы-цифры (SMS)](https://translit.tsymbal.su/q/%D0%90%D0%91%D0%92%D0%93%D0%94%D0%95%D0%81%D0%96%D0%97%D0%98%D0%99%D0%9A%D0%9B%D0%9C%D0%9D%D0%9E%D0%9F%D0%A0%D0%A1%D0%A2%D0%A3%D0%A4%D0%A5%D0%A6%D0%A7%D0%A8%D0%A9%D0%AA%D0%AB%D0%AC%D0%AD%D0%AE%D0%AF/)
* пользовательская таблица, ранее применённая в проекте [car-p18s](https://github.com/ebolblga/car-p18s)

| Символы | Латиница      | Кириллица |
| ------- | ------------- | --------- |
| `0`     | `o`, `O`      | `о`, `О`  |
| `1`     | `l`, `L`, `I` |           |
| `2`     | `z`, `Z`      |           |
| `3`     |               | `з`, `З`  |
| `4`     | `h`           | `ч`, `Ч`  |
| `5`     | `s`, `S`      |           |
| `6`     | `G`           | `б`, `Б`  |
| `7`     | `t`, `T`      |           |
| `8`     | `X`           |           |
| `9`     | `g`, `q`      | `д`, `Д`  |
| `a`     | `a`           | `а`       |
| `b`     | `b`           |           |
| `c`     | `c`           | `с`       |
| `d`     | `d`           |           |
| `e`     | `e`           | `е`       |
| `f`     | `f`           |           |
| `A`     | `A`           | `А`       |
| `B`     | `B`           | `в`, `В`  |
| `C`     | `C`           | `С`       |
| `D`     | `D`           |           |
| `E`     | `E`           | `Е`       |
| `F`     | `F`           |           |
| `10`    |               | `ю`, `Ю`  |
| `11`    | `N`           |           |
| `12`    | `R`           |           |

Если хотите расширить таблицу для других алфавитов — присылайте пулреквесты! Добавляйте их в `/app/constants/colorMapping.ts`. Там же можно добавить дополнительные списки слов. Подробнее в [CONTRIBUTING.md](https://github.com/ebolblga/C01012?tab=contributing-ov-file).

## Источники слов

* Текстовый файл с 479k английских слов: [english-words](https://github.com/dwyl/english-words)
* Текстовый файл с 1.5m русских слов: [russian-words](https://github.com/danakt/russian-words)
* Список из 2.8k русских матерных слов: [2yxa](https://doc.2yxa.mobi/mat/)
* "Весёлые" слова из генератора, над которым я работал ранее: [Ahaha-hehehe](https://github.com/ebolblga/Ahaha-hehehe)

## Примеры

Этот README можно прочитать на странице "About" C01012: [C01012's About](https://c01012.vercel.app/about), чтобы видеть цвета.

Теперь, как веб-дизайнер, вы можете спрятать забавные слова на своих страницах, например:

* ass <span style="background-color: #a55; padding: 0px 6px;">#a55</span>
* assholes <span style="background-color: #a55401e5; padding: 0px 6px;">#a55401e5</span>
* badass <span style="background-color: #bada55; padding: 0px 6px;">#bada55</span>
* BIOS <span style="background-color: #B105; padding: 0px 6px;">#B105</span>
* bleach <span style="background-color: #b1eac4; padding: 0px 6px;">#b1eac4</span>
* boob <span style="background-color: #b00b; padding: 0px 6px;">#b00b</span>
* Chad <span style="background-color: #C4ad; padding: 0px 6px;">#C4ad</span>
* database <span style="background-color: #da7aba5e; padding: 0px 6px;">#da7aba5e</span>
* deed <span style="background-color: #deed; padding: 0px 6px;">#deed</span>
* бабоба <span style="background-color: #6a606a; padding: 0px 6px;">#6a606a</span>
* всосав <span style="background-color: #Bc0caB; padding: 0px 6px;">#Bc0caB</span>
* давеча <span style="background-color: #9aBe4a; padding: 0px 6px;">#9aBe4a</span>
* ебасос <span style="background-color: #ebac0c; padding: 0px 6px;">#ebac0c</span>

Просто посмотрите, как красиво это выглядит на [Realtime Colors](https://www.realtimecolors.com/?colors=aa5555-1a0c0c-eb0c0c-931515-Ba74e5&fonts=Inter-Inter)

## Тривия

Компании **должны** использовать подходящие цвета для своих брендов:

* Bathesda <span style="background-color: #Ba74e5da; padding: 0px 6px;">#Ba74e5da</span>
* CocaCola <span style="background-color: #C0caC01a; padding: 0px 6px;">#C0caC01a</span>
* Google <span style="background-color: #60091e; padding: 0px 6px;">#60091e</span>

"cold" и "hot" имеют смешанные семантические цвета:

* cold <span style="background-color: #c01d; padding: 0px 6px;">#c01d</span>
* hot <span style="background-color: #407; padding: 0px 6px;">#407</span>

Слово "colossal" действительно колоссально: это самый длинный допустимый HEX-код, и само слово тоже большое:

* colossal <span style="background-color: #c01055a1; padding: 0px 6px;">#c01055a1</span>

Записать слово "doable" в HEX — возможно ли это?

* doable <span style="background-color: #d0ab1e; padding: 0px 6px;">#d0ab1e</span>

Teal Sabbaths:

* Sabbaths <span style="background-color: #5abba745; padding: 0px 6px;">#5abba745</span>

Я прогнал полный список слов Wordle (игра про угадывание слов) (5 букв) — ни одно из них не прошло фильтр.

## Установка с [Node.js](https://nodejs.org/en/)

Если хотите попробовать изменить соответствия, выполните:

```bash
# ------------------------------------------
# Пререквизиты
# ------------------------------------------

# Linux (пример для Debian/Ubuntu):
# 1. Установите Node.js (рекомендуется v20+)
sudo apt update
sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 2. Установите Git (если не установлен)
sudo apt install -y git

# 3. Установите Yarn глобально через npm
npm install --global yarn

# ------------------------------------------
# Windows (PowerShell от имени Администратора)
# ------------------------------------------
# 1. Установите Node.js:
#    Скачайте и установите с https://nodejs.org/en/download/
#
# 2. Установите Git:
#    Скачайте и установите с https://git-scm.com/download/win
#
# 3. Откройте новое окно PowerShell и установите Yarn глобально:
# npm install --global yarn

# ------------------------------------------
# Настройка проекта
# ------------------------------------------

# Клонируйте репозиторий и перейдите в него
git clone https://github.com/ebolblga/C01012.git
cd C01012

# Установите все зависимости
yarn

# Запустите проект в режиме разработки
yarn dev
```

## Лицензия
Эта программа лицензирована по MIT License. Пожалуйста, прочтите файл License, чтобы узнать условия использования.
