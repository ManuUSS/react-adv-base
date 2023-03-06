import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { createContext, ReactElement, useContext } from 'react';

interface Product {
    id      : string;
    title   : string;
    img?    : string;
}

interface Props {
    product  : Product;
    children?: ReactElement | ReactElement[];
}

interface ProductContextProps {
    counter     : number;
    increaseBy  : ( value: number ) => void;
    product     : Product;
}

const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;


export const ProductImage = ({ img = ''}) => {

    const { product } =useContext( ProductContext );

    let imgToShow: string;

    if( img ) {
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = noImage
    }

    return (
        <img 
            src={ imgToShow } 
            alt='Product - Mug' 
            className={ styles.productImg } 
        />
    )
}

export const ProductTitle = ({ title } : { title?: string }) => {
    const { product } =useContext( ProductContext );

    return (
        <span className={ styles.productDescription }>
            { product.title ? product.title : title }
        </span>
    )
}

export const ProductButtons = () => {

    const {  increaseBy, counter } =useContext( ProductContext );

    return (
        <div className={ styles.buttonsContainer }>
            <button 
                className={ styles.buttonMinus  }
                onClick={ () => increaseBy( -1 ) }
            >
                -
            </button>
            <div className={ styles.countLabel }>{ counter }</div>
            <button 
                className={ styles.buttonAdd }
                onClick={ () => increaseBy( +1 ) }
            >
                +
            </button>
        </div>
    )
}


export const ProductCard = ({ product, children }: Props ) => {

    const { increaseBy, counter } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
        <div className={ styles.productCard }>
            { children }
        </div>
    </Provider>
  )
}

ProductCard.Title   = ProductTitle;
ProductCard.Image   = ProductImage;
ProductCard.Buttons = ProductButtons;
