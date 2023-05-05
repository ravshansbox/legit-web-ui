export type FetchMethod = 'get' | 'post' | 'put' | 'delete';
export type FetchJsonOptions = {
  signal?: AbortSignal;
  headers?: Record<string, string>;
  body?: unknown;
};

export const fetchJson = async <T = any>(
  method: FetchMethod,
  url: string,
  { signal, headers, body }: FetchJsonOptions = {}
) => {
  const response = await fetch(url, {
    signal,
    method,
    headers: new Headers({
      ...headers,
      accepts: 'application/json',
      'content-type': 'application/json',
    }),
    body: body ? JSON.stringify(body) : null,
  });
  return response.json() as T;
};
