import { productRepository } from "../../infrastruture/repositories/product.respository";

export const productService = {
    getProducts: () => {
        return productRepository.getProducts()
    }
}