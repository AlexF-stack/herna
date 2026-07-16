import fs from "node:fs";
import sharp from "sharp";

const svg = fs.readFileSync("public/partners/tpg.svg");

await sharp(svg, { density: 240 })
  .resize(840, 368, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile("public/partners/tpg-clear.png");

await sharp(svg, { density: 220 })
  .resize(780, 340, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile("public/partners/tpg.png");

console.log("TPG logos regenerated");
