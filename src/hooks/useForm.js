import { useEffect, useState } from 'react';

export const useForm = (initialForm = {}) => {

   const [formState, setFormState] = useState(initialForm);

   useEffect(() => {
      setFormState(initialForm);
   }, [initialForm]);

   const onInputChange = ({ target }) => {
      const { name, value } = target;
      setFormState({
         ...formState,
         [name]: value
      });
   }

   const handleCheckbox = ({ target }) => {
      setFormState({
         ...formState,
         [target.name]: target.checked
      });
   };

   const resetForm = () => {
      setFormState(initialForm);
   }

   return {
      ...formState,
      formState,
      onInputChange,
      handleCheckbox,
      resetForm
   }
}