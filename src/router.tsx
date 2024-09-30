import { createBrowserRouter } from 'react-router-dom';
import { LandingPage, QuizPage, ResultPage } from 'pages';

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/quiz', element: <QuizPage /> },
  { path: '/result', element: <ResultPage /> },
]);

export default router;
