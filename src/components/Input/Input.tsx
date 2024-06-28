import { forwardRef } from 'react';
import { FormLabel, TextField } from '@mui/material';
import { Text } from '../';

type Props = {
  error?: string;
  label?: string;
};

export const Input = forwardRef(({ error, label, ...rest }: Props, ref) => (
  <FormLabel>
    <Text id='name' role='note' />
    <TextField variant='outlined' size='small' inputRef={ref} inputProps={{ role: 'textbox' }} {...rest} />
    {error && <Text role='status' id={error} position='absolute' color='red' />}
  </FormLabel>
));
