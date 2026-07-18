import { RouterProvider } from 'react-router';
import router from './routes/Router';
import './css/globals.css';

function App() {
  return (
    <>
    
      <RouterProvider router={router} />
    </>
  );
}

export default App;
