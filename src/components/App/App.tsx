import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Layout from '../Layout';
import JoinChat from '../../pages/JoinChat';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<div>Error</div>}>
        <Route index element={<Home />} />
        <Route path='/join' element={<JoinChat />} />
      </Route>,
    ),
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
