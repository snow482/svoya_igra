export type UserType = {
    id: number;
    name:string
    email: string;
    points: number;
    password: string;
    createdAt: Date,
    updatedAt: Date
};
export type UserWithoutIdType = Omit<UserType, 'id'>;
export type UserWithoutPasswordType = Omit<UserType, 'password'>;
export type UserIdType = UserType['id'];

export type UserUpdateType = {
    id: number;
    points: number,
    createdAt: Date,
    updatedAt: Date
};

