"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function updateManifest() {
    var manifestPath = path.resolve(__dirname, "..", "../public", "manifest.json");
    var publicPath = path.resolve(__dirname, "..", "../public");
    // Read manifest file
    var manifestData = fs.readFileSync(manifestPath, "utf8");
    var manifest = JSON.parse(manifestData);
    // Read the public directory
    fs.readdir(publicPath, function (err, files) {
        if (err) {
            console.error("Error reading public directory:", err);
            return;
        }
        // Filter image files
        var imageFiles = files.filter(function (file) {
            return /\.(png|jpg|jpeg|gif|svg|webp)$/.test(file);
        });
        // Add new icons to manifest
        imageFiles.forEach(function (file) {
            var iconPath = "/".concat(file);
            var sizes = "512x512";
            var type = "image/webp";
            var purpose = "any";
            // Check if icon already exists in manifest
            var exists = manifest.icons.some(function (icon) { return icon.src === iconPath; });
            // If icon does not exist, add it to manifest
            if (!exists) {
                manifest.icons.push({ src: iconPath, sizes: sizes, type: type, purpose: purpose });
            }
        });
        // Write updated manifest file
        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
        // Add new icons to manifest
        imageFiles.forEach(function (file) {
            var iconPath = "/".concat(file);
            var sizes = "512x512";
            var type = "image/webp";
            var purpose = "any";
            // Check if icon already exists in manifest
            var exists = manifest.icons.some(function (icon) { return icon.src === iconPath; });
            // If icon does not exist, add it to manifest
            if (!exists) {
                manifest.icons.push({ src: iconPath, sizes: sizes, type: type, purpose: purpose });
                console.log("New icon added: ".concat(file));
            }
            else {
                console.log("Icon structure is updated: ".concat(file));
            }
        });
    });
}
// Call the function to update the manifest
updateManifest();
