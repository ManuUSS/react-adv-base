import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

interface Product {
    id      : string;
    title   : string;
    img?    : string;
}

interface Props {
    product: Product
}

export const ProductCard = ({ product }: Props ) => {

    const { increaseBy } = useProduct();

  return (
    <div className={ styles.productCard }>

        <img 
            src={ product.img ? product.img : noImage } 
            alt='Coffe - Mug' 
            className={ styles.productImg } 
        />
        <span className={ styles.productDescription }>{ product.title }</span>
        <div className={ styles.buttonsContainer }>
            <button 
                className={ styles.buttonMinus  }
                onClick={ () => increaseBy( -1 ) }
            >
                -
            </button>
            <div className={ styles.countLabel }>0</div>
            <button 
                className={ styles.buttonAdd }
                onClick={ () => increaseBy( +1 ) }
            >
                +
            </button>
        </div>
    </div>
  )
}
