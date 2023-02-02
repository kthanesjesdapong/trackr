import { FC } from 'react';
import { RootLayout } from './layouts/RootLayout';

//We'll need one for landing page as well
//RootLayout is when a user is logged in
//createBrowserRouter is wrapping around App within Routes.tsx
export const App: FC = () => {
  return (
    <RootLayout />
  );
};


export default App;
