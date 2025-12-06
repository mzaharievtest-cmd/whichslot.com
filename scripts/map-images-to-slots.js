// scripts/map-images-to-slots.js

const fs = require("fs");
const path = require("path");
const slugify = require("slugify");

const ROOT = process.cwd();
const SLOTS_FILE = path.join(ROOT, "scripts", "bc-slots.js");
const IMAGES_DIR = path.join(ROOT, "public", "common-slots");

// 1) Load bc-slots.js
const bcRaw = fs.readFileSync(SLOTS_FILE, "utf8");

// Convert bc-slots.js → JSON
const bcSlots = eval(bcRaw); // because bc-slots.js is not JSON, but JS

console.log("📦 Loaded slots:", bcSlots.length);

// 2) Load image filenames
const imageFiles = fs.readdirSync(IMAGES_DIR);

console.log("🖼️ Found images:", imageFiles.length);

// 3) Map each slot to image
const result = bcSlots.map(slot => {
    const name = slot.name;

    // create slug filename pattern
    const slug = slugify(name, {
        lower: false,
        strict: true,
        trim: true,
    });

    // Expected filename format
    const expectedPrefix = slug;

    // Find image with matching prefix
    const found = imageFiles.find(f => f.startsWith(expectedPrefix));

    if (!found) {
        console.log("⚠️ No image for:", name);
        return {
            name,
            image: ""
        };
    }

    return {
        name,
        image: `/common-slots/${found}`
    };
});

// 4) Write output file
const OUTPUT = path.join(ROOT, "scripts", "slot-image-map.json");
fs.writeFileSync(OUTPUT, JSON.stringify(result, null, 2));

console.log("✅ DONE — saved to:", OUTPUT);
