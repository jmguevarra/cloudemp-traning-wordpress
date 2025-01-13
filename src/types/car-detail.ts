export interface ICarDetails{
    specifications: {
        model: string,
        price: number;
        color: string;
        engine_size: string;
        no_of_seats: number;
        year_of_manufacture: string;
    };
    promos: {
        on_sale: boolean;
        discount: number;
    };
        car_post_options: {
        is_featured: boolean;
    };
}