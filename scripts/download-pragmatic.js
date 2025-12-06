// scripts/download-pragmatic.js

import fs from "fs";
import path from "path";
import https from "https";

const inputFile = "./slot-images.txt";  
const outputDir = "./public/common-slots";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const urls = fs
  .readFileSync(inputFile, "utf-8")
  .split("\n")
  .map((u) => u.trim())
  .filter((u) => u.length > 0);

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          console.log("❌ Failed:", url);
          return resolve();
        }
        response.pipe(file);
        file.on("finish", () => {
          file.close(resolve);
        });
      })
      .on("error", (err) => {
        console.log("❌ Error:", url);
        resolve();
      });
  });
}

async function run() {
  console.log(`Downloading ${urls.length} images...\n`);

  for (let url of urls) {
    const filename = path.basename(url.split("?")[0]); // safety
    const dest = path.join(outputDir, filename);
    console.log("⬇️  ", filename);
    await download(url, dest);
  }

  console.log("\n✅ Done! All images saved in /public/common-slots");
}

run();
