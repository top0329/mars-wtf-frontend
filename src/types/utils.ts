export type PlaceItem = {
    id: string;
    name: string;
    href: string;
    price: number;
    isNew?: boolean;
    rating?: number;
    ratingCount?: number;
    description?: string;
    imageSrc: string;
};