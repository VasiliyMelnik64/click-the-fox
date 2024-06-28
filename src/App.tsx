import { RouterProvider } from 'react-router-dom';
import { Container } from '@mui/material';

import { router } from './routes';

import { TranslationsProvider } from './locales/TranslationsProvider';
import { DataContextProvider } from './context';

export const App = () => (
  <DataContextProvider>
    <TranslationsProvider>
      <Container sx={{ width: '80%', margin: '0 auto' }}>
        <RouterProvider router={router} />
      </Container>
    </TranslationsProvider>
  </DataContextProvider>
);

export default App;
