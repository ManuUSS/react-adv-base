import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import { MyCheckbox } from '../components/MyCheckbox';

interface FormValues {
  firstName: string ;
  lastName: string ;
  email: string ;
  terms: boolean;
}

export const FormikAbstract = () => {

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
              <MyTextInput 
                label='First Name' 
                name='firstName' 
                placeholder='Name' 
              />
              <MyTextInput 
                label='Last Name' 
                name='lastName'
                placeholder='Last name' 
              />
              <MyTextInput 
                label='Email' 
                name='email' 
                type='email' 
                placeholder='Email'
              />
    
              <MySelect label='Job Type' name='jobType'>
                <option value=''>Pick something</option>
                <option value='dev'>Developer</option>
                <option value='designer'>Desginer</option>
                <option value='math'>Math Teahcer</option>
                <option value='science'>Scientist</option>
                <option value='it'>IT Pro</option>
              </MySelect>

              <MyCheckbox label='Terms and conditions' name='terms' />

              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
      
    </div>
  )
}
