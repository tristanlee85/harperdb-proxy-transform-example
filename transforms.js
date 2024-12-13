import * as cheerio from 'cheerio';

export function transformRequestOptions(req) {
  return req;
}

// export function transformRequestPath(req) {
//   return req;
// }

export function transformResponse(proxyRes, proxyResData, req, res) {
  const contentType = proxyRes.headers['content-type'] || '';
  console.log('transformResponse', contentType, req.path);
  if (contentType.includes('text/html') && req.path === '/') {
    const $ = cheerio.load(proxyResData);
    $('title').text('Hello from transforms.js');
    $('body').prepend('<p>Hello from transforms.js</p>');
    return $.html();
  }
  return proxyResData;
}
