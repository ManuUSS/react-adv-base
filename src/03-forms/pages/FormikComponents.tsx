import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

interface FormValues {
  firstName: string ;
  lastName: string ;
  email: string ;
}

export const FormikComponents = () => {

  return (
    <div>
      <h1>Formik Components Tutorial</h1>
      <Formik 
        initialValues={{
          firstName: '',
          lastName: '',
          email: ''
        }}
        onSubmit={ ( values ) => console.log( values ) }
        validationSchema={ 
          Yup.object({
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
        }
      >
        { formik => (
            <Form noValidate onSubmit={ formik.handleSubmit }>

              <label htmlFor="firstName">First Name</label>
              <Field name='firstName' type='text' />
              <ErrorMessage name='firstName' component='span'/>

              <label htmlFor="lastName">Last Name</label>
              <Field name='lastName' type='text' />
              <ErrorMessage name='lastName' component='span' />

              <label htmlFor="email">Email</label>
              <Field name='email' type='email' />
              <ErrorMessage name='email'    component='span' />

              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
      
    </div>
  )
}
