import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");

// تأكد إن out موجود
fs.mkdirSync(outDir, { recursive: true });

// اعمل ملف .nojekyll
fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

console.log("✅ out/.nojekyll created");
