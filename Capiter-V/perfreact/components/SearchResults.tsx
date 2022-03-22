import { ProductItem } from "./ProductItem";
import { useMemo} from 'react';

interface SearchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number;
        price: number;
        priceFormatted: string;
        title: string
    }>
    onAddToWishList: (id: number) => void;
}

export function SearchResults({totalPrice, results, onAddToWishList}: SearchResultsProps) {

    return (
        <div>
            <h2>{totalPrice}</h2>

            {results.map(product => {
                return (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToWishList={onAddToWishList}
                    />
                );
            })}
        </div>
    )
}


/*
    QUANDO UTILIZAR USEMEMO

    1. Para cálculos pesados
    2. Para igualdade referencial (quando a gente repassa aquela informação a um componente filho)

    QUANDO UTILIZAR USECALLBACK
    (Serve quando a gente quer armazenar uma função e não um valor)
*/