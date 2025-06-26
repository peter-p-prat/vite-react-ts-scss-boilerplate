export interface UserResponse {
    data: {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    };
    support: {
        url: string;
        text: string;
    };
}

export type User = UserResponse["data"];

export interface UserSlice {
    user?: User | null;
    isLoadingUser?: boolean;
}

export const initialState: UserSlice = {
    isLoadingUser: false,
};
