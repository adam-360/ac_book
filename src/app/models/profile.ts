import { Flight } from "./flight";

export interface UserProfile {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    isAdmin: boolean;
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
    flights: Flight[];
}