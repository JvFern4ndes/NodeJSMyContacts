import delay from '../../utils/delay';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    await delay(500);

    const response = await fetch(`${this.baseURL}${path}`);

    const body = await response.json();

    if (response.ok) {
      return body;
    }

    console.log(body);

    throw new Error(`${response.status} - ${response.statusText}`);
  }
}

export default HttpClient;
