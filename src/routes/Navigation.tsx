import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstract, RegisterFormikPage, DynamicFormPage } from '../03-forms/pages';
import logo from '../logo.svg'


export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink 
                                to="/register" 
                                className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                            >
                                Register Page 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/formik-basic" 
                                className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                            >
                                Formik Basic Page
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/formik-yup" 
                                className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                            >
                                Formik Yup
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/formik-components" 
                                className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                            >
                                Formik Components
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/formik-abstract" 
                                className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                            >
                                Formik Abstract
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/formik-register" 
                                className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                            >
                                Formik Register
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/formik-dynamic" 
                                className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                            >
                                Formik Dynamic
                            </NavLink>
                        </li>
                        
                    </ul>
                </nav>


                <Routes>
                    <Route path="/register" element={ <RegisterPage /> } />
                    <Route path="/formik-basic" element={ <FormikBasicPage /> } />
                    <Route path="/formik-yup" element={ <FormikYupPage /> } />
                    <Route path="/formik-components" element={ <FormikComponents /> } />
                    <Route path="/formik-abstract" element={ <FormikAbstract /> } />
                    <Route path="/formik-register" element={ <RegisterFormikPage /> } />
                    <Route path="/formik-dynamic" element={ <DynamicFormPage /> } />
                    <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />
                </Routes>

                </div>
        </BrowserRouter>
    )
}
