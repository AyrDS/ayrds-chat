import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';
import '../css/login-register.css';

export const AuthRouter = () => {
   return (
      <div class="limiter">
         <div class="container-login100">
            <div class="wrap-login100 p-t-50 p-b-90">
               <Routes>
                  <Route path='login' element={<LoginPage />} />
                  <Route path='register' element={<RegisterPage />} />

                  <Route path='*' element={<Navigate to='/' />} />
               </Routes>
            </div>
         </div>
      </div>
   )
}

