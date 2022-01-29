const Metashu = require('@ndujalabs/metashu')
const path = require('path')
const fspath = require('fspath')
const input = path.resolve(__dirname, '../data/eligible-members-by-level.json')
const output = path.resolve(__dirname, '../data/shuffled-data.json')

const fs = require('fs-extra')
fs.ensureDirSync(path.resolve(__dirname, '../output'))

async function main() {

  const options = {
    input,
    output,
    salt: require('../data/snapshot.json').hash
  }

  const metashu = new Metashu(options)
  await metashu.shuffle()

  const winners = []
  const frontRunners = []
  let result = winners
  let taken = {}
  const shuffleData = require('../data/shuffled-data.json')
  for (let item of shuffleData) {
    if (!taken[item.name]) {
      result.push(item.name)
      if (result.length === 28) {
        result = frontRunners
      }
      if (frontRunners.length === 28) {
        break
      }
      taken[item.name] = true
    }
  }

  await fs.writeFile(path.resolve(__dirname, '../output/winners.txt'), 'Lottery winners:\n\n' + winners.join('\n'))
  await fs.writeFile(path.resolve(__dirname, '../output/front-runners.txt'), 'Front runners:\n\n' + frontRunners.join('\n'))

}

main()
