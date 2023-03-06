import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg'
import { ShoppingPage } from '../component-patterns/pages/ShoppingPage';
import { LazyPage, LazyPage2, LazyPage3 } from '../lazy-load/pages';



export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home </NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy1" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy </NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="/" element={ <ShoppingPage /> } />
                    <Route path="lazy1" element={ <LazyPage /> } />
                    <Route path="lazy2" element={ <LazyPage2 /> } />
                    <Route path="lazy3" element={ <LazyPage3 /> } />
                    
                    <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />
                </Routes>

                </div>
        </BrowserRouter>
    )
}
