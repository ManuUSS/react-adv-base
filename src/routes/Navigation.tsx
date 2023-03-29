import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import logo from '../logo.svg'
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';




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
                        
                    </ul>
                </nav>


                <Routes>
                    <Route path="/register" element={ <RegisterPage /> } />
                    <Route path="/formik-basic" element={ <FormikBasicPage /> } />
                    <Route path="/formik-yup" element={ <FormikYupPage /> } />
                    <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />
                </Routes>

                </div>
        </BrowserRouter>
    )
}
