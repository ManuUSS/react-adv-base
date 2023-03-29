import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

interface FormValues {
  firstName: string ;
  lastName: string ;
  email: string ;
  terms: boolean;
}

export const FormikComponents = () => {

  return (
    <div>
      <h1>Formik Components Tutorial</h1>
      <Formik 
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
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
                          .required('Requerido'),
            jobType:  Yup.string()
                          .notOneOf([ 'it' ], 'Esta opcion no es permitida')
                          .required('Requerido'),
            terms:    Yup.boolean()
                          .oneOf([ true ], 'Debe aceptar las condiciones')
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
              
              <label htmlFor="jobType">Email</label>
              <Field name='jobType' as='select'>
                <option value=''>Pick something</option>
                <option value='dev'>Developer</option>
                <option value='designer'>Desginer</option>
                <option value='math'>Math Teahcer</option>
                <option value='science'>Scientist</option>
                <option value='it'>IT Pro</option>
              </Field>
              <ErrorMessage name='jobType'  component='span' />


              <label>
                <Field name='terms' type='checkbox' />
                Terms and conditions
              </label>
              <ErrorMessage name='email'    component='span' />

              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
      
    </div>
  )
}
