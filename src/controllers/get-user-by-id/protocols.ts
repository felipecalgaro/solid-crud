import { User } from "../../models/user";

export interface IGetUserByIdRepository {
  getUserById(id: string): Promise<User>;
}
