import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { ImageData } from '../../helpers';
import { HeaderTitle, Text } from '../../components';
import { Image } from '../../components/Image';
import { useContextData, useTimer } from '../../hooks';
import { GAME_TIME } from './const';

export const Game = () => {
  const { name = '' } = useParams();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const {
    data: { score, shuffledData },
    getShuffledData,
    updateScore,
  } = useContextData(27);

  const { time, runTimer } = useTimer(() => {
    navigate(`/score/${name}`);
  }, GAME_TIME);

  const timeLeft = 30 - time / 1000;
  const shouldRefecthData = !(count % 3);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    updateScore(name, { increment: e?.currentTarget.id === 'fox' });

    setCount(count + 1);

    if (shouldRefecthData) {
      getShuffledData();
    }
  };

  useEffect(() => {
    if (!shuffledData.length) {
      navigate('/');
    }

    runTimer();
  }, []);

  return (
    <>
      <HeaderTitle id='click.the.fox' />
      <Grid container marginTop={2} marginBottom={2} width='600px'>
        <Grid item xs={6} sm={6} md={6}>
          <Text id='score' textTransform='capitalize'>
            : {score[name]?.value}
          </Text>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Text id='timeLeft'>: {timeLeft}</Text>
        </Grid>
      </Grid>
      {!!shuffledData.length && (
        <>
          <Grid container width='600px'>
            {shuffledData[count]?.map(({ key, src }: ImageData) => (
              <Image id={key} key={`${src}-${key}`} src={src} onClick={handleClick} />
            ))}
          </Grid>
          <Grid container position='absolute' top='-1000%' sx={{ cursor: 'pointer' }}>
            {shuffledData[count + 1]?.map(({ key, src }: ImageData) => (
              <Image id={key} key={`${src}-${key}`} src={src} onClick={handleClick} />
            ))}
          </Grid>
        </>
      )}
    </>
  );
};
