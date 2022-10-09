import { Navigate } from 'react-router-dom';

export const PrivateRouter = ({ children, logged }) => {

   return (logged)
      ? children
      : <Navigate to='/auth/login' />
}
