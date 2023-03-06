import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../lazy-load/pages/NoLazy';
// import { LazyPage, LazyPage2, LazyPage3 } from '../lazy-load/pages';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout" */ '../lazy-load/layout/LazyLayout') );
const Lazy1 = lazy( () => import(/* webpackChunkName: "LazyPage1" */ '../lazy-load/pages/LazyPage') );
const Lazy2 = lazy( () => import(/* webpackChunkName: "LazyPage2" */ '../lazy-load/pages/LazyPage2') );
const Lazy3 = lazy( () => import(/* webpackChunkName: "LazyPage3" */ '../lazy-load/pages/LazyPage3') );

export const routes: Route[] = [
    {
        to: '/lazyload/', 
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No lazy'
    }
]