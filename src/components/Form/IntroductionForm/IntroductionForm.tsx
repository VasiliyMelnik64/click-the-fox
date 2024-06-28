import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../../';
import { useNavigate } from 'react-router-dom';
import { useContextData } from '../../../hooks';

type FormFields = { [key: string]: string };

export const IntroductionForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });
  const { updateScore } = useContextData();

  const onSubmit = (fields: FormFields) => {
    const name = fields.name.toLowerCase();
    updateScore(name, { isInitial: true });

    navigate(`/welcome/${name}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display='flex' alignItems='flex-end' marginTop={3}>
        <Input
          label='name'
          error={errors?.name && 'required'}
          {...register('name', {
            required: 'required',
          })}
        />
        <Button disabled={!!errors?.name} id='game' sx={{ marginLeft: '10px' }} />
      </Box>
    </form>
  );
};
