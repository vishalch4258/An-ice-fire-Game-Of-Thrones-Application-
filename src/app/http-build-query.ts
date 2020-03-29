export function httpBuildQuery(queryParams): string {
  let query = '';
  for (const key in queryParams) {
    if (typeof queryParams[key] === 'undefined') {
      continue;
    }
    if (query.length > 0) {
      query += '&';
    }
    query += key + '=' + encodeURIComponent(queryParams[key]);
  }
  return query;
}

