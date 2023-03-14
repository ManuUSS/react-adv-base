import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { createContext } from 'react';
import { ProductContextProps, PropsProductCard } from '../interfaces/interfaces';

export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange }: PropsProductCard ) => {

    const { increaseBy, counter } = useProduct( onChange );

  return (
    <Provider value={{ counter, increaseBy, product }}>
        <div className={ `${ styles.productCard } ${ className }` } style={ style }>
            { children }
        </div>
    </Provider>
  )
}

