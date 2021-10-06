import { AxiosError } from "axios";

export type InitialStateUsers = {
    currentPage: number;
    userList: {
        data: User[];
        loading: boolean;
        error: AxiosError | null;
    },
    positiveUsersList: User[];
    negativeUsersList: User[];
    activeTab: '1' | '2'
}


export type UserRequestType = {size: number; page: number};

export type TypeRating = 'POSITIVE' | 'NEGATIVE'

export type User = {
    id: number;
    uid: string;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    avatar: string;
    gender: string;
    phone_number: string;
    social_insurance_number: string;
    date_of_birth: string;
    employment: {
        title: string;
        key_skill: string;
    },
    address: {
        city: string;
        street_name: string;
        street_address: string;
        zip_code: string;
        state: string;
        country: string;
        coordinates: {
            lat: number;
            lng: number;
        }
    },
    credit_card: {
        cc_number: string;
    },
    subscription: {
        plan: string;
        status: string;
        payment_method: string;
        term: string;
    },
    rating: number; //added property 
}