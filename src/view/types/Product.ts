export type Product = {
    id?: number;
    image_link: string;
    category: string;
    name: string;
    price: number;
    brand?: string;
    product_type?: string;
    description?: string;
    price_sign ?: string;
    product_colors ?: Array<Color>
}
interface Color {
    hex_value: string;
    colour_name: string
}