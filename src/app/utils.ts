export function getLastPageFromHeader(resp): any {
  const linkHeader = resp.headers.get('Link').split(',');
  const lastPageUrl = linkHeader[linkHeader.length - 1].split(';')[0];
  const urlString = lastPageUrl.replace(/<|>/gm, '');
  const url = new URL(urlString);
  const result = url.searchParams.get('page');
  console.log(result);
  return result;
}

export function getLastSegmentFromUrl(url): any {
  return url.split('/').pop();
}
