import { useEffect } from 'react';

import { HeaderTitle, IntroductionForm } from '../../components';
import { useContextData } from '../../hooks';

export const Home = () => {
  const { getShuffledData } = useContextData(27);

  useEffect(() => {
    getShuffledData();
  }, []);

  return (
    <>
      <HeaderTitle id='click.the.fox' />
      <IntroductionForm />
    </>
  );
};
