import { useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface UseProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void
}

export const useProduct = ( { onChange, product }: UseProductArgs ) => {
    
    const [ counter, setCounter] = useState(0);

    const increaseBy = ( value: number ) => {
        const newValue = Math.max( counter + value, 0 );
        setCounter( prev => Math.max( prev + value, 0 ) );
        onChange && onChange({ count: newValue, product });
    }

    return {
        increaseBy,
        counter
    }
}