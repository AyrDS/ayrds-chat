import { createContext, useCallback, useState } from 'react';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';

export const AuthContext = createContext();
const { Provider } = AuthContext;

const initialState = {
   uid: null,
   checking: true,
   logged: false,
   name: null,
   email: null
};

export const AuthProvider = ({ children }) => {

   const [auth, setAuth] = useState(initialState);

   const login = async (email, password) => {
      const resp = await fetchWithoutToken('login', { email, password }, 'POST');

      if (resp.ok) {
         const { user } = resp;
         localStorage.setItem('token', `Bearer ${resp.token}`);
         setAuth({
            uid: user.uid,
            checking: false,
            logged: true,
            name: user.name,
            email: user.email
         });
      }

      console.log('Autenticado');

      return resp.ok;
   }

   const register = async (name, email, password) => {
      const resp = await fetchWithoutToken('login/new', { name, email, password }, 'POST');

      if (resp.ok) {
         const { user } = resp;
         localStorage.setItem('token', `Bearer ${resp.token}`);
         setAuth({
            uid: user.uid,
            checking: false,
            logged: true,
            name: user.name,
            email: user.email
         });
      }

      return resp;
   }

   const verifyToken = useCallback(async () => {
      const token = localStorage.getItem('token');

      if (!token) {
         setAuth({
            uid: null,
            checking: false,
            logged: false,
            name: null,
            email: null
         });

         return false;
      }

      const resp = await fetchWithToken('login/renew');
      if (resp.ok) {
         const { user } = resp;
         localStorage.setItem('token', `Bearer ${resp.token}`);
         setAuth({
            uid: user.uid,
            checking: false,
            logged: true,
            name: user.name,
            email: user.email
         });

         return true;
      } else {
         setAuth({
            uid: null,
            checking: false,
            logged: false,
            name: null,
            email: null
         });

         return false;
      }
   }, []);

   const logout = () => {

   }

   return (
      <Provider value={{
         auth,
         login,
         logout,
         register,
         verifyToken,
      }}
      >
         {children}
      </Provider>
   )
}
