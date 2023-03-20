import { CSSProperties, ReactElement } from 'react';
import { Props as ProductButtonProps } from '../components/ProductButtons';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { ProductCard } from '../components/ProductCard';

export interface Product {
    id      : string;
    title   : string;
    img?    : string;
}

export interface PropsProductCard {
    product   : Product;
    // children? : ReactElement | ReactElement[] ;
    children: ( args: ProductCardHandler ) => JSX.Element;
    className?: string;
    style?    : CSSProperties;
    onChange? : ( args: onChangeArgs ) => void;
    value?    : number;
    initialValues?: InitialValues
}

export interface InitialValues {
    count?    : number;
    maxCount? : number;
}

export interface ProductCardHandler {
    count: number;
    isMaxCountReached: boolean;
    product: Product;
    maxCount?: number;
    increaseBy: ( value: number ) => void;
    reset: () => void;
}

export interface ProductInCart extends Product {
    count: number;
}

export interface onChangeArgs  {
    product : Product;
    count   : number;
}

export interface ProductContextProps {
    counter     : number;
    product     : Product;
    maxCount?   : number;
    increaseBy: ( value: number ) => void;
}

export interface ProductCardHOCProps {
    ({ product, children }: PropsProductCard ): JSX.Element;
    Buttons: ( Props: ProductButtonProps ) => JSX.Element;
    Image:   ( Props: ProductImageProps ) => JSX.Element;
    Title:   ( Props: ProductTitleProps ) => JSX.Element;
}