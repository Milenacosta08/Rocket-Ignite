import {memo} from 'react';

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }
    onAddToWishList: (id: number) => void;
}

function ProductItemComponent({product, onAddToWishList}: ProductItemProps) {
    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => onAddToWishList(product.id)}>Add to wish list</button>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})


/*
    QUANDO USAR O MEMO

    1. Para componentes que são puros, sempre retorna o mesmo resultado (componente para dividir interface)
    2. Componentes que renderizam demais
    3. Quando o componente renderiza novamente com as mesmas props
    4. Quando o componente está entre o tamanho médio e grande
*/

