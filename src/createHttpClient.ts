import { fetchJson } from './fetchJson';

export const createHttpClient = (baseUrl: string) => {
  const headers = new Headers();

  return {
    setHeader: (name: string, value: string) => {
      headers.set(name, value);
    },
    get: (url: string) => {
      return fetchJson(`${baseUrl}${url}`, { method: 'GET', headers });
    },
    post: (url: string, body?: unknown) => {
      return fetchJson(`${baseUrl}${url}`, { method: 'POST', headers, body });
    },
    put: (url: string, body?: unknown) => {
      return fetchJson(`${baseUrl}${url}`, { method: 'PUT', headers, body });
    },
    delete: (url: string, body?: unknown) => {
      return fetchJson(`${baseUrl}${url}`, { method: 'DELETE', headers, body });
    },
  };
};
