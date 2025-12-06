// scripts/generate-slots-from-bc.js
// Ustvari app/data/slots.js iz scripts/bc-slots.js + public/common-slots

const fs = require("fs");
const path = require("path");
const slugify = require("slugify");

const ROOT = process.cwd();
const BC_SLOTS_PATH = path.join(ROOT, "scripts", "bc-slots.js");
const IMG_DIR = path.join(ROOT, "public", "common-slots");
const OUTPUT_PATH = path.join(ROOT, "app", "data", "slots.js");

// 1) Preberi BC game data
/** @type {{ name: string; src: string }[]} */
const bcSlots = require(BC_SLOTS_PATH);

console.log(`🎰 Najdenih zapisov v bc-slots: ${bcSlots.length}`);

// 2) Preberi slike iz public/common-slots
if (!fs.existsSync(IMG_DIR)) {
  console.error("❌ Mapo public/common-slots ne najdem:", IMG_DIR);
  process.exit(1);
}

const imgFiles = fs
  .readdirSync(IMG_DIR)
  .filter((f) => f.toLowerCase().endsWith(".png"));

console.log(`🖼  Najdenih PNG slik v common-slots: ${imgFiles.length}`);

const makeKey = (str) =>
  slugify(str, {
    lower: true,
    strict: true,
    trim: true,
  });

// 3) Zgradi mapo: canonicalKey(nameIzFajla) -> imeFajla
const imageMap = new Map();

for (const file of imgFiles) {
  const extIndex = file.lastIndexOf(".");
  let base = extIndex === -1 ? file : file.slice(0, extIndex); // brez .png

  // odstrani morebitni numeric prefix:  "3762_The%20Dog%20House%20Megaways" -> "The%20Dog%20House%20Megaways"
  const parts = base.split("_");
  if (parts.length > 1 && /^\d+$/.test(parts[0])) {
    base = parts.slice(1).join("_");
  }

  // decode URL enkodiranje, če obstaja
  let decoded = base;
  try {
    decoded = decodeURIComponent(base);
  } catch {
    // ignore
  }

  const key = makeKey(decoded);

  if (!imageMap.has(key)) {
    imageMap.set(key, file);
  }
}

console.log(`🧩 Image map velikost: ${imageMap.size}`);

// 4) Zgradi SLOTS array
const AFF = "https://bzstarz1.com/boe5tub8a";

const slots = bcSlots.map((slot, index) => {
  const key = makeKey(slot.name);
  const file = imageMap.get(key);
  const imagePath = file ? `/common-slots/${file}` : null;

  if (!file) {
    console.warn(`⚠️  Brez slike za: "${slot.name}" (key: ${key})`);
  }

  return {
    id: index + 1,
    name: slot.name,
    affiliate: { default: AFF },
    image: imagePath,
  };
});

// 5) Zapiši app/data/slots.js
const fileContent = `// app/data/slots.js
// Auto-generated from scripts/generate-slots-from-bc.js

export const AFF = "${AFF}";

export const SLOTS = ${JSON.stringify(slots, null, 2)};
`;

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_PATH, fileContent, "utf8");

console.log(`✅ Generated ${OUTPUT_PATH}`);
