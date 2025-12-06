#!/usr/bin/env node
import fs from "fs";
import path from "path";
import axios from "axios";
import { SLOTS } from "../app/data/slots.js";

const OUT = path.join(process.cwd(), "public/common-slots");

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const years = ["2023", "2024", "2025"];
const months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
const suffixes = ["", "_EN", "_NB", "_Scatter", "_WR-2"];

function normalize(name) {
  return (
    name
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") + "_339x180.png"
  );
}

async function tryDownload(url) {
  try {
    const res = await axios.get(url, { responseType: "arraybuffer" });
    return res.data;
  } catch {
    return null;
  }
}

async function downloadSlot(slot) {
  const fileName = normalize(slot.name);
  const filePath = path.join(OUT, fileName);

  if (fs.existsSync(filePath)) {
    console.log("✔ Already exists:", fileName);
    return fileName;
  }

  const slug = normalize(slot.name).replace("_339x180.png", "");

  for (const y of years) {
    for (const m of months) {
      for (const s of suffixes) {
        const url =
          `https://www.pragmaticplay.com/wp-content/uploads/${y}/${m}/${slug}${s}_339x180.png`;

        const data = await tryDownload(url);
        if (data) {
          fs.writeFileSync(filePath, data);
          console.log("✔ Downloaded:", url);
          return fileName;
        }
      }
    }
  }

  console.log("✖ Not found:", slot.name);
  return null;
}

async function run() {
  console.log("Fetching Pragmatic images…");
  for (const slot of SLOTS) {
    if (slot.provider !== "Pragmatic Play") continue;
    await downloadSlot(slot);
  }
  console.log("Done!");
}

run();
