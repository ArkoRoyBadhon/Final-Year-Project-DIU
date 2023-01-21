import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    // <div className="bg-gradient-to-r from-indigo-400 to-cyan-400">
    <div className='max-w-[1700px] mx-auto border'>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
