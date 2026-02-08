const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// Create public directory
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

// Function to copy file
function copyFile(src, dest) {
    fs.copyFileSync(src, dest);
}

// Function to copy directory recursively
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
    }
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            copyFile(srcPath, destPath);
        }
    }
}

// Files to copy
const files = fs.readdirSync(__dirname);
files.forEach(file => {
    // Skip node_modules, .git, .vercel, public, and build script itself
    if (['node_modules', '.git', '.vercel', 'public', 'build.js', 'package.json', 'package-lock.json', 'pnpm-lock.yaml'].includes(file)) return;
    
    // Copy HTML, CSS, JS, JSON
    if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.json')) {
        copyFile(path.join(__dirname, file), path.join(publicDir, file));
    }
    
    // Copy assets folder
    if (file === 'assets') {
        copyDir(path.join(__dirname, file), path.join(publicDir, file));
    }
});

console.log('Build complete: Files copied to public/');
