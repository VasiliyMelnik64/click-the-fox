import { Typography, TypographyProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import { FormattedMessage } from 'react-intl';

type Props = PropsWithChildren & TypographyProps;

export const HeaderTitle = ({ children, id, ...rest }: Props) => {
  return (
    <Typography component='h1' fontSize='2rem' {...rest}>
      <FormattedMessage id={id} />
      {children}
    </Typography>
  );
};
