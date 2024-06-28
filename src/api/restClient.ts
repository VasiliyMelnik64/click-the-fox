type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export class RestClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  fetchMethod(method: FetchMethod, url: string, data?: object) {
    return fetch(`${this.baseUrl}${url}`, {
      method,
      ...(data && { body: JSON.stringify(data) }),
    });
  }

  async get(url: string) {
    return await this.fetchMethod('GET', url);
  }

  async post(url: string, data?: object) {
    return await this.fetchMethod('POST', url, data);
  }

  async put(url: string, data?: object) {
    return await this.fetchMethod('PUT', url, data);
  }

  async delete(url: string) {
    return await this.fetchMethod('DELETE', url);
  }
}
