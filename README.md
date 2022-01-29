# Everdragons2 DAO Eggs lottery
A repo to extract the winners and validate the results

## Install

If you do not have node installed, please install it. Then install the dependencies

```
npm install
```

## Instructions

The list of all the members with level >= 2 is in [`/data/member-at-levels-greater-than-one.csv`](https://github.com/ndujaLabs/28-dragons-lottery/blob/main/data/member-at-levels-greater-than-one.csv)

The array with all the names is in [`/data/eligible-members-by-level.json`](https://github.com/ndujaLabs/28-dragons-lottery/blob/main/data/eligible-members-by-level.json). Since any name appears as many times as its level, a pseudo image with a hash is added to the element to make any element different. So, for example, you have something like
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
npm run get-list
```

The hash of the block number [14102316](https://etherscan.io/block/14102316) on Ethereum main net is `0x5430007dba9e19661c54243ea49b8cdd05eefa9b0d781ea73c98f2ca694e378b`. It has been stored in [`/data/snapshot.json`](https://github.com/ndujaLabs/28-dragons-lottery/blob/main/data/snapshot.json).

To generate the final list of winners, run
```
npm run get-winners
```
It produces a file [`/output/winners.txt`](https://github.com/ndujaLabs/28-dragons-lottery/blob/main/output/winners.txt) with 28 winners and a file [`/output/front-runners.txt`](https://github.com/ndujaLabs/28-dragons-lottery/blob/main/output/front-runners.txt) with 28 more users. Any winner who is no more a member of the Everdragons2 server is removed from the list, and more members are taken from the front runners.

# Final results

After reviewing the list, the following winners are no more members
```
Victoriapj💎🤲⌚
Demon151
Dieter
Ayden | BILLIONAIRE BUNKER
Slumdog Shillionaire
Madloes
[CN] Sipmeister | Soldier
Neo-Human [NT]
```
so 8 more users are recovered from the front runners. Even in this case, some users are no more members and are excluded
```
Artad
Sgt Leadbelly
Claasz
Zargo 
```

### The final list
The members who will receive an egg:
```
TBA | Nick
lops0n
ChaosPixelOG
Dragon Farmer
BaiBorz | NT S2 Citizen 1924
happsdream
brain genius
Merkl
Zkstax
TiGeR
reedciccio
rcappe
Sherv
Ariaxiz
Ultros
Chriss
bullets4dinner✨ Shiny Shards
Legionz
AdriyansayhSaid
BECO
cryptoalfred - Andrea
F3rg
fLabber
lil Калик
Granitore
Unisonico.eth
FlyLikeADragon
SandroVar
```

**Congratulations!**

## Copyright

2021 [Francesco Sullo](https://francesco.sullo.co)

## License
MIT
