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