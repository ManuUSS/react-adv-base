import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { createContext } from 'react';
import { ProductContextProps, PropsProductCard } from '../interfaces/interfaces';

export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: PropsProductCard ) => {

    const { increaseBy, counter, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });
  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
        <div className={ `${ styles.productCard } ${ className }` } style={ style }>
            { 
              children({
                count: counter,
                isMaxCountReached,
                maxCount,
                product,
                increaseBy,
                reset
              }) 
            }
        </div>
    </Provider>
  )
}

