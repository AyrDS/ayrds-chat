import { ColorRing } from 'react-loader-spinner';

export const Spinner = () => {
   return (
      <div className='container-spinner' >

         <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
         />
         <h1>Espere por favor</h1>
      </div>
   )
}

