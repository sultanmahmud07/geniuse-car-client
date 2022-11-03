import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';

function App() {


  return (
    <div data-theme="cupcake" >
      <div className='w-5/6 mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
    </div>
  );
}

export default App;
