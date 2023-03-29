import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormikErrors } from 'formik/dist/types';
import '../styles/styles.css';

interface FormValues {
  firstName: string ;
  lastName: string ;
  email: string ;
}

export const FormikYupPage = () => {

  const { handleChange, handleBlur, values, handleSubmit, errors, touched } = useFormik({
    
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: values => {
      console.log( values )
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
                    .max( 15, 'Debe tener 15 caracteres o menos' )
                    .required('Requerido'),
      lastName: Yup.string()
                    .max( 15, 'Debe tener 15 caracteres o menos' )
                    .required('Requerido'),
      email:    Yup.string()
                    .email('El correo no tiene un formato valido')
                    .required('Requerido')
    })
  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form noValidate onSubmit={ handleSubmit }>
        
        <label htmlFor="firstName">First Name</label>
        <input 
          type="text" 
          name="firstName"
          value={ values.firstName }
          onChange={ handleChange }
          onBlur={ handleBlur }
          />
        { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text" 
          name="lastName"
          value={ values.lastName }
          onChange={ handleChange }
          onBlur={ handleBlur }
          />
        { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email"
          value={ values.email }
          onChange={ handleChange }
          onBlur={ handleBlur }
          />
        { touched.email && errors.email && <span>{ errors.email }</span> }
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
