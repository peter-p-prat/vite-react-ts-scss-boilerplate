export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
}

export interface UserSlice {
    user?: User | null;
    isLoadingUser?: boolean;
}

export const initialState: UserSlice = {
    isLoadingUser: false,
};
