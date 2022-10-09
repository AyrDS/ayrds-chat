import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../auth/AuthContext';
import { useForm } from '../hooks/useForm';

const formData = {
   email: localStorage.getItem('email') || 'karen@test.com',
   password: '123456',
   rememberme: localStorage.getItem('email') ? true : false
}

export const LoginPage = () => {

   const { login } = useContext(AuthContext);
   const { email, password, rememberme, handleCheckbox, onInputChange, } = useForm(formData);

   const onSubmit = async (e) => {
      e.preventDefault();

      rememberme ? localStorage.setItem('email', email) : localStorage.removeItem('email');

      const ok = await login(email, password);

      if (!ok) {
         Swal.fire('Error', 'Verifique el usuario y contraseña', 'error');
      }
   }

   return (
      <form className="login100-form validate-form flex-sb flex-w" onSubmit={onSubmit}>
         <span className="login100-form-title mb-3">
            Chat - Ingreso
         </span>

         <div className="wrap-input100 validate-input mb-3">
            <input
               className="input100"
               type="email"
               name="email"
               onChange={onInputChange}
               placeholder="Email"
               value={email}
            />
            <span className="focus-input100"></span>
         </div>


         <div className="wrap-input100 validate-input mb-3">
            <input
               className="input100"
               type="password"
               name="password"
               onChange={onInputChange}
               value={password}
               placeholder="Password"
            />
            <span className="focus-input100"></span>
         </div>

         <div className="row mb-3">
            <div className="col">
               <input
                  className="input-checkbox100"
                  id="ckb1"
                  onChange={handleCheckbox}
                  checked={rememberme}
                  type="checkbox"
                  name="rememberme"
               />
               <label className="label-checkbox100" htmlFor='ckb1'>
                  Recordarme
               </label>
            </div>

            <div className="col text-right">
               <Link to="/auth/register" className="txt1">
                  Nueva cuenta?
               </Link>
            </div>
         </div>

         <div className="container-login100-form-btn m-t-17">
            <button
               className="login100-form-btn"
               type='submit'
               disabled={email.length > 0 && password.length > 0 ? false : true}
            >
               Ingresar
            </button>
         </div>

      </form>
   )
}
