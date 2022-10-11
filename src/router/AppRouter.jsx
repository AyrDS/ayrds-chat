import { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { Spinner } from '../components';
import { ChatPage } from '../pages';
import { AuthRouter } from './AuthRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {

   const { auth, verifyToken } = useContext(AuthContext);

   useEffect(() => {
      verifyToken();
   }, []);

   if (auth.checking) {
      return <Spinner />
   }

   return (
      <BrowserRouter>
         <Routes>

            <Route
               path='/auth/*'
               element={
                  <PublicRouter logged={auth.logged} >
                     <AuthRouter />
                  </PublicRouter>
               }
            />

            <Route
               path='/'
               element={
                  <PrivateRouter logged={auth.logged} >
                     <ChatPage />
                  </PrivateRouter>
               } />

            <Route path='*' element={<Navigate to='/auth/login' />} />
         </Routes>
      </BrowserRouter>
   )
}