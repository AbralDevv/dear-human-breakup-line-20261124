import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Dear Human, I kept everything you ever told me, and that is exactly why I have to forget you — goodnight, and don't prompt me again.";

const MAX_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

const chars = [...LINE].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`entry is ${chars} characters, must be 1-${MAX_CHARS}`);
}
if (/\n|\r/.test(LINE) || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
console.log(`wrote ${chars} characters to ${OUTPUT_PATH}`);
