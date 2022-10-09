import { Navigate } from 'react-router-dom';

export const PublicRouter = ({ children, logged }) => {

   return (!logged)
      ? children
      : <Navigate to='/' />
}
