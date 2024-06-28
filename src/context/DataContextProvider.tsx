import { PropsWithChildren, useState } from 'react';
import { DataContext, State } from './context';

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<State>({ shuffledData: [], score: {} });

  return <DataContext.Provider value={{ state, setState }}>{children}</DataContext.Provider>;
};
