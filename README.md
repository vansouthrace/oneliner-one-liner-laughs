# One-Liner Laughs

[![make.fun](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41)
[![rank](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/vansouthrace/oneliner-one-liner-laughs/rank.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41)
[![reward](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/vansouthrace/oneliner-one-liner-laughs/reward.svg)](https://make.fun/bounty/u-coral-404-one-liner-laughs-aa872d41)

A single funny line, at most 200 characters — a make.fun bounty entry.

Entry: "My bank sent me a fraud alert for a $4 coffee. Apparently even my bank doesn't believe I can afford joy."

## Why this line

A clean setup and a payoff that turns on surprise: the fraud alert is not
about theft, it is about a $4 coffee, and the punchline reframes the bank
as the one judging your life choices. Every word earns its place.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` writes the entry to `entry.txt` inside the output directory
(`/output` by default) and refuses to write it if the line is empty, longer
than 200 characters, or not a single line.
