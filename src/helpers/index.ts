import { format } from 'date-fns';

export const buildBatchRequest = (amount: number) => {
  const requestData = new Array(amount).fill(null);

  return requestData.map((__item, i) => (i % 9 ? { key: 'dog', link: '/random' } : { key: 'fox', link: '' }));
};

export type ImageData = {
  key: string;
  src: string;
};

export const buildObjectFromArray = (data: ImageData[]) =>
  data.reduce(
    ({ key, images }: { key: number; images: { [key: string]: ImageData[] } }, item: ImageData, index: number) => {
      if (!(index % 9)) {
        key++;
      }

      if (!images[key]) {
        images[key.toString()] = [];
      }

      images[key].push({ key: item.key, src: item.src });

      return { key, images };
    },
    { key: 0, images: {} }
  );

export const shuffleArray = <T>(data: T[]) => {
  return data
    .map((value: T): { value: T; sort: number } => ({ value, sort: Math.random() }))
    .sort((a: { value: T; sort: number }, b: { value: T; sort: number }) => a.sort - b.sort)
    .map(({ value }: { value: T; sort: number }) => value);
};

export const formatDate = (date: number) => format(new Date(date), 'yyyy, LLL dd');
