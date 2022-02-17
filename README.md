# Everdragons2 DAO Eggs lottery
A repo to extract the winners and validate the results

## Install

If you do not have node installed, please install it. Then install the dependencies

```
npm install
```

## The process

The list of all the members with level >= 2 is in [`/data/member-at-levels-greater-than-one.csv`](https://github.com/ndujaLabs/28-dragons-lottery/blob/main/data/member-at-levels-greater-than-one.csv)

Running
```
npm run get-list
```
you get the array of all the eligibles in [`/data/eligible-members-by-level.json`](https://github.com/ndujaLabs/28-dragons-lottery/blob/main/data/eligible-members-by-level.json). Since any name appears as many times as its level, a pseudo image with a hash is added to the element to make any element different. So, for example, you have something like
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

During the AMA, at 10:38 am PST, we took the latest block on Ethereum main net, block number [14102316](https://etherscan.io/block/14102316).

Its hash — `0x5430007dba9e19661c54243ea49b8cdd05eefa9b0d781ea73c98f2ca694e378b` — has been stored in [`/data/snapshot.json`](https://github.com/ndujaLabs/28-dragons-lottery/blob/main/data/snapshot.json) to be used as salt to shuffle the array of the eligibles.

Running
```
npm run get-winners
```
we produce the file [`/output/winners.txt`](https://github.com/ndujaLabs/28-dragons-lottery/blob/main/output/winners.txt) with 28 winners and the file [`/output/front-runners.txt`](https://github.com/ndujaLabs/28-dragons-lottery/blob/main/output/front-runners.txt) with the remaining users. Since any winner who is no more a member of the Everdragons2 server is removed from the list, more members are taken from the front-runners.

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
so 8 more users are recovered from the front-runners. Even in this case, the following users were no more members and have been excluded
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

### UPDATE Feb 2, 2022

To get their tokens, the winners had to claim it by Feb 2, 2022 at 11 am PST.

The following 9 members out of the 28 winners did not claim by the deadline, and have lost their spot:

```
lops0n
happsdream
Merkl
[GD] GucciLo
TiGeR
ariaxiz
Legionz
AdriyansayhSaid
SandroVar
```

They are replaced with the next in line in the front-runners list. Excluding users who are no more members of the Everdragons2  Discord server, the 9 winners are:

```
gabakimu
[PACK]Quiddon
ryan
Ein
Ⓐⓙⓐⓨ CryptozEuphoria
boredmomma
[LaTR] 12tones | Executive
! [LATR] Serphina
1Proof_fan
```
**Congratulations!**

Again, to be confirmed as a winner, they will need to claim their token, sending their wallet in the support channel on the Everdragons2 Discord server, by Feb 4, 2022 at 11 am PST.

### Update Feb 4, 2022

4 winners of the lottery, did not claim by the deadline. Here the members removed now that have lost their spot:
```
gabakimu
ryan
Ⓐⓙⓐⓨ CryptozEuphoria
! [LATR] Serphina
```

The next in line from the front runners list, and so the new 4 winners 🎉  are:
```
[GD] GrΞ2nDragon
AMG
[PACK] Salvatore M.
Anh
```
Congrats to these 4 new winners 🥳

To receive an egg the winners must confirm their wallets by Feb 6, 2022 at 11 am PST.

## Copyright

2022 [Nduja Labs LLC](https://ndujalabs.com)

## License
MIT
