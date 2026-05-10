import puppeteer from 'puppeteer';
import fs from 'fs';

async function fetchPexels(query, filename) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Go to Pexels search
  await page.goto(`https://www.pexels.com/search/${encodeURIComponent(query)}/`, {
    waitUntil: 'networkidle2'
  });

  // Extract image sources
  const urls = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img'));
    return images
      .map(img => img.src || img.getAttribute('data-src'))
      .filter(src => src && src.includes('pexels.com/photos/'))
      .map(src => {
        // clean up the URL
        const urlObj = new URL(src);
        urlObj.searchParams.set('w', '800');
        urlObj.searchParams.set('auto', 'compress');
        return urlObj.toString();
      });
  });

  const uniqueUrls = [...new Set(urls)];
  fs.writeFileSync(filename, JSON.stringify(uniqueUrls.slice(0, 15), null, 2));
  console.log(`Saved ${uniqueUrls.length} urls for ${query}`);
  
  await browser.close();
}

async function main() {
  await fetchPexels('luxury ring jewelry', 'rings.json');
  await fetchPexels('luxury necklace jewelry', 'necklaces.json');
  await fetchPexels('luxury bracelet jewelry', 'bracelets.json');
  await fetchPexels('luxury earrings jewelry', 'earrings.json');
}

main().catch(console.error);
