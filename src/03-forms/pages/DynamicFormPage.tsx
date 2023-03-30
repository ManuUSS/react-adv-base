import { Formik, Form } from 'formik'
import { MySelect, MyTextInput } from '../components'
import formJson from '../data/custom-form.json'

const initialValues: { [key: string ]: any } = {};

for ( const input of formJson ) {
    initialValues[ input.name ] = input.value;
}

export const DynamicFormPage = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>
        <Formik
            initialValues={ initialValues }
            onSubmit={ ( vals ) => console.log( vals ) }
        >
            { ( formik ) => ( 
                <Form noValidate>
                    { formJson.map( ({ type, name, label, ...rest }) => {

                        if( type === 'input' || type === 'password' || type === 'email' ) {
                            return (
                                <MyTextInput 
                                    key={ name }
                                    type={ ( type as any ) } 
                                    name={ name } 
                                    label={ label } 
                                    { ...rest } 
                                /> 
                            ) 
                        } else if ( type === 'select' ) {
                            return (
                                <MySelect 
                                    key={ name }
                                    name={ name }
                                    label={ label }
                                >
                                    <option value=''>Seleccione una opcion</option>
                                    {
                                        rest.options?.map( ({ id, label } ) => (
                                            <option key={ id } value={ id }>{ label }</option>
                                        ))
                                    }
                                </MySelect>
                            )
                        }
                        throw new Error(`El type ${ type } no es soportado`);
                    } ) }
                    <button type="submit">Submit</button>
                </Form>
            ) }
        </Formik>
    </div>
  )
}
