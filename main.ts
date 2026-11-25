import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one dad joke — instant double-turn pun, eleven deadpan words,
// punchline on the final syllable.
const LINE = "I don't trust stairs. They're always up to something.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const artifact = LINE.trimEnd() + "\n";
writeFileSync(outDir + "/entry.txt", artifact);
console.log(`entry written: ${LINE.length} characters`);
