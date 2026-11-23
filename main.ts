// SPDX-License-Identifier: MIT
// Dad Joke Showdown — entry program.
// Writes one dad joke (at most 200 characters) to /output/entry.txt,
// where the make.fun grader reads it. No network, no secrets, no env.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my kids I wanted to be a grape farmer. They said, 'Dad, you're already a raisin.'";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// and not only white space.
const text = JOKE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

// Read it back: the entry is only real if the bytes on disk match.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== text) {
  throw new Error("verification failed: /output/entry.txt does not match the joke");
}
console.log(`Wrote /output/entry.txt (${text.length} characters)`);
