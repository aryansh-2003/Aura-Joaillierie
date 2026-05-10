import fs from 'fs';
import path from 'path';

const dir = 'f:/JAVASCRIPT/firefighter/luxury-site/src';

const replacements = [
  { from: /bg-\[#050505\]/g, to: 'bg-[#fdfbf7] dark:bg-[#050505]' },
  { from: /bg-\[#090909\]/g, to: 'bg-[#f0ebe1] dark:bg-[#090909]' },
  { from: /text-gray-100/g, to: 'text-gray-900 dark:text-gray-100' },
  { from: /text-gray-200/g, to: 'text-gray-800 dark:text-gray-200' },
  { from: /text-gray-400/g, to: 'text-gray-600 dark:text-gray-400' },
  { from: /text-gray-500/g, to: 'text-gray-500 dark:text-gray-400' },
  { from: /bg-zinc-900/g, to: 'bg-[#f4f0e6] dark:bg-zinc-900' },
  { from: /border-white\/5(?!0)/g, to: 'border-black/5 dark:border-white/5' },
  { from: /border-white\/10/g, to: 'border-black/10 dark:border-white/10' },
  { from: /border-white\/20/g, to: 'border-black/20 dark:border-white/20' },
  { from: /border-white\/40/g, to: 'border-black/40 dark:border-white/40' },
  { from: /border-gray-800/g, to: 'border-gray-300 dark:border-gray-800' },
  { from: /bg-white\/10/g, to: 'bg-black/5 dark:bg-white/10' },
  { from: /bg-white\/5(?!0)/g, to: 'bg-black/5 dark:bg-white/5' },
];

// Special care for text-white and bg-white so we don't mess up mix-blend or specific items
// Actually, it's safer to manually replace these in a few files, but let's try to just do it for specific cases.
const specialReplacements = [
  // ShowcaseSection.jsx
  { file: 'ShowcaseSection.jsx', from: /text-white/g, to: 'text-black dark:text-white' },
  { file: 'ShowcaseSection.jsx', from: /bg-white/g, to: 'bg-black dark:bg-white' },
  { file: 'ShowcaseSection.jsx', from: /text-black dark:text-white/g, to: 'text-black dark:text-white' }, // idempotency check
  { file: 'ShowcaseSection.jsx', from: /bg-black dark:bg-white/g, to: 'bg-black dark:bg-white' },
  { file: 'ShowcaseSection.jsx', from: /text-black(?! dark)/g, to: 'text-white dark:text-black' },
  { file: 'ShowcaseSection.jsx', from: /hover:bg-white/g, to: 'hover:bg-black dark:hover:bg-white' },
  { file: 'ShowcaseSection.jsx', from: /hover:text-black/g, to: 'hover:text-white dark:hover:text-black' },
  { file: 'ShowcaseSection.jsx', from: /hover:border-white/g, to: 'hover:border-black dark:hover:border-white' },
  
  // Home.jsx
  { file: 'Home.jsx', from: /text-white/g, to: 'text-black dark:text-white' },
  { file: 'Home.jsx', from: /bg-white(?![\/\w])/g, to: 'bg-black dark:bg-white' },
  { file: 'Home.jsx', from: /selection:bg-white selection:text-black/g, to: 'selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black' },

  // CollectionGrid.jsx
  // Has text-white over an image gradient `from-black/80`. Better to keep it white. Wait, we'll replace text-white only for the heading "The Archive".
  { file: 'CollectionGrid.jsx', from: /text-4xl md:text-6xl font-serif text-white/g, to: 'text-4xl md:text-6xl font-serif text-black dark:text-white' },

  // Reviews.jsx
  { file: 'Reviews.jsx', from: /text-white/g, to: 'text-black dark:text-white' },
  { file: 'Reviews.jsx', from: /bg-white(?![\/\w])/g, to: 'bg-black dark:bg-white' },

  // WelcomeOffer.jsx
  { file: 'WelcomeOffer.jsx', from: /text-white/g, to: 'text-black dark:text-white' },
  { file: 'WelcomeOffer.jsx', from: /bg-white(?![\/\w])/g, to: 'bg-black dark:bg-white' },
  { file: 'WelcomeOffer.jsx', from: /text-black(?! dark)/g, to: 'text-white dark:text-black' },

  // CollectionPage.jsx
  { file: 'CollectionPage.jsx', from: /text-white/g, to: 'text-black dark:text-white' },
  
  // ProductDetailPage.jsx
  { file: 'ProductDetailPage.jsx', from: /text-white/g, to: 'text-black dark:text-white' },
  { file: 'ProductDetailPage.jsx', from: /bg-white(?![\/\w])/g, to: 'bg-black dark:bg-white' },
  { file: 'ProductDetailPage.jsx', from: /text-black(?! dark)/g, to: 'text-white dark:text-black' },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Global replacements
  replacements.forEach(r => {
    content = content.replace(r.from, r.to);
  });

  // Special replacements
  const fileName = path.basename(filePath);
  specialReplacements.forEach(r => {
    if (r.file === fileName) {
      content = content.replace(r.from, r.to);
    }
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated', filePath);
  }
}

function traverse(currentDir) {
  const files = fs.readdirSync(currentDir);
  for (const file of files) {
    const fullPath = path.join(currentDir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

traverse(dir);
console.log('Done!');
