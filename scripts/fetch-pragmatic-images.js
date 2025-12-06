import axios from "axios";
import { load } from "cheerio";
import fs from "fs-extra";
import slugify from "slugify";

const OUTPUT_DIR = "./public/common-slots";

// Ensure dir exists
await fs.ensureDir(OUTPUT_DIR);

async function fetchImageForGame(gameName) {
  const searchSlug = slugify(gameName, { lower: true });
  const url = `https://www.pragmaticplay.com/en/games/${searchSlug}/`;

  try {
    console.log("Fetching:", url);

    const { data } = await axios.get(url);
    const $ = load(data);

    // Pragmatic always stores main thumbnail in og:image meta
    const imageUrl = $('meta[property="og:image"]').attr("content");

    if (!imageUrl) {
      console.log("❌ No image found for:", gameName);
      return null;
    }

    const fileName =
      slugify(gameName, { lower: false, strict: true }).replace(/-/g, " ") +
      "_339x180.png";

    const finalPath = `${OUTPUT_DIR}/${fileName}`;

    const img = await axios.get(imageUrl, { responseType: "arraybuffer" });
    await fs.writeFile(finalPath, img.data);
    console.log("✅ Saved:", finalPath);

    return finalPath;
  } catch (err) {
    console.log("❌ Failed:", gameName, err.message);
    return null;
  }
}

// Example test list (later replace with SLOTS)
const pragmaticGames = [
  "Gates of Olympus",
  "Sugar Rush",
  "Sweet Bonanza",
  "Big Bass Bonanza",
];

console.log("🎰 Starting image scraping...");

for (const name of pragmaticGames) {
  await fetchImageForGame(name);
}

console.log("🎉 Done!");
