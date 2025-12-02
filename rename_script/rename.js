import fs from "fs";
import path from "path";

const folder = "../public/video/human_fitted";

const files = fs
  .readdirSync(folder)
  .filter((f) => f.toLowerCase().includes(".mp4"));

let counter = 1;

files.forEach((file) => {
  const oldPath = path.join(folder, file);

  // find the index of first '.mp4'
  const mp4Index = file.toLowerCase().indexOf(".mp4");

  if (mp4Index === -1 || mp4Index < 4) {
    console.warn(`跳过：无法从文件名中截取4位 -> ${file}`);
    return;
  }

  // get the 4 characters before '.mp4'
  const tag = file.slice(mp4Index - 4, mp4Index);

  const newName = `hf-${tag}-${counter}.mp4`;
  const newPath = path.join(folder, newName);

  fs.renameSync(oldPath, newPath);
  counter++;
});

console.log("Renamed all files!");
