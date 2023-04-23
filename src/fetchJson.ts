type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

type Options = {
  method: Method;
  headers?: HeadersInit;
  body?: unknown;
};

export const fetchJson = async (
  url: string,
  { method, headers, body }: Options
) => {
  const response = await fetch(url, {
    method,
    headers: {
      ...headers,
      accepts: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
};
