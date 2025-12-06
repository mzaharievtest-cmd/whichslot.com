// scripts/generate-slots-from-bc.js
// Iz scripts/bc-slots.json generira app/data/slots.js
// Shape: { id, name, image, affiliate }

const fs = require("fs");
const path = require("path");
const slugify = require("slugify");

const ROOT = process.cwd();
const INPUT = path.join(ROOT, "scripts", "bc-slots.json");
const OUTPUT = path.join(ROOT, "app", "data", "slots.js");

// Tvoj affiliate link (lahko zamenjaš če bo drugačen)
const AFF = "https://bzstarz1.com/boe5tub8a";

// 1) Preberi JSON
const raw = fs.readFileSync(INPUT, "utf8");
const bcSlots = JSON.parse(raw);

console.log(`🎰 Generating SLOTS from ${bcSlots.length} BC entries...`);

// 2) Mapiraj v naš shape
const slots = bcSlots.map((item, index) => {
  const name = item.name?.trim();
  if (!name) {
    throw new Error(`Empty name at index ${index}`);
  }

  // MORDA: mora se ujemat z imeni datotek iz download skripte
  const baseSlug = slugify(name, {
    lower: false,   // The Dog House Megaways
    strict: true,   // pobriše čudne znake
    trim: true,
  });

  const image = `/common-slots/${baseSlug}_339x180.png`;

  return {
    id: index + 1,
    name,
    image,
    affiliate: AFF,
  };
});

// 3) Zgradi JS file content
const fileContent = `// app/data/slots.js
// Auto-generated from scripts/generate-slots-from-bc.js
// Shape: { id, name, image, affiliate }

export const AFF = "${AFF}";

export const SLOTS = ${JSON.stringify(slots, null, 2)};
`;

fs.writeFileSync(OUTPUT, fileContent, "utf8");
console.log(`✅ Written ${slots.length} slots to ${OUTPUT}`);
