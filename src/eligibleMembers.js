const ethers = require('ethers')
const fspath = require('fspath')
const parse = require('csv-parse/lib/sync')

let csv = new fspath('data/member-at-levels-greater-than-one.csv')
const data = parse(csv.read())

const result = []

for (let i = 1; i < data.length; i++) {
  let d = data[i]
  if (d[2] !== 'ELIGIBLE') {
    continue
  }
  let level = parseInt(d[1])
  for (let j=0;j< level; j++) {
    result.push({
      name: d[0],
      image: ethers.utils.id(d[0] + j)
    })
  }
}

(new fspath('data/eligible-members-by-level.json')).write(JSON.stringify(result, null, 2))
