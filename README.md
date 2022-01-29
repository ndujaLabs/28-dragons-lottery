# Everdragons2 DAO Eggs lottery
A repo to extract the winners and validate the results

## Instructions

The list of all the members with level >= 2 is in `/data/member-at-levels-greater-than-one.csv`

The array with all the names is in `/data/eligible-members-by-level.json`. Since any name appears as many times as its level, to make any element different, a pseudo image with a hash is added to the element. So, for example, you have something like
``` 
 ...
  {
    "name": "Anh",
    "image": "0x0d3a8cd4d221bdba00a94f18e1b2256070450ebb2b15658dc545a96cddcd54bb"
  },
  {
    "name": "Anh",
    "image": "0xe8aa5b905607584eb4fecfff67988af8595d7f79927e99ccce2d8dab8de7b794"
  },
 ...
```

If you like, you can regenerate the file running 
```
node src/getEligibleArray.js
```

The data of block number `tbd` on Ethereum main net is `tbd`. It is in the `/data/snapshot.json` file

To generate the final list of winners run
```
node src/winnersList.js
```
It will produce a file `/output/winners.txt` with the 28 winners.

**(Note, as soon as we have the final hash this README and block.json will be edited)**

## Copyright

2021 [Francesco Sullo](https://francesco.sullo.co)

## License
MIT
