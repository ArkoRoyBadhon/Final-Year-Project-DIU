import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    // <div className="bg-gradient-to-r from-indigo-400 to-cyan-400">
    <div className='max-w-[1600px] mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
