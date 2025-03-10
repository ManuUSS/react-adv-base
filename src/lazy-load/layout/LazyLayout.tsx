import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { LazyPage, LazyPage2, LazyPage3 } from '../pages';


export const LazyLayout = () => {
  return (
    <div>
        <h1>Lazy Layout</h1>
        <ul>
            <li>
                <NavLink to="lazy1">Lazy 1</NavLink>
                <NavLink to="lazy2">Lazy 2</NavLink>
                <NavLink to="lazy3">Lazy 3</NavLink>
            </li>
        </ul>
        <Routes>
            <Route path='lazy1' element={ <LazyPage />  }/>
            <Route path='lazy2' element={ <LazyPage2 /> }/>
            <Route path='lazy3' element={ <LazyPage3 /> }/>

            <Route path='*' element={ <Navigate replace to="lazy1" /> } />
        </Routes>
    </div>
  )
}

export default LazyLayout;

