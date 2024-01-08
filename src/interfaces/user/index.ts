export interface IRequestLogin {
    email: string;
    password: string;
};

export interface IRequestCreateUser extends IRequestLogin { name: string };

export interface IRequestUser extends IRequestCreateUser {};

export interface IResponseUser extends IRequestUser { id: string };

export interface IResponseCreateUser extends IResponseUser {};

export interface IToken {
    token: string;
    id: string;
}