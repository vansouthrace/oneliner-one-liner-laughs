// oneliner-one-liner-laughs: a make.fun one-liner entry for "One-Liner
// Laughs". The program writes the entry line to /output/entry.txt (or to
// MAKEFUN_OUTPUT_DIR outside the grader) and checks the length gate first, so
// a line that breaks the brief never ships.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  "My bank sent me a fraud alert for a $4 coffee. Apparently even my bank doesn't believe I can afford joy.";
const MAX_CHARS = 200;

if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-${MAX_CHARS}`);
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error('entry must be a single line');
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY);
console.log(`wrote ${ENTRY.length} characters to ${join(out, 'entry.txt')}`);
