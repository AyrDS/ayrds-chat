import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../auth/AuthContext';
import { useForm } from '../hooks/useForm';

const formDataRegister = {
   name: '',
   email: '',
   password: '',
}

export const RegisterPage = () => {

   const { register } = useContext(AuthContext);
   const { name, email, password, onInputChange } = useForm(formDataRegister);

   const onSubmit = async (e) => {
      e.preventDefault();
      Swal.showLoading();

      const resp = await register(name, email, password);
      if (!resp.ok) {
         Swal.fire('Error', resp.msg, 'error');
         return;
      }

      Swal.close();
   }

   return (
      <form className="login100-form validate-form flex-sb flex-w" onSubmit={onSubmit}>
         <span className="login100-form-title mb-3">
            Chat - Registro
         </span>

         <div className="wrap-input100 validate-input mb-3">
            <input
               className="input100"
               type="text"
               name="name"
               placeholder="Nombre Completo"
               value={name}
               onChange={onInputChange}
            />
            <span className="focus-input100"></span>
         </div>


         <div className="wrap-input100 validate-input mb-3">
            <input
               className="input100"
               type="email"
               name="email"
               placeholder="Email"
               value={email}
               onChange={onInputChange}
            />
            <span className="focus-input100"></span>
         </div>


         <div className="wrap-input100 validate-input mb-3">
            <input
               className="input100"
               type="password"
               name="password"
               placeholder="Password"
               value={password}
               onChange={onInputChange}
            />
            <span className="focus-input100"></span>
         </div>

         <div className="row mb-3">
            <div className="col text-right">
               <Link to="/auth/login" className="txt1">
                  Ya tienes cuenta?
               </Link>
            </div>
         </div>

         <div className="container-login100-form-btn m-t-17">
            <button
               className="login100-form-btn"
               type='submit'
               disabled={[name, email, password].includes('') ? true : false}
            >
               Crear cuenta
            </button>
         </div>

      </form>
   )
}
