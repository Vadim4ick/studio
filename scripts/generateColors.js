/* eslint-disable @typescript-eslint/no-var-requires */
const COLORS = require("../src/shared/const/colors.const.ts")

const fs = require("fs")
const path = require("path")

// Определите путь к файлу конфигурации
const configPath = path.resolve(__dirname, "../tailwind.config.ts")

function findEndOfObject(data, startIndex) {
  let openBrackets = 0
  let endObjectIndex = -1

  for (let i = startIndex; i < data.length; i++) {
    if (data[i] === "{") {
      openBrackets++
    } else if (data[i] === "}") {
      openBrackets--
      if (openBrackets === 0) {
        endObjectIndex = i
        break
      }
    }
  }

  return endObjectIndex
}

fs.readFile(configPath, "utf8", (err, data) => {
  if (err) {
    console.error("Ошибка чтения tailwind.config.js:", err)
    return
  }

  // Находим начало объекта colors
  const startColorsIndex = data.indexOf("colors:")

  if (startColorsIndex === -1) {
    console.error("Не удалось найти объект colors в конфигурации Tailwind.")
    return
  }

  // Определяем индекс конца объекта colors
  const endColorsIndex = findEndOfObject(data, startColorsIndex)

  if (endColorsIndex === -1) {
    console.error(
      "Не удалось найти завершение объекта colors в конфигурации Tailwind.",
    )
    return
  }

  const newColorsString = JSON.stringify(COLORS, null, 2).replace(
    /"([^"]+)":/g,
    "$1:",
  )

  const newColorsStringNew = JSON.stringify(
    `colors: ${newColorsString}`,
    null,
    2,
  ).replace(/"([^"]+)":/g, "$1:")

  // Формируем новую строку с пустым объектом colors
  const newConfig = `${data.slice(0, startColorsIndex)} ${JSON.parse(newColorsStringNew)} ${data.slice(endColorsIndex + 1)}`

  // Записываем обновленные данные обратно в файл
  fs.writeFile(configPath, newConfig, "utf8", (err) => {
    if (err) {
      console.error("Ошибка записи в tailwind.config.js:", err)
      return
    }
    console.log("Успешно обновлен tailwind.config.js")
  })
})
