import { ReactElement } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { HomePage, WelcomePage, GamePage, ScorePage } from './containers';

export const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: '/',
  },
  {
    element: <WelcomePage />,
    path: '/welcome/:name',
  },
  {
    element: (<GamePage />) as ReactElement,
    path: '/game/:name',
  },
  {
    element: <ScorePage />,
    path: '/score/:name',
  },
]);
