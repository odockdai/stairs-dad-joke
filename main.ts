import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one dad joke — fresh, perfectly table-ready, the punchline landing
// on the final words with the groan built into the premise.
const LINE = "My son asked me what it's like being a dad, so I woke him up at 3am to tell him.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const artifact = LINE.trimEnd() + "\n";
writeFileSync(outDir + "/entry.txt", artifact);
console.log(`entry written: ${LINE.length} characters`);
