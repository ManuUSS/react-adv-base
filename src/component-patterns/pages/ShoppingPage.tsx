import { ProductCard } from '../components/ProductCard';

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
              <ProductCard.ProductImage />
              <ProductCard.ProductTitle />
              <ProductCard.ProductButtons />
            </ProductCard>
        </div>
    </div>
  )
}
