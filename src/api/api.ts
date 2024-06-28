import { ImageData } from '../helpers';
import { DOG_BASE_URL, FOX_REST_URL } from './const';
import { RestClient } from './restClient';

const dogRestClient = new RestClient(DOG_BASE_URL);
const foxRestClient = new RestClient(FOX_REST_URL);

type Api = {
  [key: string]: {
    getRandomImage(url: string): Promise<ImageData>;
  };
};

export const api: Api = {
  dog: {
    async getRandomImage(url: string) {
      try {
        const res = await dogRestClient.get(url);
        const data = await res.json();

        return { key: 'dog', src: data.message } as ImageData;
      } catch (e) {
        console.log({ e });
        return {} as ImageData;
      }
    },
  },
  fox: {
    async getRandomImage(url: string) {
      try {
        const res = await foxRestClient.get(url);
        const data = await res.json();

        return { key: 'fox', src: data.image };
      } catch (e) {
        console.log({ e });

        return {} as ImageData;
      }
    },
  },
};
