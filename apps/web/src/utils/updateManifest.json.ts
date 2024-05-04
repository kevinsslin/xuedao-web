import * as fs from "fs";
import * as path from "path";

interface IconType {
  src: string;
  sizes: string;
  type: string;
  purpose: string;
}

interface ManifestType {
  id: string;
  name: string;
  short_name: string;
  icons: IconType[];
  theme_color: string;
  background_color: string;
  start_url: string;
  display: string;
  orientation: string;
}

function updateManifest(): void {
  const manifestPath = path.resolve(
    __dirname,
    "..",
    "../public",
    "manifest.json",
  );
  const publicPath = path.resolve(__dirname, "..", "../public");

  // Read manifest file
  const manifestData: string = fs.readFileSync(manifestPath, "utf8");
  const manifest: ManifestType = JSON.parse(manifestData);

  // Read the public directory
  fs.readdir(publicPath, (err, files) => {
    if (err) {
      console.error("Error reading public directory:", err);
      return;
    }

    // Filter image files
    const imageFiles = files.filter((file) =>
      /\.(png|jpg|jpeg|gif|svg|webp)$/.test(file),
    );

    // Add new icons to manifest
    imageFiles.forEach((file) => {
      const iconPath = `/${file}`;
      const sizes = "512x512";
      const type = "image/webp";
      const purpose = "any";

      // Check if icon already exists in manifest
      const exists = manifest.icons.some((icon) => icon.src === iconPath);

      // If icon does not exist, add it to manifest
      if (!exists) {
        manifest.icons.push({ src: iconPath, sizes, type, purpose });
      }
    });

    // Write updated manifest file
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    // Add new icons to manifest
    imageFiles.forEach((file) => {
      const iconPath = `/${file}`;
      const sizes = "512x512";
      const type = "image/webp";
      const purpose = "any";

      // Check if icon already exists in manifest
      const exists = manifest.icons.some((icon) => icon.src === iconPath);

      // If icon does not exist, add it to manifest
      if (!exists) {
        manifest.icons.push({ src: iconPath, sizes, type, purpose });
        console.log(`New icon added: ${file}`);
      } else {
        console.log(`Icon structure is updated: ${file}`);
      }
    });
  });
}

// Call the function to update the manifest
updateManifest();
