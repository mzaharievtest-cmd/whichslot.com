// scripts/generate-slots-from-bc.js
// Iz scripts/bc-slots.json naredi app/data/slots.js (SLOTS z image potmi)

const fs = require("fs");
const path = require("path");
const slugify = require("slugify");

const ROOT = process.cwd();
const INPUT = path.join(ROOT, "scripts", "bc-slots.json");
const OUT = path.join(ROOT, "app", "data", "slots.js");

// Če imaš drugo affiliate povezavo, zamenjaj tu:
const AFF = "https://bzstarz1.com/boe5tub8a";

const raw = fs.readFileSync(INPUT, "utf8");
const bcSlots = JSON.parse(raw);

console.log(`🎰 Generiram SLOTS iz ${bcSlots.length} BC slotov...`);

const lines = [];

lines.push("// AUTO-GENERATED from scripts/generate-slots-from-bc.js");
lines.push("// Ne urejaj ročno – spremeni bc-slots.json ali skripto.");
lines.push("");
lines.push(`export const AFF = ${JSON.stringify(AFF)};`);
lines.push("");
lines.push("export const SLOTS = [");

bcSlots.forEach((slot, index) => {
  const name = slot.name;
  if (!name) return;

  // Enak pattern kot pri downloadu slik:
  const slug = slugify(name, {
    lower: false,  // ohrani velike začetnice
    strict: true,  // odstranimo čudne znake
    trim: true,
  });

  const imagePath = `/common-slots/${slug}_339x180.png`;

  lines.push("  {");
  lines.push(`    id: ${index + 1},`);
  lines.push(`    name: ${JSON.stringify(name)},`);
  lines.push(`    provider: "BC.Game",`);
  lines.push("    tags: [],");
  lines.push("    affiliate: { default: AFF },");
  lines.push(`    image: ${JSON.stringify(imagePath)},`);
  lines.push("  },");
});

lines.push("];");
lines.push("");

fs.writeFileSync(OUT, lines.join("\n"), "utf8");
console.log(`✅ Zapisal ${OUT} z ${bcSlots.length} sloti.`);
