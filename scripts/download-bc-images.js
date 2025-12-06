// scripts/download-bc-images.js
// Prebere scripts/bc-slots.json in vse slike shrani v public/common-slots

const fs = require("fs");
const path = require("path");
const axios = require("axios");
const slugify = require("slugify");

const ROOT = process.cwd();
const INPUT = path.join(ROOT, "scripts", "bc-slots.json");
const OUT_DIR = path.join(ROOT, "public", "common-slots");

// 1) Preveri/ustvari mapo
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

// 2) Preberi JSON
const raw = fs.readFileSync(INPUT, "utf8");
const bcSlots = JSON.parse(raw);

console.log(`🎰 Najdenih slotov v JSON: ${bcSlots.length}`);

async function downloadAll() {
  let count = 0;

  for (let i = 0; i < bcSlots.length; i++) {
    const { name, src } = bcSlots[i] || {};
    if (!name || !src) {
      console.log(`⏭️  Skipping invalid entry at index ${i}`);
      continue;
    }

    // Ustvari lepo ime datoteke na osnovi imena slota
    const baseSlug = slugify(name, {
      lower: false, // ohrani velike začetnice
      strict: true, // odstrani čudne znake
      trim: true,
    });

    const fileName = `${baseSlug}_339x180.png`;
    const filePath = path.join(OUT_DIR, fileName);

    // Preskoči, če slika že obstaja
    if (fs.existsSync(filePath)) {
      console.log(`⏭️  (${i + 1}/${bcSlots.length}) obstaja, skip: ${fileName}`);
      continue;
    }

    try {
      console.log(`⬇️  (${i + 1}/${bcSlots.length}) ${name}`);
      const response = await axios.get(src, { responseType: "stream" });

      await new Promise((resolve, reject) => {
        const writer = fs.createWriteStream(filePath);
        response.data.pipe(writer);
        writer.on("finish", resolve);
        writer.on("error", reject);
      });

      console.log(`✅  Saved: ${fileName}`);
      count++;
    } catch (err) {
      console.error(`❌  Failed: ${name} (${src})`);
      console.error("    Reason:", err.message);
    }
  }

  console.log(`🎉 Končano. Downloadanih novih slik: ${count}`);
}

downloadAll().catch((e) => {
  console.error("💥 Script error:", e);
  process.exit(1);
});
