import { ReactElement } from "react";

export interface Product {
    id      : string;
    title   : string;
    img?    : string;
}

export interface PropsProductCard {
    product  : Product;
    children?: ReactElement | ReactElement[];
    className?: string;
}

export interface ProductContextProps {
    counter     : number;
    increaseBy  : ( value: number ) => void;
    product     : Product;
}

export interface ProductCardHOCProps {
    ({ product, children }: PropsProductCard ): JSX.Element;
    Title: ({ title }: { title?: string }) => JSX.Element;
    Image: ({ img }: { img?: string }) => JSX.Element;
    Buttons: ({ className }: { className? : string }) => JSX.Element;
}