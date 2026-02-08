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
    // Skip these directories/files
    const ignored = [
        'node_modules', 
        '.git', 
        '.vercel', 
        'public', 
        'build.js', 
        'package.json', 
        'package-lock.json', 
        'pnpm-lock.yaml',
        '.gitignore',
        '.vercelignore',
        '.env',
        '.env.local'
    ];
    
    if (ignored.includes(file)) return;
    
    // Copy all other files (images, html, css, etc.)
    const srcPath = path.join(__dirname, file);
    const destPath = path.join(publicDir, file);

    const stats = fs.statSync(srcPath);
    if (stats.isDirectory()) {
        // Only copy specific directories if needed, or copy all non-ignored directories
        // In this case, 'assets' is the main one, but we might have others.
        // Let's explicitly copy assets and dtechnoprint-theme (if needed)
        // Actually, copying ALL directories might be dangerous if there are source folders.
        // Let's stick to 'assets' and 'dtechnoprint-theme' if it has assets.
        if (file === 'assets') {
            copyDir(srcPath, destPath);
        }
    } else {
        // Copy all files in root (html, css, js, webp, jpg, png, etc.)
        copyFile(srcPath, destPath);
    }
});

console.log('Build complete: Files copied to public/');
