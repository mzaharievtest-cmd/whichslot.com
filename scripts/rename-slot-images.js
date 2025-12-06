import fs from "fs";
import path from "path";
import { SLOTS } from "../app/data/slots.js";

// map slot name -> expected filename
const normalizeSlotName = (name) =>
  name
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    + "_339x180.png";

const sourceDir = path.join(process.cwd(), "public/common-slots");

const files = fs.readdirSync(sourceDir);

let renamed = 0;
let missing = [];

for (const slot of SLOTS) {
  const expected = normalizeSlotName(slot.name);

  // poiščemo najbližje ime datoteke
  const base = slot.name
    .replace(/[^a-z0-9]+/gi, " ")
    .trim()
    .split(" ")
    .filter(Boolean);

  const match = files.find((f) => {
    const lower = f.toLowerCase();
    return base.every((word) => lower.includes(word.toLowerCase()));
  });

  if (match) {
    const src = path.join(sourceDir, match);
    const dest = path.join(sourceDir, expected);

    // skip if file already correct name
    if (match === expected) continue;

    fs.renameSync(src, dest);
    console.log(`✔ Renamed: ${match} → ${expected}`);
    renamed++;
  } else {
    console.log(`❌ No image found for: ${slot.name}`);
    missing.push(slot.name);
  }
}

console.log("\n---- DONE ----");
console.log(`Renamed: ${renamed}`);
console.log(`Missing images: ${missing.length}`);
if (missing.length) console.log(missing);
