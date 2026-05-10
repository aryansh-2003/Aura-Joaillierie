const https = require('https');
const fs = require('fs');

function fetchPexels(query, filename) {
  const options = {
    hostname: 'www.pexels.com',
    port: 443,
    path: `/search/${encodeURIComponent(query)}/`,
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (d) => {
      data += d;
    });
    res.on('end', () => {
      const regex = /https:\/\/images\.pexels\.com\/photos\/(\d+)\/pexels-photo-\1\.jpeg/g;
      const matches = [...data.matchAll(regex)];
      const urls = [...new Set(matches.map(m => m[0]))];
      fs.writeFileSync(filename, JSON.stringify(urls, null, 2));
      console.log(`Saved ${urls.length} urls for ${query}`);
    });
  });

  req.on('error', (error) => {
    console.error(error);
  });

  req.end();
}

fetchPexels('luxury ring', 'rings.json');
fetchPexels('luxury necklace', 'necklaces.json');
fetchPexels('luxury bracelet', 'bracelets.json');
fetchPexels('luxury earrings', 'earrings.json');
