const fs = require('fs')
const path = require('path')

const chalk = require('chalk')
const { program } = require('commander')

program
  .option('--lang, --lang <type>', 'en')
  .option('--path, --path <type>', './src/i18n/locales')
  .option('--new-translation, --new-translation <type>', 'newTranslation')

program.parse(process.argv)

const options = program.opts()
const langArgs = options.lang.split(',')
const localePath = options.path
const newTranslations = options.newTranslation

const deleteKeyses = {}
const addedKeyses = {}

// Delete key in obj1
function deleteKeys(obj1, obj2, isLogs) {
  const result = []
  let updateObj = obj1
  const secondObjKeys = Object.keys(obj2) || []

  // Find unnecessary key for delete
  Object.keys(obj1 || {}).forEach((key) => {
    if (!secondObjKeys.includes(key)) {
      result.push(key)
      deleteKeyses[key] = obj1[key]
    }
  })

  if (result.length) {
    if (isLogs) console.log(chalk.bgRed('Deleted keys:'))

    result.forEach((key) => {
      const { [key]: item, ...rest } = obj1

      if (isLogs) console.log(`${chalk.red(key)}: ${chalk.red(obj1[key])}`)

      updateObj = rest
      obj1 = rest
    })
  }

  return updateObj
}

function addNewKeys(obj1, obj2) {
  let result = {}
  const newData = {}
  const firstObjKeys = Object.keys(obj1) || []

  Object.keys(obj2 || {}).forEach((key) => {
    if (!firstObjKeys.includes(key)) {
      newData[key] = obj2[key]
      addedKeyses[key] = obj2[key]
    }
  })

  result = { ...obj1, ...newData }

  return result
}

function updateLocales(languages) {
  languages.map((lang) => {
    // Get static locale
    const locale = require(path.resolve(`${localePath}/${lang}/${lang}.json`))

    // Get extract locale
    const tempoLocale = require(path.resolve(
      `${localePath}/defaultMessages.json`
    ))

    // Get clietn locale
    const client = require(path.resolve(
      `${localePath}/${lang}/${newTranslations}.json`
    ))

    const updateLocal = deleteKeys(locale, tempoLocale)
    const currentLocal = addNewKeys(updateLocal, tempoLocale)
    const updateLocalClient = deleteKeys(client, currentLocal, true)

    const unordered = {
      ...currentLocal,
      ...updateLocalClient
    }

    const ordered = Object.keys(unordered)
      .sort()
      .reduce((obj, key) => {
        obj[key] = unordered[key]
        return obj
      }, {})

    // Merge update json language
    fs.writeFile(
      `${localePath}/${lang}/${lang}.json`,
      JSON.stringify(ordered, null, 2),
      function (err) {
        if (err) console.log(err)
      }
    )

    // Create diff info
    fs.writeFile(
      `${localePath}/${lang}/diff.json`,
      JSON.stringify(
        {
          deleteKeyses,
          addedKeyses
        },
        null,
        2
      ),
      function (err) {
        if (err) console.log(err)
      }
    )
  })
}

// Call for the necessary translations
updateLocales(langArgs)
