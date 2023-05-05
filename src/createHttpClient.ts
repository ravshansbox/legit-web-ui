import { FetchJsonOptions, FetchMethod, fetchJson } from './fetchJson';

export const createHttpClient = (baseUrl: string) => {
  const defaultHeaders: Record<string, string> = {};

  return {
    setHeader: (name: string, value: string) => {
      defaultHeaders[name] = value;
    },
    request: <T = any>(
      method: FetchMethod,
      url: string,
      { headers, ...options }: FetchJsonOptions = {}
    ) => {
      return fetchJson<T>(method, `${baseUrl}${url}`, {
        ...options,
        headers: { ...defaultHeaders, ...headers },
      });
    },
  };
};
