import { CSSProperties, ReactElement } from 'react';
import { Props as ProductButtonProps } from '../components/ProductButtons';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
    id      : string;
    title   : string;
    img?    : string;
}

export interface PropsProductCard {
    product   : Product;
    children? : ReactElement | ReactElement[];
    className?: string;
    style?    : CSSProperties;
    onChange? : ( args: onChangeArgs ) => void;
    value?    : number;
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
    increaseBy  : ( value: number ) => void;
    product     : Product;
}

export interface ProductCardHOCProps {
    ({ product, children }: PropsProductCard ): JSX.Element;
    Buttons: ( Props: ProductButtonProps ) => JSX.Element;
    Image:   ( Props: ProductImageProps ) => JSX.Element;
    Title:   ( Props: ProductTitleProps ) => JSX.Element;
}