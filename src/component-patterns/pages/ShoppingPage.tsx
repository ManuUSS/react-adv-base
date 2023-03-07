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
            
            <ProductCard product={ product } className="bg-dark">
              <ProductCard.Image   className='custom-image' />
              <ProductCard.Title   className='text-white'/>
              <ProductCard.Buttons className='custom-buttons' />
            </ProductCard>
        </div>
    </div>
  )
}
