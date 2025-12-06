// scripts/generate-slots-from-bc.js

const fs = require("fs");
const path = require("path");
const slugify = require("slugify");

// paths
const ROOT = process.cwd();
const BC_FILE = path.join(ROOT, "public", "scripts", "bc-slots.js");
const IMAGES_DIR = path.join(ROOT, "public", "common-slots");
const OUT_FILE = path.join(ROOT, "app", "data", "slots.js");

// load bc slots JSON
const bcRaw = fs.readFileSync(BC_FILE, "utf8");

// because bc-slots.js is NOT pure JSON, extract array using eval safely:
const bcSlots = eval(bcRaw); // bc-slots.js exports array ONLY

console.log(`📦 Loaded ${bcSlots.length} slots from bc-slots.js`);

function findImageForName(name) {
  // convert slot name → file slug
  const baseSlug = slugify(name, {
    lower: false,
    strict: true,
    trim: true,
  });

  const expected = `${baseSlug}_339x180.png`;
  const fullPath = path.join(IMAGES_DIR, expected);

  if (fs.existsSync(fullPath)) {
    return `/common-slots/${expected}`;
  }

  return null; // image missing
}

const finalSlots = [];

bcSlots.forEach((slot, index) => {
  const imagePath = findImageForName(slot.name);

  if (!imagePath) {
    console.log(`⚠️  No image found for: ${slot.name}`);
    return; // skip items without image
  }

  finalSlots.push({
    id: index + 1,
    name: slot.name,
    image: imagePath,
  });
});

console.log(`✅ Final slot count: ${finalSlots.length}`);

const output = `export const SLOTS = ${JSON.stringify(finalSlots, null, 2)};\n`;

fs.writeFileSync(OUT_FILE, output, "utf8");

console.log(`🎉 Finished! Updated: app/data/slots.js`);
