import { Grid } from '@mui/material';

type Props = {
  id: string;
  src: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  sx?: {
    [key: string]: string;
  };
};

export const Image = ({ id, src, onClick, sx }: Props) => (
  <Grid
    id={id}
    item
    xs={4}
    sm={4}
    md={4}
    sx={{
      border: '3px solid white',
      cursor: 'pointer',
      backgroundImage: `url(${src})`,
      height: '200px',
      width: '200px',
      maxWidth: '200px',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      ...(sx && { sx }),
    }}
    onClick={onClick}
  />
);
