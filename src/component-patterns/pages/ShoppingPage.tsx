import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
}

export const ShoppingPage = () => {
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
            <ProductCard product={ product }>
              <ProductImage className='custom-image'/>
              <ProductTitle title='Hola Mundo' className='text-white'/>
              <ProductButtons className='custom-buttons' />
            </ProductCard>

            <ProductCard product={ product } style={{ backgroundColor: '#70D1F8'}}>
              <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
              <ProductTitle title='Hola Mundo' style={{ fontWeight: 'bold' }}/>
              <ProductButtons style={{ display: 'flex', justifyContent: 'end' }}/>
            </ProductCard>
            
            <ProductCard product={ product } className="bg-dark">
              <ProductCard.Image   className='custom-image' />
              <ProductCard.Title   className='text-white'/>
              <ProductCard.Buttons className='custom-buttons' />
            </ProductCard>
        </div>
    </div>
  )
}
