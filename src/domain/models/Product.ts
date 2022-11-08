export type ProductId = string

export type Product = {
    id: ProductId
    title: string
    price: number
    description: string;
    category: string;
    image: string;
}