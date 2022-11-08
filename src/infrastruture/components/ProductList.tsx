import React, { useEffect, useState } from 'react'
import { Product } from '../../domain/models/Product'
import { productService } from '../../domain/services/Product.service'

export const ProductList: React.FC = ({ onSelectProduct}) => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        productService.getProducts().then(setProducts)
    }, [])

    return(
        <ul>
            {products.map((product) => <li key={product.id}>
                <button onClick={() => { onSelectProduct(product) }}>{product.title}</button>
            </li>)}
        </ul>
    )
}