import { ImageSourcePropType } from "react-native";

export interface ProductCardProps {
    productId?: string;
    name: string;
    price: number;
    mediaUrls: ImageSourcePropType;
    quantity?: number;
    description?: string;
    publishedAt?: string;
    publishedBy?: UserProps;
    category?: string
    ratingValue: number;
    totalRating: number;
    onPressCard: () => void;
    onPressBuyNow: () => void | string;
    items?: string[]

}

export interface UserProps {
    userId?: string;
    profilePicture: string;
}