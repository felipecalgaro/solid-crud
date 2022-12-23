import { User } from "../../models/user";
import { HTTPRequest, HTTPResponse } from "../protocols";

export interface IDeleteUserRepository {
  deleteUser(id: string): Promise<User>;
}

export interface IDeleteUserController {
  handle(httpRequest: HTTPRequest<any>): Promise<HTTPResponse<User>>;
}
