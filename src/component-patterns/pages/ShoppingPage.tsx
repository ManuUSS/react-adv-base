import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {


  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <ProductCard  
        product={ product } 
        style={{ backgroundColor: '#70D1F8'}}
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {
          ({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
            <>
              <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
              <ProductTitle style={{ fontWeight: 'bold' }}/>
              <ProductButtons style={{ display: 'flex', justifyContent: 'end' }}/>
              <button onClick={ reset }>Reset</button>
              <button onClick={ () => increaseBy( -2 ) }>-2</button>
              {
                ( isMaxCountReached && <button onClick={ () => increaseBy( 2 ) }>+2</button> )
              }
              <span>{ count } - { maxCount }</span>
            </>
          )
        }
      </ProductCard>    
    </div>
  )
}
