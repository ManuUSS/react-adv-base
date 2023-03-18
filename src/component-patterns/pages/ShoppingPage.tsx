import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
                onChange={ onProductCountChange }
                value={ shoppingCart[ p.id ]?.count || 0 }
              >
                <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
                <ProductTitle style={{ fontWeight: 'bold' }}/>
                <ProductButtons style={{ display: 'flex', justifyContent: 'end' }}/>
              </ProductCard>
            ))
          }
        </div>
        <div className="shopping-card">
          {
            Object.entries( shoppingCart ).map( ([ key, product ])  => (
              <ProductCard 
                key={ key }
                product={ product } 
                style={{ backgroundColor: '#70D1F8', width: '100px' }}
                onChange={ onProductCountChange }
                value={ product.count }
              >
                <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
                <ProductButtons style={{ display: 'flex', justifyContent: 'end' }}/>
              </ProductCard>
            ))
          }
            
        </div>

    </div>
  )
}
