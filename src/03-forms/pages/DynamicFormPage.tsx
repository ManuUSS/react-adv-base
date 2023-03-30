import { Formik, Form } from 'formik'
import { MyTextInput } from '../components'
import formJson from '../data/custom-form.json'

export const DynamicFormPage = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>
        <Formik
            initialValues={{
                name: ''
            }}
            onSubmit={ ( vals ) => console.log( vals ) }
        >
            { ( formik ) => ( 
                <Form>
                    { formJson.map( ({ type, name, label, ...rest }) => {
                        return (
                            <MyTextInput 
                                key={ name }
                                type={ ( type as any ) } 
                                name={ name } 
                                label={ label } 
                                { ...rest } 
                            /> 
                        ) 
                    } ) }
                    <button type="submit">Submit</button>
                </Form>
            ) }
        </Formik>
    </div>
  )
}
