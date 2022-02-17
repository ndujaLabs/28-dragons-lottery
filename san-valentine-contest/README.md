# San Valentine contest

With reference to [this tweet](https://twitter.com/everdragons2/status/1493351136543141888)

<img src="https://github.com/ndujaLabs/28-dragons-lottery/blob/main/assets/sanValentineTweet.jpg" alt="tweet"/>

The participants are wallet who minted tokens starting for transaction

[0xc8d22887c64589d0055f25e2006c5bf151ff0c55b591cb777375c9a5382314f1](https://polygonscan.com/tx/0xc8d22887c64589d0055f25e2006c5bf151ff0c55b591cb777375c9a5382314f1)

to transaction

[0xccc4cc84de8f834a72b9ca9d36868fe4143c593cb40b11cc8909616636613953](https://polygonscan.com/tx/0xccc4cc84de8f834a72b9ca9d36868fe4143c593cb40b11cc8909616636613953)

The token IDs minted in this period goes from 477 to 487.

In the file 'tokens.json' there is an array of the IDs.

We will select the hash of the block number [25065000](https://polygonscan.com/block/25065000) on the Polygon network, when it will happen and use it to shuffle tokens.json with the command

```
node san-valentine-contest/sanValentineWinners
```
after putting the data of the block in `/san-valentine-contest/snapshot.json`.

# Update with the results (coming soon)




