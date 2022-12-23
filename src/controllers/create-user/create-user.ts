import validator from "validator";

import { User } from "../../models/user";
import { badRequest, created, serverError } from "../helpers";
import { HTTPRequest, HTTPResponse, IController } from "../protocols";
import { CreateUserParams, ICreateUserRepository } from "./protocols";

export class CreateUserController implements IController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: HTTPRequest<CreateUserParams>
  ): Promise<HTTPResponse<User | string>> {
    try {
      if (!httpRequest.body) {
        return badRequest("Missing request body.");
      }

      const requiredFields = ["firstName", "lastName", "email", "password"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreateUserParams]?.length) {
          return badRequest(`Field ${field} is required.`);
        }
      }

      const isEmailValid = validator.isEmail(httpRequest.body.email);

      if (!isEmailValid) {
        return badRequest("E-mail is invalid");
      }

      const user = await this.createUserRepository.createUser(httpRequest.body);

      return created<User>(user);
    } catch {
      return serverError();
    }
  }
}
