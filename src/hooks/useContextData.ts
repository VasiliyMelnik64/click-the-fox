import { api } from '../api';
import { ImageData, buildBatchRequest, buildObjectFromArray, shuffleArray } from '../helpers';
import { useDataContext } from '../context';
import { State } from '../context/context';

export const useContextData = (amount?: number) => {
  const { state, setState } = useDataContext();

  const getBatchData = async () => {
    if (amount) {
      const result = await Promise.all(
        buildBatchRequest(amount).map(async ({ key, link }) => {
          const data = await api[key].getRandomImage(link);

          return data;
        })
      );

      return result;
    }

    return null;
  };

  const getShuffledData = async () => {
    const data = await getBatchData();

    if (data) {
      const { images } = buildObjectFromArray(data);
      const shuffledData = Object.keys(images).reduce((acc: { [key: string]: ImageData[] }, key) => {
        acc[key] = shuffleArray<ImageData>(images[key]);
        return acc;
      }, {});

      setState((prevState: State) => ({ ...prevState, shuffledData: [...prevState.shuffledData, ...Object.values(shuffledData)] }));
    }
  };

  type UpdateScoreConfig = {
    isInitial?: boolean;
    increment?: boolean;
  };

  const updateScore = (name: string, config?: UpdateScoreConfig) => {
    setState((prevState: State) => ({
      ...prevState,
      score: {
        ...prevState.score,
        [name]: {
          ...prevState.score[name],
          ...(config?.isInitial && { date: +new Date() }),
          value: config?.isInitial ? 0 : prevState.score[name]?.value + (config?.increment ? 1 : -1),
        },
      },
    }));
  };

  return {
    data: state,
    getShuffledData,
    updateScore,
  };
};
