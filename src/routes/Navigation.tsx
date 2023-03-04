import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { LazyPage, LazyPage2, LazyPage3 } from '../lazy-load/pages';

import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="lazy1" element={ <LazyPage /> } />
                    <Route path="lazy2" element={ <LazyPage2 /> } />
                    <Route path="lazy3" element={ <LazyPage3 /> } />
                    
                    <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
