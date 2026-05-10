const https = require('https');
const fs = require('fs');

function fetchUnsplash(query, filename) {
  const options = {
    hostname: 'unsplash.com',
    port: 443,
    path: `/napi/search/photos?query=${encodeURIComponent(query)}&per_page=10`,
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0'
    }
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (d) => {
      data += d;
    });
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        const urls = json.results.map(r => r.urls.regular);
        fs.writeFileSync(filename, JSON.stringify(urls, null, 2));
        console.log(`Saved ${urls.length} urls for ${query}`);
      } catch (e) {
        console.error('Error parsing JSON for', query);
      }
    });
  });

  req.on('error', (error) => {
    console.error(error);
  });

  req.end();
}

fetchUnsplash('luxury jewelry ring', 'rings.json');
fetchUnsplash('luxury jewelry necklace', 'necklaces.json');
fetchUnsplash('luxury jewelry bracelet', 'bracelets.json');
fetchUnsplash('luxury jewelry earrings', 'earrings.json');
