export interface ProductCardProps {
    productId?: string;
    name: string;
    price: number;
    mediaUrls: string;
    quantity?: number;
    description?: string;
    publishedAt?: string;
    publishedBy?: UserProps;
    category?: string
    ratingValue: number;
    totalRating: number;
    onPressCard: () => void;
    onPressBuyNow: () => void;
    items?: string[]

}

export interface UserProps {
    userId?: string;
    profilePicture: string;
}