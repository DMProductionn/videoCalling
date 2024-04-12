import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Layout from '../Layout';
import JoinChat from '../../pages/JoinChat';
import CreateChat from '../../pages/CreateChat';
import Chat from '../../pages/Chat';
import Test from '../../pages/Test';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Layout />} errorElement={<div>Error</div>}>
        <Route index element={<Home />} />
        <Route path='/join' element={<JoinChat />} />
        <Route path='/create' element={<CreateChat />} />
        <Route path='/test' element={<Test />} />
      </Route>
      <Route path='/connect/chat/:chat_id' element={<Chat />} />
      </>
    ),
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
