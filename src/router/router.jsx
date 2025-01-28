import { createBrowserRouter } from 'react-router';
import {
  Index,
  Root,
  Vaccinations,
  Consultations,
  HealthUnits,
  Faq,
  Login,
} from './routes/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      { path: 'vaccinations', element: <Vaccinations /> },
      { path: 'consultations', element: <Consultations /> },
      { path: 'health-units', element: <HealthUnits /> },
      { path: 'faq', element: <Faq /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);

export default router;
