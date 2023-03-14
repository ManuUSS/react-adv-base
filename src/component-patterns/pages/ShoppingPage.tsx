import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
import { Product } from '../interfaces/interfaces';
import { useState } from 'react';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
}
const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
}

const products: Product[] = [ product, product2 ];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {

  const [ shoppingCart, setShoppingCart ] = useState<{ [key: string]: ProductInCart} >({});

  const onProductCountChange = () => {
    console.log('Holaaa');
  }

  return (
    <div>
        <h1>Shopping Page</h1>
        <hr />
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}
        >
          {
            products.map( p => (
              <ProductCard 
                key={ p.id } 
                product={ p } 
                style={{ backgroundColor: '#70D1F8'}}
              >
                <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
                <ProductTitle style={{ fontWeight: 'bold' }}/>
                <ProductButtons style={{ display: 'flex', justifyContent: 'end' }}/>
              </ProductCard>
            ))
          }
        </div>
        <div className="shopping-card">
            <ProductCard 
              product={ product2 } 
              style={{ backgroundColor: '#70D1F8', width: '100px' }}
              onChange={ () => onProductCountChange() }
            >
                <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
                <ProductButtons style={{ display: 'flex', justifyContent: 'end' }}/>
              </ProductCard>
        </div>

    </div>
  )
}
