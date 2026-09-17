import sharp from "sharp";
import fs from "fs";
import path from "path";

const src =
  process.argv[2] ||
  "C:/Users/Eroniti/.cursor/projects/c-Users-Eroniti-Desktop-Projects-dispute-accounting/assets/c__Users_Eroniti_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_anastassia-anufrieva-ecHGTPfjNfA-unsplash-aff6d83e-a30c-4b34-bb05-2d55d1a20a67.png";

const outDir = path.join(process.cwd(), "public/blog");
fs.mkdirSync(outDir, { recursive: true });

const jpg = path.join(outDir, "assumptions-expert-evidence.jpg");
const webp = path.join(outDir, "assumptions-expert-evidence.webp");

const meta = await sharp(src).metadata();
console.log("source", meta.width, meta.height, meta.format);

await sharp(src)
  .resize(1600, 900, { fit: "cover", position: "centre" })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(jpg);

await sharp(src)
  .resize(1600, 900, { fit: "cover", position: "centre" })
  .webp({ quality: 80 })
  .toFile(webp);

console.log("wrote", jpg, fs.statSync(jpg).size);
console.log("wrote", webp, fs.statSync(webp).size);
