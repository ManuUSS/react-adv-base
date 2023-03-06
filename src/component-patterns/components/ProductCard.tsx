import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductCard = () => {

    const { increaseBy } = useProduct();

  return (
    <div className={ styles.productCard }>
        <img src='./coffe-mug.png' alt='Coffe Mug' className={ styles.productImg } />
        <img src={ noImage } alt='No Image' className={ styles.productImg } />
        <span className={ styles.productDescription }>Coffe Mug</span>
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
