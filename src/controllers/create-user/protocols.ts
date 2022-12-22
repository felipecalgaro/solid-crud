import { User } from "../../models/user";
import { HTTPRequest, HTTPResponse } from "../protocols";

export interface ICreateUserController {
  handle(
    httpRequest: HTTPRequest<CreateUserParams>
  ): Promise<HTTPResponse<User>>;
}

export interface CreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>;
}
