import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, HeaderTitle, Text } from '../../components';
import { useContextData, useTimer } from '../../hooks';
import { WAITING_TIME } from './const';

export const Welcome = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { getShuffledData } = useContextData(27);

  const { isTimerRunning, time, runTimer } = useTimer(() => {
    getShuffledData();
    navigate(`/game/${name}`);
  }, WAITING_TIME);

  const timeBeforeGame = WAITING_TIME / 1000 - time / 1000 || <Text component='span' id='go' fontSize='5rem' textTransform='uppercase' />;

  const handleClick = async () => {
    if (!isTimerRunning) {
      runTimer();
    }
  };

  useEffect(() => {
    getShuffledData();
  }, []);

  return (
    <>
      <HeaderTitle id='click.the.fox' />
      <Text
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          fontSize: '5rem',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {isTimerRunning && timeBeforeGame}
      </Text>
      <>
        <Text id='welcome' marginTop={3} textTransform='capitalize'>
          ,&nbsp;
          <Text component='span' textTransform='capitalize'>
            {name}
          </Text>
        </Text>
        <Button id='play' onClick={handleClick} sx={{ marginLeft: 0, marginTop: '20px' }} />
      </>
    </>
  );
};
