import React from 'react';
import { RouterProvider } from 'react-router';
import router from './Router/router';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
