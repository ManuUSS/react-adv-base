import { useFormik } from 'formik';
import '../styles/styles.css';

export const FormikBasicPage = () => {

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: values => {
      console.log( values )
    }
  })

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form noValidate onSubmit={ handleSubmit }>
        
        <label htmlFor="firstName">First Name</label>
        <input 
          type="text" 
          name="firstName"
          value={ values.firstName }
          onChange={ handleChange }
        />
        <span>Is required</span>

        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text" 
          name="lastName"
          value={ values.lastName }
          onChange={ handleChange }
          />
        <span>Is required</span>

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email"
          value={ values.email }
          onChange={ handleChange }
          />
        <span>Is required</span>
        <span>Check for a valid email</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
