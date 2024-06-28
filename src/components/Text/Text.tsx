import { Typography, TypographyProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import { FormattedMessage } from 'react-intl';

type Props = PropsWithChildren & TypographyProps;

export const Text = ({ children, id, component = 'p', ...rest }: Props) => {
  return (
    <Typography component={component} {...rest}>
      {id && <FormattedMessage id={id} />}
      {children}
    </Typography>
  );
};
