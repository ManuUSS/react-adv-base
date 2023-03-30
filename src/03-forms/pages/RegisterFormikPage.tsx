import { Form, Formik } from 'formik';
import { FormEvent } from 'react';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {


        // name: '',
        // email: '',
        // password1: '',
        // password2: ''

    const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={ ( vals ) => console.log( vals ) }
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                .min( 2, 'El nombre debe ser minimo 2 caracteres' )
                                .required( 'Requerido' ),
                        email: Yup.string()
                                .email('Formato no valido')
                                .required('Requerido'),
                        password1: Yup.string()
                                       .min( 6, 'Minimo 6 caracteres' )
                                       .required('Requerido'),
                        password2:  Yup.string()
                                       .oneOf([ Yup.ref('password1') ], 'Las contrasenas no coinciden')
                                       .required('Requerido')
                    })
                }
            >
                { ({ handleReset }) => (
                    <Form>
                        <MyTextInput 
                            label='Nombre' 
                            name='name' 
                            placeholder='Manuel'
                        />
                        <MyTextInput 
                            label='Email' 
                            name='email' 
                            type='email'
                            placeholder='correo@gmail.com' 
                        />
                        <MyTextInput 
                            label='Password' 
                            name='password1' 
                            type='password'
                            placeholder='*******'
                        />
                        <MyTextInput 
                            label='Confirm Password' 
                            name='password2' 
                            type='password'
                            placeholder='*******'
                        />
                        <button type="submit">Create</button>
                        <button type="button" onClick={ handleReset }>Reset</button>
                    </Form>
                )}
            </Formik>

            
            
        </div>
    )
}
