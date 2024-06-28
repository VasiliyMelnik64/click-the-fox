import { useNavigate, useParams } from 'react-router-dom';
import { Button, HeaderTitle, Text } from '../../components';
import { useContextData } from '../../hooks';
import { Grid, TableBody, Table, Paper, TableHead, TableRow, TableCell } from '@mui/material';
import { formatDate } from '../../helpers';

export const Score = () => {
  const { name = '' } = useParams();

  const navigate = useNavigate();

  const {
    data: { score },
    updateScore,
  } = useContextData();

  const redirectToHomePage = () => {
    updateScore(name, { isInitial: true });

    navigate('/');
  };

  const redirectToGamePage = () => {
    updateScore(name, { isInitial: true });

    navigate(`/game/${name}`);
  };

  return (
    <>
      <HeaderTitle id='click.the.fox' />
      <Grid container gap={3} marginTop={3}>
        <Grid item container>
          <Paper elevation={2} sx={{ width: '100%' }}>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Text id='name' />
                  </TableCell>
                  <TableCell>
                    <Text id='date' />
                  </TableCell>
                  <TableCell>
                    <Text id='score' />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(score).map((name) => (
                  <TableRow key={score[name].date}>
                    <TableCell>{name}</TableCell>
                    <TableCell>{formatDate(score[name].date || 0)}</TableCell>
                    <TableCell>{score[name].value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid item container gap={3} justifyContent='flex-end'>
          <Grid item>
            <Button id='toHome' onClick={redirectToHomePage} />
          </Grid>
          <Grid item>
            <Button id='toGame' onClick={redirectToGamePage} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
