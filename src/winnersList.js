const Metashu = require('@ndujalabs/metashu')
const path = require('path')
const fspath = require('fspath')
const input = path.resolve(__dirname, '../data/eligible-members-by-level.json')
const output = path.resolve(__dirname, '../data/shuffled-data.json')

const fs = require('fs-extra')
fs.ensureDirSync(path.resolve(__dirname, '../output'))

async function main () {

  const options = {
    input,
    output,
    salt: require('../data/snapshot.json').hash
  }

  const metashu = new Metashu(options)
  await metashu.shuffle()

  let result = []
  const shuffleData = require('../data/shuffled-data.json')
  for (let item of shuffleData) {
    if (!~result.indexOf(item.name)) {
      result.push(item.name)
    }
    if (result.length === 28) {
      break
    }
  }


  (new fspath('output/winners.txt')).write('Lottery winners:\n\n' + result.join('\n'))

}

main()
