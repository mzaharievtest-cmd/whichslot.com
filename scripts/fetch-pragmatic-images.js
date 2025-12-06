import axios from "axios";
import cheerio from "cheerio";
import fs from "fs-extra";
import slugify from "slugify";

const OUTPUT_DIR = "./public/common-slots";
const PRAGMATIC_URL = "https://www.pragmaticplay.com/en/games/slots/";

async function run() {
  console.log("🔍 Fetching Pragmatic slot images...");

  await fs.ensureDir(OUTPUT_DIR);

  const { data: html } = await axios.get(PRAGMATIC_URL);
  const $ = cheerio.load(html);

  const images = [];

  $("img.game__image").each((i, el) => {
    const url = $(el).attr("src") || $(el).attr("data-lazy-src");
    const title = $(el).attr("alt");

    if (url && title) {
      images.push({ title, url });
    }
  });

  console.log(`📦 Found ${images.length} images.`);

  for (const img of images) {
    const cleanName = slugify(img.title, { lower: true, strict: true });
    const filename = `${cleanName}_339x180.png`;
    const filepath = `${OUTPUT_DIR}/${filename}`;

    try {
      const response = await axios.get(img.url, { responseType: "arraybuffer" });
      await fs.writeFile(filepath, response.data);
      console.log(`✅ Saved: ${filename}`);
    } catch (err) {
      console.log(`❌ FAILED: ${img.url}`);
    }
  }

  console.log("🎉 Done.");
}

run();
