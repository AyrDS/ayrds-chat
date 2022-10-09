import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { ChatPage } from '../pages';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {

   const { auth, verifyToken } = useContext(AuthContext);

   

   return (
      <BrowserRouter>
         <Routes>

            <Route index path='/' element={<ChatPage />} />
            <Route path='/auth/*' element={<AuthRouter />} />

            <Route path='*' element={<Navigate to='/' />} />
         </Routes>
      </BrowserRouter>
   )
}

