import { createContext, useContext } from 'react';
import { ImageData } from '../helpers';

export type State = {
  shuffledData: Array<ImageData[]>;
  score: { [key: string]: { value: number; date?: number } };
};

export type DataContextType = {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
};

export const DataContext = createContext<DataContextType>({
  state: {
    shuffledData: [],
    score: {},
  },
  setState: () => {},
});

export const useDataContext = () => {
  const context = useContext(DataContext);

  return context;
};
