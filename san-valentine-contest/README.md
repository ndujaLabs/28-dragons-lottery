# San Valentine contest

With reference to [this tweet](https://twitter.com/everdragons2/status/1493351136543141888)

<img src="https://github.com/ndujaLabs/28-dragons-lottery/blob/main/assets/sanValentineTweet.jpg" alt="tweet"/>

The participants are wallet who minted tokens starting for transaction

[0xc8d22887c64589d0055f25e2006c5bf151ff0c55b591cb777375c9a5382314f1](https://polygonscan.com/tx/0xc8d22887c64589d0055f25e2006c5bf151ff0c55b591cb777375c9a5382314f1)

to transaction

[0x86deb81a209b897d21f178366deeb834f6e07cfdb2095a4794e4473cf38ff0d5](https://polygonscan.com/tx/0x86deb81a209b897d21f178366deeb834f6e07cfdb2095a4794e4473cf38ff0d5)

The token IDs minted in this period goes from 477 to 490.

In the file 'tokens.json' there is an array of the IDs.

We will select the hash of the block number [25065000](https://polygonscan.com/block/25065000) on the Polygon network, when it will happen and use it to shuffle tokens.json with the command

```
node san-valentine-contest/sanValentineWinners
```
after putting the data of the block in `/san-valentine-contest/snapshot.json`.

# Update with the results

The has of block is

0xea64b0584af16e03a9526074901a7802115583c8fbea6170452087fcb4e49842

And the winners are the onwer of tokens:

484 - 0xfe13178f8ea0c37de96864acda38ed14d249d344

481 - 0x3bd5e2790766defce5ae59a43ba2ae617aa3c1a0 

478 - 0xf5324be5db41ba9e464e14f3940eccde98993682

Congratulations!





