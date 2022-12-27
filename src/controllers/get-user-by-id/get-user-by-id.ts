import { User } from "../../models/user";
import { ok, serverError } from "../helpers";
import { HTTPRequest, HTTPResponse, IController } from "../protocols";
import { IGetUserByIdRepository } from "./protocols";

export class GetUserByIdController implements IController {
  constructor(private readonly getUserByIdRepository: IGetUserByIdRepository) {}
  async handle(
    httpRequest: HTTPRequest<undefined>
  ): Promise<HTTPResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id;

      const user = await this.getUserByIdRepository.getUserById(id);

      return ok<User>(user);
    } catch (error) {
      return serverError();
    }
  }
}
