import { http } from "../http/http";
import { ProductDTO } from '../http/dto/ProductDTO'
import { Product } from "../../domain/models/Product";

export const productRepository = {
    getProducts: async () => {
        const products = await http.get<ProductDTO>('https://fakestoreapi.com/products')

        return products.map((productDTO: Product) => ({
            id: productDTO.id,
            title: productDTO.title,
            price: productDTO.price,
            description: productDTO.description,
            image: productDTO.image,
            category: productDTO.category
        }))
    }
}