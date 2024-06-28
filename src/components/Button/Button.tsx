import { Button as MUIButton, ButtonProps } from '@mui/material';
import { Text } from '../';

type Props = ButtonProps;

export const Button = ({ disabled, id, size = 'large', ...rest }: Props) => (
  <MUIButton disabled={disabled} size={size} type='submit' color='primary' variant='contained' {...rest}>
    <Text id={id} />
  </MUIButton>
);
