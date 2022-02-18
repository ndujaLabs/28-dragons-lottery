const Metashu = require('@ndujalabs/metashu')
const path = require('path')
const fspath = require('fspath')
const input = path.resolve(__dirname, 'tokens.json')
const output = path.resolve(__dirname, 'shuffled-data.json')

const fs = require('fs-extra')

async function main() {

  const options = {
    input,
    output,
    salt: require('./snapshot.json').hash
  }

  const metashu = new Metashu(options)
  await metashu.shuffle()
  let result = []
  const shuffleData = require('./shuffled-data.json')
  console.log(shuffleData)
  let i = 0
  for (let item of shuffleData) {
      result.push(item)
      if (++i === 3) {
        break
      }
  }

  await fs.writeFile(path.resolve(__dirname, 'san-valentine-winners.txt'), 'San Valentine winners:\n\n' + result.join('\n'))

}

main()
